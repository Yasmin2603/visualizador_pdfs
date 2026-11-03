# ProvaLab

**Organize suas provas. Acompanhe sua evolução. Estude com mais foco.**

O ProvaLab é uma ferramenta de estudos no navegador para organizar provas em PDF, relacionar gabaritos, acompanhar o que já foi resolvido e transformar questões em um fluxo de revisão.

> **Privacidade:** os PDFs são armazenados localmente no navegador, usando IndexedDB. Eles não são enviados para um servidor e não são incluídos no repositório.

## Funcionalidades

- **Biblioteca de PDFs:** adicione vários arquivos ou uma pasta inteira por seleção, arraste e solte.
- **Organização automática:** tenta identificar período, turma e tipo pelo nome do arquivo; os dados podem ser editados.
- **Pareamento de gabaritos:** vincule prova e gabarito manualmente ou tente o pareamento automático por período e turma.
- **Checklist de estudos:** marque materiais como concluídos, acompanhe o progresso e filtre por status ou tipo.
- **Visualizador:** zoom, tela cheia, navegação entre materiais e visualização da prova com o gabarito lado a lado.
- **Formulários:** mantenha um formulário de referência disponível ao estudar.
- **Quiz:** identifica títulos como “1ª Questão”, separa questões em cards, permite dividir itens a), b), c), guardar rascunhos e marcar acertos, erros e questões para revisar.
- **Resultado:** calcula o desempenho usando a pontuação detectada no PDF, quando disponível.
- **Backup:** exporta e restaura metadados, marcações e vínculos. Os PDFs precisam ser adicionados novamente se você trocar de navegador ou aparelho.

## Como executar

### GitHub Pages

Acesse a página publicada pelo GitHub Pages e carregue seus próprios PDFs.

### Localmente

Na pasta do projeto, execute:

```bash
python -m http.server 8000
```

Depois abra [http://localhost:8000](http://localhost:8000).

Também funciona com o servidor local do VS Code ou IntelliJ. Evite abrir o HTML diretamente por `file://`, pois alguns navegadores restringem recursos locais.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Biblioteca, organização, checklist e visualizador |
| `quiz.html` | Leitura do PDF, separação de questões e revisão |
| `lib.js` | Banco local IndexedDB e funções compartilhadas |
| `.gitignore` | Impede o envio acidental de PDFs e backups |

## Armazenamento e privacidade

- Cada navegador e aparelho possui sua própria biblioteca.
- Limpar os dados do site pode apagar os PDFs armazenados.
- O backup salva metadados, não o conteúdo dos PDFs.
- Os PDFs são processados no próprio navegador com PDF.js, carregado por CDN.
- O repositório não deve conter provas, gabaritos ou outros materiais protegidos por direitos autorais.

## Limitações conhecidas

- O reconhecimento de questões depende de texto selecionável e de títulos em um formato semelhante a “1ª Questão”. PDFs escaneados podem ser divididos por página.
- A identificação automática de período, turma e tipo depende do padrão usado no nome dos arquivos; revise os dados quando necessário.
- A biblioteca não sincroniza automaticamente entre dispositivos.

## Tecnologias

HTML, CSS, JavaScript, IndexedDB e [PDF.js](https://mozilla.github.io/pdf.js/).
