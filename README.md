# PDFocus

Um espaço de estudos no navegador para organizar, abrir e comparar seus próprios PDFs.

## Funcionalidades

- Adicionar um ou vários PDFs por seleção de arquivos ou arrastar e soltar.
- Biblioteca com busca, tamanho e data de adição.
- Abrir documentos em um visualizador com renderização via PDF.js.
- Comparar dois documentos lado a lado.
- Ajustar o zoom.
- Excluir documentos da biblioteca.
- Armazenamento local com IndexedDB: os arquivos não são enviados para um servidor e não exigem cadastro.

## Como executar

Não há etapa de build nem dependências para instalar. Basta abrir `index.html` em um navegador moderno.

Se preferir usar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse http://localhost:8000.

## Publicar no GitHub Pages

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`.
4. Salve. O GitHub Pages publicará o `index.html`.

## Privacidade e limitações

Os PDFs são armazenados no IndexedDB do navegador e permanecem no dispositivo/perfil de navegador em que foram adicionados. Limpar os dados do site ou usar outro navegador/dispositivo pode remover ou tornar esses arquivos inacessíveis. Faça backup dos documentos originais.

O PDF.js é carregado de uma CDN, então a primeira abertura do visualizador requer conexão com a internet.

## Tecnologias

HTML, CSS, JavaScript, IndexedDB e [PDF.js](https://mozilla.github.io/pdf.js/).
