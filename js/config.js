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
      sobreTexto: "A <b>II Feira Piauiense de Ciências e Engenharia – FEPICE</b> será realizada no Campus Teresina Central do Instituto Federal do Piauí (IFPI), em Teresina/PI. É um evento gratuito e de abrangência estadual, destinado a estudantes do 8º e 9º anos do Ensino Fundamental, do Ensino Médio e do Ensino Técnico. As inscrições, gratuitas, ocorrem de 15 a 25 de setembro de 2026, sendo destinadas a equipes formadas por discentes regularmente matriculados e seus servidores orientadores.",
      inscricao: {
        disponivel: true,
        url: "https://forms.gle/S7zV8ow6jTha5kDH8"
      },
      edital: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1gsSGV57Fcv87aNP16lklusnrkSeiKCeb/view?usp=sharing"
      },
    },
    teresinaInfo: {
      nome: "Teresina Info 2026",
      nomeCompleto: "5ª Edição do Encontro de Informática em Teresina",
      logo: "assets/logo/logo-teresina-info.png", 
      sobreDisponivel: true,
      sobreTexto: "O Campus Teresina Central do Instituto Federal do Piauí (IFPI) promove o Encontro de Informática de Teresina, organizado pelo <b>Laboratory of Innovation on Multimedia Systems (LIMS)</b>, com o tema <b>Tecnologia e Inteligência Artificial: Transformando o Futuro.</b> O evento tem como objetivo promover conhecimento através de palestras e minicursos sobre temas como inteligência artificial, programação, empreendedorismo, entre outros. As inscrições, gratuitas, ocorrem de 16 de setembro a 08 de outubro de 2026, sendo destinadas ao público geral.",
      inscricao: {
        disponivel: true,
        url: "https://suap.ifpi.edu.br/eventos/inscricao/1/4052/"
      }
    },
    ideiaLab: {
      nome: "IdeiaLab 2026",
      nomeCompleto: "1ª Edição do Ciclo de Inovação",
      logo: "assets/logo/logo-ideialab.png",
      sobreDisponivel: true,
      sobreTexto: "A <b>Competição de Ideias – IdeiaLab 2026</b> será realizada pelo Campus Teresina Central do Instituto Federal do Piauí (IFPI), por meio da <b>Diretoria de Pesquisa, Pós-Graduação e Inovação (DPI)</b>, em parceria com o <b>Sebrae Piauí</b>, a <b>Invest Piauí</b>, o <b>InovaIFPI</b>, o <b>Núcleo de Empreendedorismo e Inovação (NEPI)</b>, o <b>Núcleo de Inovação Tecnológica (NIT)</b>, a <b>FAPEPI</b> e a <b>FAIFPI</b>. O evento tem como objetivo estimular a criatividade, a inovação e o empreendedorismo entre os estudantes, promovendo soluções para desafios reais do campus. As inscrições, gratuitas, ocorrem de 07 a 30 de setembro de 2026, sendo destinadas a equipes formadas por discentes regularmente matriculados e um servidor orientador. <b>Premiação:</b> bolsas para 03 equipes de <b>R$500,00</b> por 06 meses",
      inscricao: {
        disponivel: true,
        url: "https://forms.gle/dLEgLeR58XUi2jW7A"
      },
      edital: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1-vXz7_aqQpTMbT069W8nv_yms3bhcg5l/view?usp=sharing"
      },
    }
  },

  cronograma: {
    showSchedule: true,
    dias: ["2026-10-06","2026-10-07","2026-10-08","2026-10-09"],
    categorias: ["Palestras", "Minicursos", "Apresentação de Trabalhos"],
    itens: [
      // 06/10/2026
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "14:00",
      titulo: "Credenciamento",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "15:00",
      titulo: "Credenciamento",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "16:00",
      titulo: "Abertura",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "17:00",
      titulo: "Palestra de Abertura - Inovatcht: Daniza Silveira",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "18:00",
      titulo: "Resultado Fase 1 Idealab",
      local: "",
    },

    // 07/10/2026
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "08:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "09:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "10:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "14:00",
      titulo: "Palestra iniciativas Sebrae Idealab e Apresentação FEPICE e Palestra iniciativas Invest Piauí Idealab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "14:30",
      titulo: "Apresentação FEPICE e Palestra iniciativas Invest Piauí Idealab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "15:00",
      titulo: "Palestra Ney Paranaguá",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "15:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "16:00",
      titulo: "Palestra As Séries e a proposta Invest Piauí Idealab",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "16:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "17:00",
      titulo: "Palestra TI e Refinar proposta Invest Piauí Idealab",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "17:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },

    // 08/10/2026
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "08:30",
      titulo: "Refinar proposta Invest Piauí Idealab",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "09:00",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "09:30",
      titulo: "Refinar proposta Invest Piauí Idealab",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "10:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "11:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "14:00",
      titulo: "Palestra TI e Palestra para roteirização do Pitch Sebrae Idealab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "14:30",
      titulo: "Palestra TI e Palestra para roteirização do Pitch Sebrae Idealab",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "15:00",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "15:30",
      titulo: "Palestra TI e Palestra para roteirização do Pitch Sebrae Idealab",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "15:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "16:00",
      titulo: "LIMS e LABIRAS",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "17:00",
      titulo: "GRUNA",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "17:30",
      titulo: "Apresentação FEPICE",
      local: "",
    },

    // 09/10/2026
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "08:00",
      titulo: "Palestra TI",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-09",
      horario: "09:00",
      titulo: "Apresentação dos PITs IdeaLab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "09:30",
      titulo: "Palestra TI e Apresentação dos PITs IdeaLab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "10:00",
      titulo: "Palestra TI e Apresentação dos PITs IdeaLab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "11:00",
      titulo: "Palestra TI",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "15:00",
      titulo: "Palestra TI",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "16:00",
      titulo: "Premiação FEPICE",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "17:00",
      titulo: "Resultado Fase 2 e premiação Idealab",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "18:00",
      titulo: "Encerramento",
      local: "",
    }
      // { categoria: "Palestras", dia: "2026-10-06", horario: "14:00",
      //   titulo: "", responsavel: "", local: "" }
    ]
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

    realizacao: [
      {
        nome: "DPI",
        logo: "assets/logo/logo-dpi.png",
      },
      {
        nome: "LIMS",
        logo: "assets/logo/logo-lims.png",
      },
      {
        nome: "ADS",
        logo: "assets/logo/logo-ads.png",
      }
    ],

    demais: [
      {nome: "InvestePiaui", logo: "assets/logo/logo-investepiaui.png"},
      {nome: "SEBRAE", logo: "assets/logo/logo-sebrae.jpeg"},
      {nome: "FAPEPI", logo: "assets/logo/logo-fapepi.jpeg"},
      {nome: "INOVAIFPI", logo: "assets/logo/logo-inovaifpi.jpeg"},
      {nome: "NEPI", logo: "assets/logo/logo-nepi.jpeg"},
      {nome: "NIT", logo: "assets/logo/logo-nit.jpeg"},
      {nome: "FAIFPI", logo: "assets/logo/logo-faifpi.png"},
      // { nome: "", logo: "" }  ← preencher e adicionar a imagem em assets/logo/
    ]
  }
};