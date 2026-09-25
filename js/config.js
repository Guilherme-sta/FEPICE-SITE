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
      sobreTexto: "A <b>Competição de Ideias – IdeiaLab 2026</b> será realizada pelo Campus Teresina Central do Instituto Federal do Piauí (IFPI), por meio da <b>Diretoria de Pesquisa, Pós-Graduação e Inovação (DPI)</b>, em parceria com o <b>Sebrae Piauí</b>, a <b>Invest Piauí</b>, o <b>InovaIFPI</b>, o <b>Núcleo de Empreendedorismo e Inovação (NEPI)</b>, o <b>Núcleo de Inovação Tecnológica (NIT)</b>, a <b>FAPEPI</b> e a <b>FAIFPI</b>. O evento tem como objetivo estimular a criatividade, a inovação e o empreendedorismo entre os estudantes, promovendo soluções para desafios reais do campus. As inscrições, gratuitas, ocorrem de 07 a 30 de setembro de 2026, sendo destinadas a equipes formadas por discentes regularmente matriculados e um servidor orientador. <b>Premiação:</b> bolsas de <b>R$500,00</b> por 06 meses para cada aluno(a) das equipes selecionadas",
      inscricao: {
        disponivel: true,
        url: "https://forms.gle/dLEgLeR58XUi2jW7A"
      },
      edital: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1-vXz7_aqQpTMbT069W8nv_yms3bhcg5l/view?usp=sharing"
      },
      palestraSebrae: {
        disponivel: true,
        url: "https://youtu.be/cB2znzeCyrI",
      }
    }
  },

  palestrantes: {
    joseSoares: {
      nome: "José Soares de Andrade Júnior",
      cargo: "Professor Titular do Departamento de Física",
      instituicao: "Universidade Federal do Ceará (UFC)",
      foto: "assets/img/jose-soares-perfil.gif",

      resumo:
        "José Soares de Andrade Júnior é Professor Titular do Departamento de Física da Universidade Federal do Ceará (UFC), bolsista de produtividade em pesquisa do CNPq nível 1A e membro da Academia Brasileira de Ciências. Possui graduação em Engenharia Química pela Universidade Federal de Pernambuco e mestrado e doutorado pela COPPE/UFRJ. Foi Pró-Reitor de Relações Internacionais da UFC entre 2017 e 2019 e atuou como pesquisador visitante na Boston University e professor visitante no ETH Zurique. Ao longo de sua carreira, publicou mais de 270 artigos científicos em periódicos internacionais, incluindo trabalhos na Nature, Nature Physics, Nature Communications, PNAS, Physical Review X e Physical Review Letters. É membro do Colegiado da Pós-Graduação em Física da UFC e atua desde 2023 como Pesquisador Responsável pelo Centro de Referência em Inteligência Artificial (CEREIA), parceria entre a UFC e o grupo Hapvida, voltada ao desenvolvimento de pesquisas em inteligência artificial aplicada à saúde.",

      areas: [
        "Física Estatística",
        "Física Computacional",
        "Sistemas Complexos",
        "Redes Complexas",
        "Inteligência Artificial"
      ]
    }
  },

  cronograma: {
    showSchedule: true,
    dias: ["2026-10-06","2026-10-07","2026-10-08","2026-10-09"],
    categorias: ["Programação Geral", "Palestras", "Minicursos", "Apresentação de Trabalhos"],
    itens: [
      // 06/10/2026
    {
      categoria: "",
      dia: "2026-10-06",
      horario: "14:00 às 16:30",
      titulo: "Credenciamento",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "16:30 às 17:00",
      titulo: "Apresentação Cultural",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "",
      dia: "2026-10-06",
      horario: "17:00 às 17:30",
      titulo: "Abertura",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "",
      dia: "2026-10-06",
      horario: "17:30 às 18:00",
      titulo: "Resultado Fase 1 Idealab",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "18:00 às 19:30",
      titulo: "Palestra de Abertura",
      palestrante: "joseSoares",
      local: "Auditório Maestrina Clóris de Oliveira",
    },

    // 07/10/2026
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-07",
      horario: "08:30 às 18:00",
      titulo: "Apresentação FEPICE",
      local: "Térreo Prédio B",
    },
    {
      categoria: "Minicursos",
      dia: "2026-10-07",
      horario: "14:00 às 18:00",
      titulo: "Minicurso",
      local: "Carmen Sinott",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "14:00 às 14:30",
      titulo: "Palestra iniciativas Sebrae",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "14:30 às 15:00",
      titulo: "Palestra iniciativas Invest Piauí",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "15:00 às 16:00",
      titulo: "Apresentação sobre UX/UI",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "16:00 às 17:00",
      titulo: "Palestra TI",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "",
      dia: "2026-10-07",
      horario: "16:00 às 17:30",
      titulo: "Refinar proposta IdeiaLab",
      local: "LIMS",
    },

    // 08/10/2026
    {
      categoria: "",
      dia: "2026-10-08",
      horario: "08:00 às 10:00",
      titulo: "Refinar proposta Idealab",
      local: "LIMS",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "10:30 às 12:00",
      titulo: "Apresentação FEPICE",
      local: "Térreo Prédio B",
    },
    {
      categoria: "Minicursos",
      dia: "2026-10-08",
      horario: "14:00 às 18:00",
      titulo: "Apresentação de Bioinformática",
      local: "a definir",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "14:00 às 15:00",
      titulo: "Jogos digitais",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "14:00 às 14:30",
      titulo: "Roteirização do Pitch IdeiaLab",
      local: "LIMS",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "14:30 às 15:00",
      titulo: "Apresentação FEPICE",
      local: "LIMS",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "15:00 às 15:30",
      titulo: "Palestra Dr Ney Paranaguá",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "15:30 às 16:00",
      titulo: "Apresentação FEPICE",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "16:00 às 16:30",
      titulo: "Palestra LIMS",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "16:30 às 17:00",
      titulo: "Palestra Labiras",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "16:30 às 18:00",
      titulo: "Apresentação FEPICE",
      local: "Térreo Prédio B",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "17:00 às 17:30",
      titulo: "Palestra GRUNA",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "17:30 às 18:30",
      titulo: "Palestra Inovatech",
      local: "Auditório Maestrina Clóris de Oliveira",
    },

    // 09/10/2026
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "08:00 às 09:00",
      titulo: "Palestra TI",
      local: "",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-09",
      horario: "09:00 às 10:30",
      titulo: "Apresentação dos PITs IdeaLab",
      local: "DPI",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "09:30 às 10:30",
      titulo: "Palestra TI",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "14:00 às 15:00",
      titulo: "Palestra Ricardo Lira",
      local: "",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-09",
      horario: "15:00 às 16:00",
      titulo: "Palestra DR Nazareno César",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "",
      dia: "2026-10-09",
      horario: "16:00 às 17:00",
      titulo: "Premiação FEPICE",
      local: "",
    },
    {
      categoria: "",
      dia: "2026-10-09",
      horario: "17:00 às 18:00",
      titulo: "Resultado Fase 2 e premiação Idealab",
      local: "",
    },
    {
      categoria: "",
      dia: "2026-10-09",
      horario: "18:00 às 18:30",
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

    parceiros: [
      { nome: "Nome do Parceiro", logo: "assets/logo/logo-digital.png" }
      // { nome: "", logo: "" }  ← adicione mais aqui quando surgirem
    ],

    demais: [
      {nome: "INOVAIFPI", logo: "assets/logo/logo-inovaifpi.png"},
      {nome: "NEPI", logo: "assets/logo/logo-nepi.png"},
      {nome: "NIT", logo: "assets/logo/logo-nit.png"},
      {nome: "FAIFPI", logo: "assets/logo/logo-faifpi.png"},
      {nome: "PIT", logo: "assets/logo/logo-pit.png"},
      {nome: "STARTUP", logo: "assets/logo/logo-startup.svg"},
      {nome: "FAPEPI", logo: "assets/logo/logo-fapepi.png"},
      {nome: "SEBRAE", logo: "assets/logo/logo-sebrae.png"},
      // { nome: "", logo: "" }  ← preencher e adicionar a imagem em assets/logo/
    ]
  }
};