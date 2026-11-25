# Apostilas de revisão

Site estático para o GitHub Pages. O `index.html` mostra os concursos como pastas. Dentro de cada concurso ficam as disciplinas, dentro de cada disciplina ficam as aulas, e clicar numa aula abre a apostila.

## Estrutura

```
index.html        ← navegação em pastas
catalogo.js       ← lista de concursos, disciplinas e aulas (o único arquivo a editar)
.nojekyll         ← faz o GitHub Pages servir os arquivos sem processar
concursos/
  bacen-2026/
    banco-de-dados/aula-00.html, aula-01.html
    sistemas-operacionais/aula-00.html
```

## Publicar no GitHub Pages

1. Crie um repositório e envie o conteúdo desta pasta para a raiz dele.
2. No GitHub, abra **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Adicionar uma aula nova

1. Salve o HTML da apostila na pasta da disciplina, por exemplo `concursos/bacen-2026/sistemas-operacionais/aula-01.html`.
2. Em `catalogo.js`, acrescente um item na lista `aulas` da disciplina:

```js
{ id: "aula-01", titulo: "Aula 01", tema: "Assunto da aula", tags: "palavras para a busca", arquivo: "concursos/bacen-2026/sistemas-operacionais/aula-01.html" }
```

Disciplinas e concursos novos seguem o mesmo formato (`id`, `nome`, `disciplinas` / `aulas`). Use `id` sem espaços nem acentos, porque ele aparece no link (ex.: `#/bacen-2026/banco-de-dados/aula-00`).

## Testar no computador

O `index.html` abre direto no navegador. Se preferir um servidor local:

```bash
cd pasta-do-site
python3 -m http.server 8000
# abra http://localhost:8000
```
