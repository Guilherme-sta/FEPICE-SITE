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

          ${
            ev.palestraSebrae &&
            ev.palestraSebrae.disponivel &&
            ev.palestraSebrae.url
              ? `<a class="btn btn--primary" href="${ev.palestraSebrae.url}" target="_blank" rel="noopener">Palestra Sebrae</a>`
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

  function abrirModalPalestrante(chave) {

  const palestrante = SITE_CONFIG.palestrantes[chave];

  if (!palestrante) return;

  const modal = document.getElementById("modal-palestrante");

  if (!modal) return;

  const foto = modal.querySelector(".palestrante-modal__foto");
  const nome = modal.querySelector(".palestrante-modal__nome");
  const cargo = modal.querySelector(".palestrante-modal__cargo");
  const instituicao = modal.querySelector(".palestrante-modal__instituicao");
  const resumo = modal.querySelector(".palestrante-modal__resumo");
  const areas = modal.querySelector(".palestrante-modal__areas");

  nome.textContent = palestrante.nome;
  cargo.textContent = palestrante.cargo;
  instituicao.textContent = palestrante.instituicao;
  resumo.textContent = palestrante.resumo;

  if (palestrante.foto) {
    foto.src = palestrante.foto;
    foto.alt = palestrante.nome;
    foto.hidden = false;
  } else {
    foto.hidden = true;
  }

  if (palestrante.areas && palestrante.areas.length > 0) {

    areas.innerHTML = palestrante.areas
      .map((area) => `<span>${area}</span>`)
      .join("");

    areas.parentElement.hidden = false;

  } else {

    areas.innerHTML = "";
    areas.parentElement.hidden = true;

  }

  modal.hidden = false;

  document.body.classList.add("modal-aberto");

}

  function fecharModalPalestrante() {

  const modal = document.getElementById("modal-palestrante");

  if (!modal) return;

  modal.hidden = true;

  document.body.classList.remove("modal-aberto");

}

  const modalPalestrante =
  document.getElementById("modal-palestrante");

if (modalPalestrante) {

  const botaoFechar =
    modalPalestrante.querySelector(".palestrante-modal__fechar");

  if (botaoFechar) {

    botaoFechar.addEventListener("click", () => {
      fecharModalPalestrante();
    });

  }

  modalPalestrante.addEventListener("click", (event) => {

    if (event.target === modalPalestrante) {
      fecharModalPalestrante();
    }

  });

}

/* ---------- Cronograma da semana ---------- */

const cronogramaDias = document.getElementById("cronograma-dias");
const cronogramaTabs = document.getElementById("cronograma-tabs");
const cronogramaArea = document.getElementById("cronograma-area");

if (
  cronogramaDias &&
  cronogramaTabs &&
  cronogramaArea &&
  SITE_CONFIG.cronograma.showSchedule
) {

  const dias = SITE_CONFIG.cronograma.dias || [];
  const categorias = SITE_CONFIG.cronograma.categorias || [];
  const itens = SITE_CONFIG.cronograma.itens || [];

  let diaSelecionado = dias[0] || "";
  let categoriaSelecionada = categorias[0] || "";

  /* ---------- Formatar data ---------- */

  function formatarDia(data) {
    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  /* ---------- Criar botões dos dias ---------- */

  cronogramaDias.innerHTML = dias.map((dia, i) => `
    <button
      class="cronograma__dia ${i === 0 ? "is-active" : ""}"
      type="button"
      data-dia="${dia}"
      aria-selected="${i === 0}"
    >
      ${formatarDia(dia)}
    </button>
  `).join("");

  /* ---------- Criar botões das categorias ---------- */

  cronogramaTabs.hidden = false;

  cronogramaTabs.innerHTML = categorias.map((categoria, i) => `
    <button
      class="cronograma__tab ${i === 0 ? "is-active" : ""}"
      type="button"
      role="tab"
      aria-selected="${i === 0}"
      data-categoria="${categoria}"
    >
      ${categoria}
    </button>
  `).join("");

  /* ---------- Mostrar atividades ---------- */

function renderCronograma() {

  const atividades = itens.filter((item) =>
    item.dia === diaSelecionado &&
    item.categoria === categoriaSelecionada
  );

  if (atividades.length === 0) {

    cronogramaArea.innerHTML = `
      <div class="status-box">
        <p>
          Nenhuma atividade de
          <strong>${categoriaSelecionada}</strong>
          está cadastrada para o dia
          <strong>${formatarDia(diaSelecionado)}</strong>.
        </p>
      </div>
    `;

    return;
  }

  /* ---------- Ordenar pelo horário ---------- */

  atividades.sort((a, b) =>
    (a.horario || "").localeCompare(b.horario || "")
  );

  cronogramaArea.innerHTML = `
    <div class="cronograma__lista">

      ${atividades.map((item) => {

        const palestrante =
          item.palestrante &&
          SITE_CONFIG.palestrantes[item.palestrante]
            ? SITE_CONFIG.palestrantes[item.palestrante]
            : null;

        return `
          <article class="cronograma__item">

            <div class="cronograma__horario">
              ${item.horario || ""}
            </div>

            <div class="cronograma__informacoes">

              <h3 class="cronograma__titulo">
                ${item.titulo || ""}
              </h3>

              ${
                palestrante
                  ? `
                    <button
                      type="button"
                      class="cronograma__palestrante"
                      data-palestrante="${item.palestrante}"
                    >
                      Palestrante:
                      <strong>${palestrante.nome}</strong>
                    </button>
                  `
                  : ""
              }

              <p class="cronograma__local">
                Local:
                ${item.local || "A definir"}
              </p>

            </div>

          </article>
        `;

      }).join("")}

    </div>
  `;

  /* ---------- Clique no palestrante ---------- */

  cronogramaArea
    .querySelectorAll(".cronograma__palestrante")
    .forEach((botao) => {

      botao.addEventListener("click", () => {

        const chave = botao.dataset.palestrante;

        abrirModalPalestrante(chave);

      });

    });

}

  /* ---------- Clique nos dias ---------- */

  cronogramaDias
    .querySelectorAll(".cronograma__dia")
    .forEach((btn) => {

      btn.addEventListener("click", () => {

        cronogramaDias
          .querySelectorAll(".cronograma__dia")
          .forEach((b) => {
            b.classList.remove("is-active");
            b.setAttribute("aria-selected", "false");
          });

        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");

        diaSelecionado = btn.dataset.dia;

        renderCronograma();
      });

    });

  /* ---------- Clique nas categorias ---------- */

  cronogramaTabs
    .querySelectorAll(".cronograma__tab")
    .forEach((btn) => {

      btn.addEventListener("click", () => {

        cronogramaTabs
          .querySelectorAll(".cronograma__tab")
          .forEach((b) => {
            b.classList.remove("is-active");
            b.setAttribute("aria-selected", "false");
          });

        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");

        categoriaSelecionada = btn.dataset.categoria;

        renderCronograma();
      });

    });

  /* ---------- Exibir primeira combinação ---------- */

  if (dias.length > 0 && categorias.length > 0) {
    renderCronograma();
  }
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

  const realizacaoArea = document.getElementById("apoiador-realizacao");

  if (realizacaoArea) {

    const realizacao = SITE_CONFIG.apoiadores.realizacao || [];

    if (realizacao.length === 0) {

      realizacaoArea.innerHTML = `
        <p class="apoiador-destaque__rotulo">Realização</p>

        <div class="status-box">
          <p>Informações sobre a realização serão divulgadas em breve.</p>
        </div>
      `;

    } else {

      realizacaoArea.innerHTML = `
        <p class="apoiador-destaque__rotulo">Realização</p>

        <div class="realizacao__grid">
          ${realizacao.map((item) => `
            <div class="realizacao__logo">

              ${
                item.logo
                  ? `<img
                      src="${item.logo}"
                      alt="${item.nome}"
                      class="logo-img--realizacao"
                    >`
                  : `
                    <div class="logo-placeholder logo-img--realizacao">
                      <span>${item.nome}</span>
                    </div>
                  `
              }

            </div>
          `).join("")}
        </div>
      `;
    }
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