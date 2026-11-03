/* Base compartilhada: guarda os PDFs no navegador (IndexedDB). Nada é enviado para servidor. */
const DB=(()=>{
 let p;
 const open=()=>p||(p=new Promise((res,rej)=>{
  const r=indexedDB.open("visualizador-pdf",1);
  r.onupgradeneeded=()=>r.result.createObjectStore("docs",{keyPath:"id"});
  r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}));
 const tx=async(mode,fn)=>{const db=await open();return new Promise((res,rej)=>{
  const t=db.transaction("docs",mode),r=fn(t.objectStore("docs"));
  t.oncomplete=()=>res(r&&r.result);t.onerror=()=>rej(t.error)})};
 return{all:()=>tx("readonly",s=>s.getAll()),get:id=>tx("readonly",s=>s.get(id)),
  put:d=>tx("readwrite",s=>s.put(d)),del:id=>tx("readwrite",s=>s.delete(id))}
})();
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const KIND={prova:"Prova",gabarito:"Gabarito",formulario:"Formulário",outro:"Outro"};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}

/* tenta adivinhar período, turma e tipo pelo nome do arquivo (dá para editar depois) */
function parseName(name){
 const base=name.replace(/\.pdf$/i,"");
 const m=base.match(/(20\d\d)\s*[-_.]\s*([12])/);
 const t=base.match(/(M0?0?3\s*-?\s*[A-Z]+|NB\s?\d{3})/i);
 let kind="prova";
 if(/gabarito|resolu[cç]/i.test(base))kind="gabarito";
 else if(/formul[aá]rio/i.test(base))kind="formulario";
 return{title:base,per:m?m[1]+"-"+m[2]:"",turma:t?t[1].replace(/\s+/g,"").toUpperCase():"",kind};
}
async function addFiles(files){
 const existing=await DB.all(),seen=new Set(existing.map(d=>d.name+"|"+d.size));let n=0;
 for(const f of files){
  if(!/\.pdf$/i.test(f.name)&&f.type!=="application/pdf")continue;
  const k=f.name+"|"+f.size;if(seen.has(k))continue;
  await DB.put({id:uid(),name:f.name,size:f.size,added:Date.now(),blob:f,...parseName(f.name),pair:"",done:false});
  seen.add(k);n++}
 await autoPair();return n;
}
/* liga cada gabarito à prova do mesmo período + turma */
async function autoPair(){
 const all=await DB.all(),ids=new Set(all.map(d=>d.id));
 for(const g of all.filter(d=>d.kind==="gabarito")){
  if(g.pair&&ids.has(g.pair))continue;
  const p=all.find(x=>x.kind==="prova"&&!x.pair&&x.per&&x.turma&&x.per===g.per&&x.turma===g.turma);
  if(p){g.pair=p.id;p.pair=g.id;await DB.put(g);await DB.put(p)}}
}
