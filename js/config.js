/**
 * CONFIGURAÇÃO DO PORTAL — SEMANA DE CIÊNCIA E TECNOLOGIA 2026
 * -------------------------------------------------------------
 * FEPICE 2026 · Teresina Info 2026 · IdeiaLab 2026
 *
 * Este arquivo concentra tudo que ainda vai mudar quando a organização
 * entregar os materiais oficiais (logos, links de inscrição, cronograma,
 * edital, banner, projetos, apoiadores).
 *
 * Para ativar um item, troque "disponivel" (ou "showSchedule") para true
 * e preencha os campos indicados. Nenhum outro arquivo precisa ser alterado.
 *
 * Para adicionar uma logo: coloque o arquivo de imagem dentro de
 * assets/logo/ e preencha o campo "logo" com o caminho correspondente.
 * Enquanto o campo "logo" estiver vazio, o site mostra um placeholder
 * neutro com o nome do evento/apoiador, respeitando a paleta oficial.
 */

const SITE_CONFIG = {

  semana: {
    dataInicio: "2026-10-06",
    dataFim: "2026-10-09",
    dataTexto: "6 a 9 de outubro de 2026",
    instagramUrl: "" // ex: "https://instagram.com/fepice"
  },

  eventos: {
    fepice: {
      nome: "FEPICE 2026",
      nomeCompleto: "2ª Feira Piauiense de Ciências e Engenharia",
      logo: "assets/logo/logo-fepice-oficial.png",
      sobreDisponivel: true,
      sobreTexto: "A II Feira Piauiense de Ciências e Engenharia – FEPICE será realizada de 06 a 09 de outubro de 2026, no Campus Teresina Central do Instituto Federal do Piauí (IFPI), em Teresina/PI. É um evento gratuito e de abrangência estadual, destinado a estudantes do 8º e 9º anos do Ensino Fundamental, do Ensino Médio e do Ensino Técnico.",
      inscricao: {
        disponivel: true,
        url: "https://forms.gle/S7zV8ow6jTha5kDH8"
      }
    },
    teresinaInfo: {
      nome: "Teresina Info 2026",
      nomeCompleto: "5ª Edição do Encontro de Informática em Teresina",
      logo: "assets/logo/logo-teresina-info.png", 
      sobreDisponivel: false,
      sobreTexto: "",
      inscricao: {
        disponivel: false,
        url: ""
      }
    },
    ideiaLab: {
      nome: "IdeiaLab 2026",
      nomeCompleto: "1ª Edição do Ciclo de Inovação",
      logo: "assets/logo/logo-ideialab.png",
      sobreDisponivel: false,
      sobreTexto: "",
      inscricao: {
        disponivel: true,
        url: "https://forms.gle/dLEgLeR58XUi2jW7A"
      }
    }
  },

  cronograma: {
    showSchedule: true,
    categorias: ["Palestras", "Minicursos", "Apresentação de Trabalhos"],
    itens: [
      // { categoria: "Palestras", dia: "2026-10-06", horario: "14:00",
      //   titulo: "", responsavel: "", local: "" }
    ]
  },

  edital: {
    disponivel: false,
    arquivoUrl: "" // ex: "assets/docs/edital-fepice-2026.pdf"
  },

  projetosAprovados: {
    disponivel: false,
    lista: [
      // { projeto: "", area: "", autores: "", instituicao: "" }
    ]
  },

  apoiadores: {
    lims: {
      nome: "LIMS",
      disponivel: true,
      logo: "assets/logo/logo-lims.png" 
    },
    demais: [
      {nome: "InvestePiaui", logo: "assets/logo/logo-investepiaui.png"},
      {nome: "SEBRAE", logo: "assets/logo/logo-sebrae.jpeg"},
      {nome: "INOVAIFPI", logo: "assets/logo/logo-inovaifpi.jpeg"},
      {nome: "NEPI", logo: "assets/logo/logo-nepi.jpeg"},
      {nome: "NIT", logo: "assets/logo/logo-nit.jpeg"},
      // { nome: "", logo: "" }  ← preencher e adicionar a imagem em assets/logo/
    ]
  }

};
