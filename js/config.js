/**
 * CONFIGURAÇÃO DO SITE FEPICE 2026
 * ---------------------------------
 * Este arquivo concentra tudo que ainda vai mudar quando a organização
 * entregar os materiais oficiais (edital, formulário, banner, projetos).
 *
 * Para ativar um item, troque "disponivel" para true e preencha os
 * campos indicados. Nenhum outro arquivo precisa ser alterado.
 */

const SITE_CONFIG = {

  evento: {
    nome: "FEPICE 2026",
    nomeCompleto: "Feira de Pesquisa, Extensão, Inovação, Ciência e Tecnologia",
    dataInicio: "2026-10-06",
    dataFim: "2026-10-09",
    dataTexto: "6 a 9 de outubro de 2026",
    instagramUrl: "" // ex: "https://instagram.com/fepice"
  },

  sobre: {
    disponivel: true,
    texto: "A II Feira Piauiense de Ciências e Engenharia – FEPICE será realizada de 06 a 09 de outubro de 2026, no Campus Teresina Central do Instituto Federal do Piauí (IFPI), em Teresina/PI."
  },

  inscricoes: {
    disponivel: true,
    url: "https://forms.gle/S7zV8ow6jTha5kDH8"
  },

  edital: {
    disponivel: false,
    arquivoUrl: "" //assets/docs/edital-fepice-2026.pdf"
  },

  banner: {
    disponivel: false,
    arquivoUrl: "" // ex: "assets/docs/modelo-banner-fepice-2026.pptx"
  },

  projetosAprovados: {
    disponivel: false,
    lista: [
      // { projeto: "", area: "", autores: "", instituicao: "" }
    ]
  }

};
