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

  // Instagram no rodapé
  const instagramEl = document.getElementById("footer-instagram");
  if (instagramEl && SITE_CONFIG.evento.instagramUrl) {
    instagramEl.innerHTML = `<a href="${SITE_CONFIG.evento.instagramUrl}" target="_blank" rel="noopener">Instagram | FEPICE</a>`;
  }

  // Sobre
  if (SITE_CONFIG.sobre.disponivel) {
    const sobreTexto = document.getElementById("sobre-texto");
    if (sobreTexto) {
      sobreTexto.textContent = SITE_CONFIG.sobre.texto;
      sobreTexto.classList.remove("placeholder-text");
    }
  }

  // Inscrições
  const inscricoesArea = document.getElementById("inscricoes-area");
  if (inscricoesArea && SITE_CONFIG.inscricoes.disponivel && SITE_CONFIG.inscricoes.url) {
    inscricoesArea.innerHTML = `<a class="btn btn--primary" href="${SITE_CONFIG.inscricoes.url}" target="_blank" rel="noopener">Inscrições</a>`;
    setCardAtivo("card-inscricao", SITE_CONFIG.inscricoes.url);
  }

  // Edital
  const editalArea = document.getElementById("edital-area");
  if (editalArea && SITE_CONFIG.edital.disponivel && SITE_CONFIG.edital.arquivoUrl) {
    editalArea.innerHTML = `
      <h3>Edital FEPICE 2026</h3>
      <a class="btn btn--secondary" href="${SITE_CONFIG.edital.arquivoUrl}" target="_blank" rel="noopener">Baixar edital em PDF</a>
    `;
    setCardAtivo("card-edital", SITE_CONFIG.edital.arquivoUrl);
  }

  // Modelo de banner (materiais)
  if (SITE_CONFIG.banner.disponivel && SITE_CONFIG.banner.arquivoUrl) {
    setCardAtivo("card-banner", SITE_CONFIG.banner.arquivoUrl);
  }

  // Projetos aprovados
  const projetosArea = document.getElementById("projetos-area");
  if (projetosArea && SITE_CONFIG.projetosAprovados.disponivel) {
    const lista = SITE_CONFIG.projetosAprovados.lista || [];

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

    setCardAtivo("card-projetos", "#projetos");
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

});
