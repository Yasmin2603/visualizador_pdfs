# Visualizador de provas em PDF

Ferramenta para estudar com provas em PDF, 100% no navegador. Nenhum arquivo é enviado para servidor: os PDFs ficam guardados no seu próprio navegador (IndexedDB).

## O que faz

- **Biblioteca:** arraste PDFs ou uma pasta inteira. Período, turma e tipo (prova, gabarito, formulário) são preenchidos pelo nome do arquivo e podem ser editados.
- **Pareamento:** liga cada gabarito à prova do mesmo período e turma (automático ou manual).
- **Checklist:** marque o que já fez, com barra de progresso e filtros (pendentes, feitas, tipo, busca).
- **Visualizador:** tela cheia, zoom (botões, `Ctrl` + roda, `+`/`-`/`0`), prova e gabarito lado a lado e formulário em coluna ao lado (tecla `R`).
- **Quiz:** identifica as questões ("1ª Questão", "2ª Questão"…) em qualquer PDF, recorta cada uma em um card, guarda seu rascunho, permite marcar acertei/errei/revisar e calcula a nota pelos pontos de cada questão.
- **Backup:** exporta e restaura marcações, títulos e vínculos (os PDFs não entram no arquivo).

## Como usar

Online (GitHub Pages): abra o link do site e carregue seus PDFs.

Local:

```
python -m http.server 8000
```

e acesse http://localhost:8000. Ou, no IntelliJ/VS Code, abra o `index.html` pelo servidor embutido.

## Observações

- Cada navegador (e cada aparelho) tem a sua própria biblioteca. Se limpar os dados do navegador, ela some. Use o botão de backup para guardar as marcações.
- Os recortes do quiz dependem de o PDF ter texto selecionável e títulos do tipo "1ª Questão". Em PDFs escaneados, o quiz divide por página.
- As bibliotecas PDF.js são carregadas da internet (cdnjs).
- Este repositório não contém provas nem gabaritos, e o `.gitignore` bloqueia `*.pdf`. Respeite os direitos autorais do material que você carregar.
