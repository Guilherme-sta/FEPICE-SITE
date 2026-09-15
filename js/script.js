document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Menu responsivo ---------- */
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menuPrincipal");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const aberto = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(aberto));
    });

    menu.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Ano no rodapé ---------- */
  const anoEl = document.getElementById("ano-atual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Conteúdo dirigido por config.js ---------- */
  if (typeof SITE_CONFIG === "undefined") return;

  const ORDEM_EVENTOS = ["fepice", "teresinaInfo", "ideiaLab"];

  /* ---------- Helper: logo real (se houver) ou placeholder neutro ---------- */
  function logoOuPlaceholder(nome, logoPath, extraClass) {
    if (logoPath) {
      return `<div class="logo-box ${extraClass}"><img src="${logoPath}" alt="${nome}" class="logo-img"></div>`;
    }
    return `<div class="logo-placeholder ${extraClass}"><span>${nome}</span></div>`;
  }

  /* ---------- Header: 3 logos ---------- */
  const headerLogos = document.getElementById("header-logos");
  if (headerLogos) {
    headerLogos.innerHTML = ORDEM_EVENTOS.map((chave) => {
      const ev = SITE_CONFIG.eventos[chave];
      const destaque = chave === "fepice" ? "logo-img--header-principal" : "logo-img--header";
      return logoOuPlaceholder(ev.nome, ev.logo, `${destaque}`);
    }).join("");
  }

  /* ---------- Hero: 3 logos ---------- */
  const heroLogos = document.getElementById("hero-logos");
  if (heroLogos) {
    heroLogos.innerHTML = ORDEM_EVENTOS.map((chave) => {
      const ev = SITE_CONFIG.eventos[chave];
      const destaque = chave === "fepice" ? "logo-img--hero-principal" : "logo-img--hero";
      return logoOuPlaceholder(ev.nome, ev.logo, `${destaque}`);
    }).join("");
  }

  /* ---------- Footer: 3 logos ---------- */
  const footerLogos = document.getElementById("footer-logos");
  if (footerLogos) {
    footerLogos.innerHTML = ORDEM_EVENTOS.map((chave) => {
      const ev = SITE_CONFIG.eventos[chave];
      return logoOuPlaceholder(ev.nome, ev.logo, "logo-img--footer");
    }).join("");
  }

  // Instagram no rodapé
  const instagramEl = document.getElementById("footer-instagram");
  if (instagramEl && SITE_CONFIG.semana.instagramUrl) {
    instagramEl.innerHTML = `<a href="${SITE_CONFIG.semana.instagramUrl}" target="_blank" rel="noopener">Instagram</a>`;
  }

  /* ---------- Sobre os Eventos (3 cards) ---------- */
  const sobreCards = document.getElementById("eventos-sobre-cards");
  if (sobreCards) {
    sobreCards.innerHTML = ORDEM_EVENTOS.map((chave) => {
      const ev = SITE_CONFIG.eventos[chave];
      const texto = ev.sobreDisponivel && ev.sobreTexto
        ? ev.sobreTexto
        : "Conteúdo institucional será disponibilizado posteriormente.";
      const textoClasse = ev.sobreDisponivel && ev.sobreTexto ? "" : "placeholder-text";
      return `
        <article class="card card--evento" id="evento-sobre-${chave}">
          <h3 class="card__title">${ev.nome}</h3>
          ${ev.nomeCompleto ? `<p class="card__eyebrow">${ev.nomeCompleto}</p>` : ""}
          <p class="card__text ${textoClasse}">${texto}</p>
        </article>
      `;
    }).join("");
  }

  /* ---------- Inscrições (3 cards) ---------- */
  const inscricoesCards = document.getElementById("eventos-inscricoes-cards");

  if (inscricoesCards) {

    inscricoesCards.innerHTML = ORDEM_EVENTOS.map((chave) => {

      const ev = SITE_CONFIG.eventos[chave];

      const acao = `
    <div class="card__botoes">

      ${
        ev.inscricao.disponivel && ev.inscricao.url
          ? `<a class="btn btn--primary" href="${ev.inscricao.url}" target="_blank" rel="noopener">Inscrever-se</a>`
          : `<span class="card__status">Inscrições em breve</span>`
      }

      ${
        ev.edital && ev.edital.disponivel && ev.edital.url
          ? `<a class="btn btn--secondary" href="${ev.edital.url}" target="_blank" rel="noopener">Edital</a>`
          : ""
      }

    </div>
  `;

      return `
        <article class="card card--evento" id="evento-inscricao-${chave}">

          <h3 class="card__title">${ev.nome}</h3>

          ${ev.nomeCompleto ? `<p class="card__eyebrow">${ev.nomeCompleto}</p>` : ""}

          <div class="card__acao">${acao}</div>

        </article>
      `;

    }).join("");
  }

  /* ---------- Cronograma da semana ---------- */
  const cronogramaTabs = document.getElementById("cronograma-tabs");
  const cronogramaArea = document.getElementById("cronograma-area");

  if (cronogramaTabs && cronogramaArea && SITE_CONFIG.cronograma.showSchedule) {
    const categorias = SITE_CONFIG.cronograma.categorias || [];
    const itens = SITE_CONFIG.cronograma.itens || [];

    cronogramaTabs.hidden = false;
    cronogramaTabs.innerHTML = categorias.map((cat, i) => `
      <button class="cronograma__tab${i === 0 ? " is-active" : ""}"
        role="tab" aria-selected="${i === 0}" data-categoria="${cat}">${cat}</button>
    `).join("");

    function renderCategoria(categoria) {
      const doDia = (item) => `${item.dia || ""} ${item.horario || ""}`.trim();
      const itensCategoria = itens
        .filter((item) => item.categoria === categoria)
        .sort((a, b) => doDia(a).localeCompare(doDia(b)));

      if (itensCategoria.length === 0) {
        cronogramaArea.innerHTML = `<div class="status-box"><p>Programação de "${categoria}" será divulgada em breve.</p></div>`;
        return;
      }

      cronogramaArea.innerHTML = `
        <ul class="cronograma__lista">
          ${itensCategoria.map((item) => `
            <li class="cronograma__item">
              <span class="cronograma__quando">${item.dia || ""} · ${item.horario || ""}</span>
              <span class="cronograma__titulo">${item.titulo || ""}</span>
              <span class="cronograma__responsavel">${item.responsavel || ""}</span>
              <span class="cronograma__local">${item.local || ""}</span>
            </li>
          `).join("")}
        </ul>
      `;
    }

    cronogramaTabs.querySelectorAll(".cronograma__tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        cronogramaTabs.querySelectorAll(".cronograma__tab").forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        renderCategoria(btn.dataset.categoria);
      });
    });

    if (categorias.length > 0) renderCategoria(categorias[0]);
  }

  /* ---------- Materiais ---------- */

  // Formulário de inscrição em destaque (usa a inscrição da FEPICE, já ativa)
  const fepiceInscricao = SITE_CONFIG.eventos.fepice.inscricao;
  if (fepiceInscricao.disponivel && fepiceInscricao.url) {
    setCardAtivo("card-inscricao", fepiceInscricao.url);
  }

  // Projetos aprovados
  const projetosArea = document.getElementById("projetos-area");
  if (projetosArea && SITE_CONFIG.projetosAprovados.disponivel) {
    const lista = SITE_CONFIG.projetosAprovados.lista || [];
    projetosArea.hidden = false;

    if (lista.length === 0) {
      projetosArea.innerHTML = "<p>Nenhum projeto cadastrado no momento.</p>";
    } else {
      const linhas = lista.map((p) => `
        <tr>
          <td>${p.projeto}</td>
          <td>${p.area}</td>
          <td>${p.autores}</td>
          <td>${p.instituicao}</td>
        </tr>
      `).join("");

      projetosArea.innerHTML = `
        <table class="tabela-projetos">
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Área</th>
              <th>Autor(es)</th>
              <th>Instituição</th>
            </tr>
          </thead>
          <tbody>${linhas}</tbody>
        </table>
      `;
    }

    setCardAtivo("card-projetos", "#materiais");
  }

  /* ---------- Helper: marca um card de "Materiais" como ativo ---------- */
  function setCardAtivo(cardId, url) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const status = card.querySelector(".card__status");
    if (status) {
      status.textContent = "Disponível";
      status.classList.add("card__status--ativo");
    }

    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      if (url.startsWith("#")) {
        document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(url, "_blank", "noopener");
      }
    });
  }

  /* ---------- Apoiadores e Realização ---------- */
  const limsArea = document.getElementById("apoiador-lims");
  if (limsArea) {
    const lims = SITE_CONFIG.apoiadores.lims;
    const temLogo = lims && lims.disponivel && lims.logo;

    const conteudoLogo = temLogo
      ? `<img src="${lims.logo}" alt="${lims.nome || "LIMS"}" class="logo-img--lims">`
      : `<div class="logo-placeholder logo-img--lims"><span>${lims?.nome || "LIMS"}</span></div>`;

    limsArea.innerHTML = `
      <p class="apoiador-destaque__rotulo">Realização</p>
      ${conteudoLogo}
    `;
  }

  const demaisArea = document.getElementById("apoiadores-demais");
  if (demaisArea) {
    const demais = SITE_CONFIG.apoiadores.demais || [];
    if (demais.length === 0) {
      demaisArea.innerHTML = `<div class="status-box"><p>Apoiadores em breve.</p></div>`;
    } else {
      demaisArea.innerHTML = `
        <p class="apoiadores-demais__rotulo">Apoio</p>
        <div class="apoiadores-demais__grid">
          ${demais.map((a) => logoOuPlaceholder(a.nome, a.logo, "logo-img--apoiador")).join("")}
        </div>
      `;
    }
  }
});
