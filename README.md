# Site FEPICE 2026

Estrutura inicial (Etapa 1) do site oficial da FEPICE — Feira de Pesquisa, Extensão,
Inovação, Ciência e Tecnologia. Site estático (HTML/CSS/JS), sem backend e sem
banco de dados, pensado para hospedagem gratuita.

## O que já está pronto

- Estrutura completa de página única com âncoras: Início, Sobre a FEPICE,
  Inscrições, Edital, Projetos Aprovados e Materiais.
- Menu responsivo (funciona em celular, tablet e desktop).
- **Identidade visual oficial**: paleta extraída diretamente da logo
  (azul `#091C8C`, verde `#256C2C`, dourado `#FBCD05`), tipografia
  Fraunces (títulos) + Inter (texto) e a logo oficial aplicada no
  cabeçalho, na página inicial e no rodapé, sem distorção.
- **Inscrições ativas**: botão "Inscrições" já aponta para o formulário
  oficial (`https://forms.gle/S7zV8ow6jTha5kDH8`).
- Edital, Projetos Aprovados e o restante de Materiais continuam mostrando
  **"Em breve"** até que os documentos oficiais sejam entregues — nada foi
  inventado.
- SEO básico: title, meta description, Open Graph e estrutura semântica.
- Acessibilidade básica: HTML semântico, link de pular para o conteúdo,
  foco visível no teclado, textos alternativos nas imagens.

## O que falta (próximas etapas)

- Etapa 4: testes em celular/desktop, links, imagens, acessibilidade e SEO.
- Ativar edital, modelo de banner e lista de projetos aprovados assim que
  a organização entregar os arquivos (basta editar `js/config.js`).

## Como rodar localmente

Não precisa de instalação. Duas opções:

1. Abra o arquivo `index.html` diretamente no navegador.
2. Ou, se tiver Python instalado, rode um servidor local (recomendado, evita
   bloqueios de navegador com módulos/JS):
   ```
   cd fepice-site
   python3 -m http.server 8000
   ```
   Depois acesse `http://localhost:8000`.

## Como atualizar o conteúdo quando o material oficial chegar

Toda a lógica de "o que já está disponível" fica em **`js/config.js`**.
Você não precisa mexer no HTML nem no CSS para ativar um item — só editar
esse arquivo:

| Item | O que fazer |
|---|---|
| Texto institucional ("Sobre") | `sobre.disponivel = true` e preencher `sobre.texto` |
| Formulário de inscrição | `inscricoes.disponivel = true` e colar o link em `inscricoes.url` |
| Edital em PDF | Colocar o PDF em `assets/docs/`, `edital.disponivel = true` e apontar `edital.arquivoUrl` |
| Modelo de banner | Colocar o arquivo em `assets/docs/`, `banner.disponivel = true` e apontar `banner.arquivoUrl` |
| Projetos aprovados | `projetosAprovados.disponivel = true` e preencher a lista |
| Instagram | Preencher `evento.instagramUrl` |

A logo oficial já está em `assets/logo/logo-fepice-oficial.jpg`. Se a
organização enviar uma versão atualizada (ex: com fundo transparente em
PNG/SVG), basta substituir esse arquivo e ajustar o caminho no `index.html`
(cabeçalho, hero e rodapé) — sempre mantendo as proporções originais, sem
distorcer.

## Publicar no GitHub

```
cd fepice-site
git init
git add .
git commit -m "Estrutura inicial do site FEPICE 2026"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

## Hospedagem gratuita (sugestões)

Qualquer uma dessas funciona bem para um site estático como este:

- **GitHub Pages** — grátis, direto do próprio repositório.
- **Netlify** ou **Vercel** — grátis, deploy automático a cada `git push`.
- **Cloudflare Pages** — grátis, também com deploy automático.

O processo geral é: conectar a plataforma ao repositório do GitHub e apontar
para a raiz do projeto (não precisa de comando de build).

## Configurar o domínio www.fepice.com.br

1. Registrar/gerenciar o domínio `fepice.com.br` no **Registro.br**.
2. Na plataforma de hospedagem escolhida, adicionar o domínio customizado
   (`fepice.com.br` e `www.fepice.com.br`).
3. A plataforma vai indicar os registros DNS a configurar no Registro.br
   (geralmente um registro `A`/`ALIAS` para o domínio raiz e um `CNAME`
   para o `www`).
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
│   │   └── logo-fepice-oficial.jpg
│   ├── docs/                 ← colocar edital.pdf, banner, etc. aqui
│   └── img/                  ← favicon, imagem de Open Graph, etc.
└── README.md
```
