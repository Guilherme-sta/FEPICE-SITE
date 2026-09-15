# Portal — Semana de Ciência e Tecnologia 2026

Portal único para três eventos que acontecem na mesma semana em Teresina/PI,
de 6 a 9 de outubro de 2026:

- **FEPICE 2026** — Feira de Pesquisa, Extensão, Inovação, Ciência e Tecnologia
- **Teresina Info 2026**
- **IdeiaLab 2026**

Site 100% estático (HTML/CSS/JS puro), sem backend e sem banco de dados,
pronto para hospedagem gratuita (GitHub Pages, Netlify, Vercel ou
Cloudflare Pages).

## O que já está pronto

- Header e Hero com as três logos (a FEPICE já tem logo oficial; os outros
  dois eventos aparecem com um placeholder neutro até a logo chegar).
- **Sobre os Eventos**: um card por evento — o texto institucional da FEPICE
  já está ativo; os demais mostram "Conteúdo institucional será
  disponibilizado posteriormente." até serem enviados.
- **Inscrições**: 3 cards independentes. A FEPICE já aponta para o
  formulário oficial (`https://forms.gle/S7zV8ow6jTha5kDH8`); os outros
  dois mostram "Inscrições em breve" até o link chegar.
- **Cronograma da Semana**: módulo em abas (Palestras, Minicursos,
  Apresentação de Trabalhos), controlado por uma única flag
  (`cronograma.showSchedule`). Enquanto `false`, mostra apenas
  "Cronograma oficial será divulgado em breve".
- **Materiais e Editais**: mantido como na versão anterior (Edital,
  Formulário de inscrição, Modelo de Banner, Projetos Aprovados).
- **Apoio Institucional & Realização**: bloco de destaque exclusivo para a
  logo do LIMS, e uma área flexível para os demais apoiadores — ambos com
  placeholder neutro enquanto as logos não chegam.
- Nada foi inventado: todo conteúdo ainda não confirmado aparece como
  "Em breve" (ou variações), seguindo o padrão já usado desde a primeira
  versão do site.

## O que falta (aguardando a organização)

- Logos oficiais de Teresina Info, IdeiaLab e LIMS.
- Links de inscrição de Teresina Info e IdeiaLab.
- Textos institucionais de Teresina Info e IdeiaLab.
- Cronograma da semana (palestras, minicursos, apresentação de trabalhos).
- Lista de apoiadores/patrocinadores secundários.
- Edital oficial, modelo de banner e lista de projetos aprovados.

## Como rodar localmente

1. Abra o arquivo `index.html` diretamente no navegador, **ou**
2. Rode um servidor local (recomendado):
   ```
   cd fepice-site
   python3 -m http.server 8000
   ```
   Depois acesse `http://localhost:8000`.

## Como atualizar o conteúdo quando o material oficial chegar

Toda a lógica de "o que já está disponível" fica em **`js/config.js`**.
Você não precisa mexer no HTML nem no CSS — só editar esse arquivo:

| Item | O que fazer |
|---|---|
| Logo de um evento/apoiador | Salve o arquivo em `assets/logo/` (veja `assets/logo/LEIA-ME.txt`) e preencha o campo `logo` correspondente em `config.js` |
| Texto institucional ("Sobre") de um evento | `eventos.<evento>.sobreDisponivel = true` e preencher `sobreTexto` |
| Link de inscrição de um evento | `eventos.<evento>.inscricao.disponivel = true` e colar o link em `inscricao.url` |
| Cronograma da semana | Preencher `cronograma.itens` (array de objetos) e trocar `cronograma.showSchedule` para `true` |
| Edital em PDF | Colocar o PDF em `assets/docs/`, `edital.disponivel = true` e apontar `edital.arquivoUrl` |
| Modelo de banner | Colocar o arquivo em `assets/docs/`, `banner.disponivel = true` e apontar `banner.arquivoUrl` |
| Projetos aprovados | `projetosAprovados.disponivel = true` e preencher a lista |
| Logo do LIMS | Salvar em `assets/logo/logo-lims.png` e preencher `apoiadores.lims.logo` |
| Outros apoiadores | Adicionar `{ nome, logo }` em `apoiadores.demais` |
| Instagram | Preencher `semana.instagramUrl` |

Exemplo de item de cronograma (`cronograma.itens`):
```js
{ categoria: "Palestras", dia: "06/10", horario: "14:00",
  titulo: "Título da palestra", responsavel: "Nome do palestrante", local: "Auditório principal" }
```
`categoria` deve ser exatamente uma das strings em `cronograma.categorias`
("Palestras", "Minicursos" ou "Apresentação de Trabalhos").

## Publicar no GitHub

```
cd fepice-site
git init
git add .
git commit -m "Portal unificado — FEPICE, Teresina Info e IdeiaLab 2026"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

## Hospedagem gratuita (sugestões)

- **GitHub Pages** — grátis, direto do próprio repositório.
- **Netlify** ou **Vercel** — grátis, deploy automático a cada `git push`.
- **Cloudflare Pages** — grátis, também com deploy automático.

## Configurar o domínio www.fepice.com.br

1. Registrar/gerenciar o domínio `fepice.com.br` no **Registro.br**.
2. Na plataforma de hospedagem escolhida, adicionar o domínio customizado
   (`fepice.com.br` e `www.fepice.com.br`).
3. A plataforma vai indicar os registros DNS a configurar no Registro.br.
4. Aguardar a propagação do DNS (pode levar algumas horas).

## Estrutura de pastas

```
fepice-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js      ← editar aqui quando o material oficial chegar
│   └── script.js
├── assets/
│   ├── logo/
│   │   ├── logo-fepice-oficial.jpg
│   │   └── LEIA-ME.txt      ← lista os nomes de arquivo esperados
│   ├── docs/                ← edital, banner, etc.
│   └── img/                 ← favicon, imagem de Open Graph, etc.
└── README.md
```
