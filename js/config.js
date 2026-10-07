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
        disponivel: false,
        url: "https://forms.gle/S7zV8ow6jTha5kDH8"
      },
      edital: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1gsSGV57Fcv87aNP16lklusnrkSeiKCeb/view?usp=sharing"
      },
      projetosSelecionados: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1UyY9V9x3ifnLm9BC-AkuhKT09xiViOvm/view?usp=sharing"
      }
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
        disponivel: false,
        url: "https://forms.gle/dLEgLeR58XUi2jW7A"
      },
      edital: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1-vXz7_aqQpTMbT069W8nv_yms3bhcg5l/view?usp=sharing"
      },
      palestraSebrae: {
        disponivel: true,
        url: "https://youtu.be/cB2znzeCyrI",
      },
      equipesHomologadas: {
        disponivel: true,
        url: "https://drive.google.com/file/d/14iBUWcVhZ4e6W2lXIY8o2U8OMKrHtccL/view?usp=sharing"
      },
      equipesSelecionadas: {
        disponivel: true,
        url: "https://drive.google.com/file/d/1mR62uvk-aG8qQL9EvmNgWsrKrHjDbE1U/view?usp=sharing"
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
    },

    neyParanagua: {
      papel: "Palestrante",
      nome: "Ney Paranaguá",
      cargo: "Fundador e Presidente da MAIDA HEALTH PARTICIPAÇÕES SOCIETÁRIAS S.A.",
      instituicao: "Professor aposentado do Instituto Federal do Piauí (IFPI)",
      foto: "assets/img/ney-paranagua-perfil.gif", // adicionar quando houver: "assets/img/ney-paranagua-perfil.jpg"
      resumo:
        "Profissional com ampla experiência em Ciência da Computação, graduado em Bacharelado pela UFMG (1988), mestre pela UFPE (2003) e doutor pela UFF (2016). É fundador e presidente da MAIDA HEALTH PARTICIPAÇÕES SOCIETÁRIAS S.A., sócio titular da NPC Consultoria Empresarial LTDA e fundador da Maida Infoway Tecnologia e Gestão em Saúde LTDA e do plano de saúde Uniplam. Professor aposentado do IFPI, atuou como Membro Externo Especialista do Comitê de Inovação e Transformação Digital do Hapvida de 2019 a 2022.",
      areas: ["Data Envelopment Analysis", "Health Care", "Programação Matemática", "Sistema Biométrico Web", "TV Digital"]
    },

    carlosHenrique: {
      papel: "Ministrante",
      nome: "Carlos Henrique",           
      cargo: "Estudante de ADS e estagiário no TCE-PI",
      instituicao: "Instituto Federal do Piauí (IFPI)", 
      foto: "assets/img/carlos-henrique-perfil.gif",                           
      resumo:
        "Estudante de Análise e Desenvolvimento de Sistemas (ADS) e estagiário no TCE-PI. Já atuou na indústria de jogos como compositor e sound designer no Submersivo Game Studio, estúdio piauiense, sendo responsável pelo áudio do jogo \"The Last NightMary: A lenda do cabeça de cuia\".",
      areas: ["Composição musical", "Sound design", "Áudio para jogos", "Música 8 e 16 bits"]
    },

    bianca: {
      papel: "Palestrante",
      nome: "Bianca Almeida de Oliveira Bezerra",                      
      cargo: "Gerente de TI na Superintendência de Cidadania Digital \"Félix Pacheco\" (SSP-PI)",
      instituicao: "Instituto Federal do Piauí (IFPI) · Residente Inovatech/IFPI",
      foto: "assets/img/bianca-perfil.jpeg",
      resumoPalestra:
        "Os modelos de linguagem de grande escala (LLMs), como os que estão por trás do ChatGPT, sabem um pouco de tudo, mas costumam errar quando lidam com o conhecimento de uma área específica, podendo inventar informações ou responder de forma diferente da esperada. Esta palestra apresenta como esses modelos podem ser adaptados para aplicações em áreas como educação, saúde e serviços públicos, por meio de estratégias de especialização. Serão abordados a engenharia de prompt, o RAG (Geração Aumentada por Recuperação) e o fine-tuning supervisionado (SFT), além dos critérios para escolher a abordagem mais adequada a cada caso. Por fim, a palestra discute os vieses que podem surgir em modelos especializados e formas de mitigá-los.",
      resumo:
        "Tecnóloga em Análise e Desenvolvimento de Sistemas pelo Instituto Federal do Piauí (IFPI). Gerente de Tecnologia da Informação na Superintendência de Cidadania Digital \"Félix Pacheco\" (SSP-PI), com experiência em desenvolvimento de soluções governamentais e gestão de sistemas de identificação civil. Residente em desenvolvimento de sistemas pelo programa Inovatech/IFPI.",
      areas: ["Inteligência Artificial", "LLMs", "Engenharia de Prompt", "RAG", "Desenvolvimento de Sistemas"]
    },

    thabataCronemberger: {
      papel: "Palestrante",
      nome: "Thábata Cronemberger",
      cargo: "Gestora da Educação Empreendedora",
      instituicao: "Sebrae Piauí",
      foto: "assets/img/thabata-perfil.jpeg",
      resumoPalestra: "", // o bloco de notas não traz resumo da palestra
      resumo:
        "Especialista em Consultoria Organizacional, Gestão Financeira e Gestão Empresarial Integrada. Atua como gestora da Educação Empreendedora do Sebrae Piauí.",
      areas: ["Consultoria Organizacional", "Gestão Financeira", "Gestão Empresarial Integrada"]
    },

    vicenteOliveira: {
      papel: "Palestrante",
      nome: "Vicente Oliveira",
      cargo: "Consultor e mentor de inovação",
      instituicao: "",
      foto: "assets/img/vicente-oliveira-perfil.jpeg",
      resumoPalestra:
        "Chegou a hora de transformar a sua ideia em uma apresentação capaz de despertar o interesse e conquistar a Comissão Julgadora do IdeiaLab 2026. Nesta palestra, as equipes serão conduzidas por uma jornada prática para estruturar um pitch claro, objetivo e convincente, trabalhando o problema, a solução e proposta de valor, o mercado e público-alvo, a concorrência e os diferenciais, o modelo de negócio, a relevância para o Campus, a viabilidade técnica e operacional, a sustentabilidade financeira, o impacto social e institucional e sua relação com os ODS, e a chamada para a ação. Mais do que aprender a montar slides, a proposta é ajudar cada equipe a construir uma narrativa capaz de apresentar o problema, demonstrar o valor da solução e evidenciar seu potencial de implementação, aspectos diretamente relacionados à avaliação da Segunda Etapa do IdeiaLab.",
      resumo:
        "Consultor, mentor e entusiasta da inovação, atua no desenvolvimento de negócios inovadores, startups e iniciativas de empreendedorismo. Trabalha com planejamento estratégico, modelagem e estruturação de negócios, planos de negócios, gestão financeira, diagnóstico organizacional e captação de recursos, apoiando empreendedores e equipes na transformação de ideias em projetos estruturados e viáveis.",
      areas: ["Planejamento Estratégico", "Modelagem de Negócios", "Startups", "Captação de Recursos"]
    },

    joaoPedro: {
      papel: "Ministrante",
      nome: "João Pedro",
      cargo: "",
      instituicao: "",
      foto: "assets/img/joao-pedro-perfil.jpeg",
      resumoPalestra:
        "Neste minicurso serão apresentados os principais cuidados para aumentar a segurança e a privacidade no ambiente digital. Você irá aprender práticas como uso adequado de senhas, autenticação de dois fatores, realização de backups, controle de permissões, proteção em redes e identificação de vírus, golpes e técnicas de engenharia social.",
      resumo: "",
      areas: ["Segurança Digital", "Privacidade", "Engenharia Social"]
    },

    nazarenoCesar: {
      papel: "Palestrante",
      nome: "Nazareno César",
      cargo: "Juiz Federal da Justiça Federal — Seção Judiciária do Estado do Piauí e Professor",
      instituicao: "Justiça Federal — Seção Judiciária do Estado do Piauí · iCEV",
      foto: "assets/img/nazareno-cesar-perfil.jpeg",
      resumoPalestra:
        "A palestra aborda considerações sobre ética no uso da Inteligência Artificial, discutindo os desafios éticos relacionados à utilização dessas tecnologias e sua aplicação responsável, especialmente diante de suas implicações para o Direito e para a sociedade.",
      resumo:
        "Graduado em Direito pela Universidade Federal do Piauí (UFPI), com especialização em Direito Tributário e Finanças Públicas pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa (IDP) e Mestrado em Direito Constitucional pela mesma instituição. Atualmente é Juiz Federal da Justiça Federal — Seção Judiciária do Estado do Piauí e professor do Instituto de Ensino Superior (iCEV). Possui experiência nas áreas de Lógica Jurídica, Direito Constitucional, Direito Processual e Novas Tecnologias aplicadas ao Direito.",
      areas: [
        "Lógica Jurídica",
        "Direito Constitucional",
        "Direito Processual",
        "Novas Tecnologias aplicadas ao Direito",
        "Ética e Inteligência Artificial"
      ]
    },

    charlenoPires: {
      papel: "Palestrante",
      nome: "Charleno Pires",
      cargo: "Professor Mestre",
      instituicao: "Instituto Federal do Piauí (IFPI) · Campus Altos",
      foto: "assets/img/charleno-perfil.jpeg", // ex: "assets/img/charleno-pires-perfil.jpg"
      resumoPalestra:
        "Modelos de linguagem respondem de memória. Por isso desconhecem dados privados, ficam desatualizados e inventam fatos com confiança. O RAG vetorial resolve parte disso, mas falha em três tipos de pergunta: cadeias de fatos (\"o que cursar antes de Aprendizado de Máquina?\"), junções (\"quais professores ensinam conteúdos de grafos?\") e visão do todo (\"quais os grandes temas do curso?\"). A palestra mostra como grafos de conhecimento e ontologias preenchem essa lacuna, percorrendo a escada semântica até o grafo de conhecimento e abrindo o funcionamento do GraphRAG: extração de entidades, comunidades de Leiden e busca local e global. Com dados de benchmarks recentes, compara RAG, GraphRAG e fine-tuning em qualidade, custo e manutenção, e conclui que nenhum vence sempre e que o tipo de pergunta define a arquitetura. Por fim, apresenta o grafo como ferramenta, memória temporal e camada de regras para agentes de IA, incluindo integração via MCP. Simuladores interativos e código Python acompanham um caso do mundo acadêmico do IFPI.",
      resumo:
        "Mestre em Tecnologias Emergentes para a Educação. Professor do Instituto Federal do Piauí (IFPI), Campus Altos.",
      areas: ["GraphRAG", "Grafos de Conhecimento", "Ontologias", "Agentes de IA", "RAG"]
    },

    guilhermeSimeao: {
      papel: "Palestrante",
      nome: "Guilherme Rodrigues Simeão",
      cargo: "Engenheiro de Software",
      instituicao: "Instituto Federal do Piauí (IFPI) · Egresso de ADS",
      foto: "assets/img/guilherme-perfil.jpeg", // ex: "assets/img/guilherme-simeao-perfil.jpg"
      resumoPalestra: "", // o bloco de notas não traz resumo da palestra
      resumo:
        "Engenheiro de software formado em Análise e Desenvolvimento de Sistemas pelo IFPI, com mais de oito anos de experiência em produtos digitais. Especialista em desenvolvimento mobile, passou por empresas como Riachuelo, Grupo Boticário e Banco ABC Brasil, contribuindo para aplicativos utilizados por mais de 10 milhões de usuários nos setores de comércio eletrônico, serviços financeiros, saúde e educação. Sua trajetória inclui liderança técnica, mentoria de desenvolvedores e entregas voltadas à qualidade, segurança e desempenho de software. Atualmente cursa pós-graduação em Engenharia de IA e aprofunda sua formação em agentes inteligentes, automação e desenvolvimento de software com inteligência artificial.",
      areas: ["Desenvolvimento Mobile", "Agentes Inteligentes", "Automação", "Engenharia de IA", "Mentoria"]
    },

    laysEmanuelly: {
      papel: "Ministrante",
      nome: "Lays Emanuelly",
      cargo: "Estudante de ADS e analista de dados no Observatório da Mulher Piauiense",
      instituicao: "Instituto Federal do Piauí (IFPI) · Campus Teresina Central",
      foto: "assets/img/lays-emanuelly-perfil.jpeg", // ex: "assets/img/lays-emanuelly-perfil.jpg"
      resumoPalestra:
        "A partir da experiência no Observatório da Mulher Piauiense, o minicurso apresenta o processo de construção de um painel de dados, mostrando que um bom mapeamento de dados começa antes do Power BI. O percurso parte da identificação de um problema, passa pelo planejamento do objetivo por trás dele e pelo processamento e análise dos dados, até chegar à construção do painel. Ao longo do processo, os participantes veem como transformar dados em informações que permitam identificar padrões, comparar cenários e responder às questões que deram origem à análise. A proposta é mostrar, de forma prática, o Power BI como uma ferramenta dentro de um processo maior de análise, no qual o planejamento, a qualidade dos dados e a interpretação dos resultados são fundamentais.",
      resumo:
        "Estudante do último período de Análise e Desenvolvimento de Sistemas (ADS) do IFPI – Campus Teresina Central. Atua no Observatório da Mulher Piauiense, da Secretaria das Mulheres de Estado, principalmente na área de análise de dados. Entre os painéis interativos em Power BI que desenvolveu estão a sistematização dos dados do Programa Nacional Pró-Equidade (edições 2024 e 2025), recortes demográficos do Piauí, os 10 anos da Lei do Feminicídio no estado e os organismos de políticas para as mulheres. Também desenvolveu o Mapa da Rede de Enfrentamento à Violência contra a Mulher, ferramenta web que reúne e localiza órgãos, instituições e serviços da rede de atendimento às mulheres em todo o Piauí.",
      areas: ["Análise de Dados", "Power BI", "Visualização de Dados", "Painéis Interativos", "Políticas para Mulheres"]
    },

    adelinoFrazao: {
      papel: "Músico",
      nome: "Adelino Frazão",
      cargo: "Professor e Músico",
      instituicao: "Instituto Federal do Piauí (IFPI)",
      foto: "assets/img/adelino-perfil.gif",
      resumo:
        "Doutor em Música pela Universidade Federal de Minas Gerais (UFMG), com formação realizada entre 2019 e 2023. Mestre em Letras pela Universidade Estadual do Piauí (UESPI), com formação entre 2012 e 2014. Professor de Música do Instituto Federal do Piauí (IFPI) desde 2012. Coordenador Adjunto Estadual dos Agentes Territoriais de Cultura do Piauí. Especialista em Docência Superior pela UESPI (2011) e graduado em Educação Artística, com habilitação em Música, pela Universidade Federal do Piauí (UFPI), em 2004.",
      areas: [
        "Música",
        "Educação Musical",
        "Cultura",
        "Letras"
      ]
    },

    silvioPereira: {
      papel: "Ministrante",
      nome: "Silvio Pereira Silva Neto",
      cargo: "Aluno do curso de Informática",
      instituicao: "Instituto Federal do Piauí (IFPI)",
      foto: "assets/img/isaac-perfil.jpeg",
      resumo: "Aluno do curso de Informática do Instituto Federal do Piauí (IFPI).",
      areas: ["Informática", "Robótica", "Arduino"]
    },

    vitorEmanuel: {
      papel: "Ministrante",
      nome: "Vítor Emanuel da Silva Rodrigues",
      cargo: "Aluno do curso de Informática",
      instituicao: "Instituto Federal do Piauí (IFPI)",
      foto: "assets/img/vitor-perfil.jpeg",
      resumo: "Aluno do curso de Informática do Instituto Federal do Piauí (IFPI).",
      areas: ["Informática", "Robótica", "Arduino"]
    },

    isaacLima: {
      papel: "Ministrante",
      nome: "Isaac Lima de Oliveira",
      cargo: "Aluno do curso de Informática",
      instituicao: "Instituto Federal do Piauí (IFPI)",
      foto: "assets/img/isaac-perfil.jpeg",
      resumo: "Aluno do curso de Informática do Instituto Federal do Piauí (IFPI).",
      areas: ["Informática", "Robótica", "Arduino"]
    },

    lucianaTsukada: {
      papel: "Palestrante",
      nome: "Luciana Tsukada",
      cargo: "Gestora Executiva Startup Piauí",
      instituicao: "Startup Piauí",
      foto: "",
      resumo: "",
      areas: ["Empreendedorismo", "Startups", "Inovação"]
    },

    gregMaranhao: {
      papel: "Palestrante",
      nome: "Greg Maranhão",
      cargo: "Chefe de Gabinete representando o Diretor Presidente do PIT - Rafael Jales",
      instituicao: "PIT",
      foto: "",
      resumo: "",
      areas: ["Inovação", "Empreendedorismo"]
    },

    simaoOliveira: {
      papel: "Palestrante",
      nome: "Simão Oliveira",
      cargo: "Responsável pela Aceleração de Projetos",
      instituicao: "PIT",
      foto: "",
      resumo: "",
      areas: [
        "Aceleração de Projetos",
        "Startup Piauí",
        "PIT"
      ]
    },

    gusthavoEduardo: {
      papel: "Ministrante",
      nome: "Gusthavo Eduardo",
      cargo: "Técnico em Informática e graduando em Ciência da Computação",
      instituicao: "IFPI · Universidade Federal do Piauí (UFPI)",
      foto: "assets/img/gusthavo-perfil.jpeg",
      resumo:
        "Técnico em Informática pelo Instituto Federal do Piauí (IFPI) e graduando em Ciência da Computação na Universidade Federal do Piauí (UFPI).",
      areas: [
        "Bioinformática",
        "Alinhamento de sequências",
        "Algoritmo de Smith-Waterman"
      ]
    },

    marcus: {
      papel: "Ministrante",
      nome: "Marcus",
      cargo: "Graduando em Ciência da Computação",
      instituicao: "Universidade Federal do Piauí (UFPI)",
      foto: "assets/img/marcus-perfil.jpeg",
      resumo: "Graduando em Ciência da Computação na Universidade Federal do Piauí (UFPI).",
      areas: [
        "Bioinformática",
        "Computação"
      ]
    },

    luisFelipePatrocinio: {
      papel: "Palestrante",
      nome: "Luis Felipe Patrocínio",
      cargo: "Programador de jogos, professor e cofundador de estúdio de games",
      instituicao: "Instituto Federal do Piauí (IFPI) · Egresso de ADS",
      foto: "assets/img/patrocinio-perfil.jpeg", // ex: "assets/img/luis-felipe-perfil.jpeg"
      resumoPalestra: "A palestra apresenta um panorama realista e prático do mercado de desenvolvimento de jogos. O conteúdo aborda os games como motores de inovação na área da tecnologia, exigindo uma integração única entre disciplinas exatas e criativas, como programação, UX, música e game design. O público aprenderá os caminhos práticos para iniciar na área hoje, abordando a escolha de engines (GameMaker, Godot, Unity), a importância das Game Jams e a criação de portfólio. Por fim, faz uma análise crítica sobre a Inteligência Artificial no GameDev, discutindo as armadilhas de depender exclusivamente da IA para gerar projetos e a importância de manter a direção criativa humana como o núcleo de um jogo de sucesso.", // as notas não trazem título nem resumo da palestra
      resumo:
        "Programador de jogos, professor e cofundador de um estúdio de desenvolvimento de jogos no Piauí. Com uma trajetória não convencional, uniu a primeira formação em Ciências Contábeis à graduação em Análise e Desenvolvimento de Sistemas (IFPI) e transformou o hobby de gamedev em profissão. Foi pesquisador do LABIRAS e atua como programador de projetos comerciais de destaque lançados na Steam, como Tiny Witch, Asleep e There Will Be No Turkey This Christmas. Especialista em GameMaker e integração de Inteligência Artificial, também atua como professor de robótica, TI, IA e programação. Seu objetivo é desmistificar a área e preparar novos talentos para o mercado real de gamedev e de tecnologia em geral.",
      areas: ["Desenvolvimento de Jogos", "GameMaker", "Inteligência Artificial", "Robótica", "Programação"]
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
      horario: "14:00 às 16:00",
      titulo: "Credenciamento",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-06",
      horario: "16:30 às 17:00",
      titulo: "Apresentação Cultural do Professor e Músico Adelino Frazão",
      palestrantes: ["adelinoFrazao"],
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
      titulo: "Sistemas Complexos, Ciência de Dados e IA para Inovação Em Saúde",
      palestrantes: ["joseSoares"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },

    // 07/10/2026
    {
      categoria: "Minicursos",
      dia: "2026-10-07",
      horario: "08:00 às 12:00",
      titulo: "Robótica Básica com Arduino",
      palestrantes: [
        "silvioPereira",
        "vitorEmanuel",
        "isaacLima"
      ],
      resumo:
        "Minicurso de robótica com Arduino. Aprenda os conceitos básicos de robótica e lógica de programação de forma simples e objetiva. O conteúdo conta com exemplos práticos desenvolvidos diretamente no simulador Tinkercad.",
      observacao:
        "Traga seu notebook para fazer os exemplos práticos.",
      local: "Laboratório EmbarcaTech (Sala A1-07)",
    },
    {
      categoria: "Minicursos",
      dia: "2026-10-07",
      horario: "14:00 às 18:00",
      titulo: "Criação de músicas e efeitos sonoros para jogos 8 e 16 Bits",
      palestrantes: ["carlosHenrique"],
      observacao: "🎧 Leve seu fone de ouvido para produzir os materiais durante o minicurso.",
      local: "Auditório Carmen Sinott",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "14:00 às 14:30",
      titulo: "Sebrae + Supernova: Transformando Ideias em Oportunidades",
      palestrantes: ["thabataCronemberger"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "14:30 às 15:00",
      titulo: "Startup Piaui + PIT",
      palestrantes: [
      "lucianaTsukada",
      "gregMaranhao",
      "simaoOliveira"
    ],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "16:00 às 17:00",
      titulo: "Estratégias de especialização de domínio em LLMs",
      palestrantes: ["bianca"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "17:00 às 18:00",
      titulo: "GraphRAG: Grafos, Ontologias e Agentes de IA",
      palestrantes: ["charlenoPires"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Minicursos",
      dia: "2026-10-07",
      horario: "17:00 às 18:00",
      titulo: "Proteja Seus Dados: Guia Completo de Segurança Digital",
      palestrantes: ["joaoPedro"],
      local: "Laboratório B3-10",
    },
    {
      categoria: "",
      dia: "2026-10-07",
      horario: "16:00 às 18:00",
      titulo: "Refinar proposta Invest Piauí IdeiaLab",
      palestrantes: [
        "simaoOliveira",
        "lucianaTsukada"
      ],
      local: "Laboratório EmbarcaTech (Sala A1-07)",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-07",
      horario: "18:00 às 19:00",
      titulo: "Como se destacar no Mercado de Tecnologia em 2026",
      palestrantes: ["guilhermeSimeao"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },

    // 08/10/2026
    {
      categoria: "",
      dia: "2026-10-08",
      horario: "08:30 às 10:30",
      titulo: "Refinar proposta Invest Piauí Idealab",
      palestrantes: [
        "simaoOliveira",
        "lucianaTsukada"
      ],
      local: "Laboratório EmbarcaTech (Sala A1-07)",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "08:30 às 11:30",
      titulo: "Apresentação FEPICE",
      local: "Térreo Prédio B",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "10:00 às 11:00",
      titulo: "Considerações sobre Ética no uso de IA",
      palestrantes: ["nazarenoCesar"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Minicursos",
      dia: "2026-10-08",
      horario: "14:00 às 18:00",
      titulo: "Minicurso de Bioinformática",
       palestrantes: [
        "gusthavoEduardo",
        "marcus"
      ],
      resumo:
        "Alinhamento de sequências e algoritmos de Smith-Waterman.",
      local: "Laboratório B3-10",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "14:00 às 15:00",
      titulo: "Por que a IA não vai fazer seu jogo sozinha", // trocar pelo título real
      palestrantes: ["luisFelipePatrocinio"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "14:00 às 16:00",
      titulo: "Pitch! Agora é com você — Roteirização do Pitch IdeiaLab",
      palestrantes: ["vicenteOliveira"],
      local: "Laboratório EmbarcaTech (Sala A1-07)",
    },
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-08",
      horario: "14:30 às 17:30",
      titulo: "Apresentação FEPICE",
      local: "Térreo Prédio B",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "15:00 às 16:00",
      titulo: "A Nova Formação do Profissional de Computação",
      palestrantes: ["neyParanagua"],
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "16:00 às 16:30",
      titulo: "Apresentação do LIMS: fomentando a busca por conhecimento",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "16:30 às 17:00",
      titulo: "Apresentação do Labiras",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "17:00 às 17:30",
      titulo: "Apresentação do GrunaLabs: transformando sua pesquisa em uma startup",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "Palestras",
      dia: "2026-10-08",
      horario: "17:30 às 18:00",
      titulo: "Apresentação do Inovatech",
      local: "Auditório Maestrina Clóris de Oliveira",
    },

    // 09/10/2026
    {
      categoria: "Apresentação de Trabalhos",
      dia: "2026-10-09",
      horario: "09:00 às 11:00",
      titulo: "Apresentação dos PITCHs IdeaLab",
      local: "DPI - Diretoria de Pesquisa, Pós-graduação e Inovação",
    },
    {
      categoria: "Minicursos",
      dia: "2026-10-09",        // preencher
      horario: "14:00 às 16:00", // preencher
      titulo: "Criação de Painéis no Power BI: da Análise à Visualização",
      palestrantes: ["laysEmanuelly"],
      local: "Auditório Carmen Sinott",        // preencher
    },
    {
      categoria: "",
      dia: "2026-10-09",
      horario: "16:00 às 17:00",
      titulo: "Premiação FEPICE",
      local: "Térreo Prédio B",
    },
    {
      categoria: "",
      dia: "2026-10-09",
      horario: "17:00 às 18:00",
      titulo: "Resultado Fase 2 e premiação Idealab",
      local: "Auditório Maestrina Clóris de Oliveira",
    },
    {
      categoria: "",
      dia: "2026-10-09",
      horario: "18:00 às 18:30",
      titulo: "Encerramento",
      local: "Auditório Maestrina Clóris de Oliveira",
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