module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
		name: "OpenLabs 2015",
		description: "Para encerrarmos o ano com chave de ouro, teremos a 1º Conferência OpenLabs, um sábado inteiro de palestras e muito networking. Wi-Fi liberado, coffeebreak e emissão de certificado para todos.",
		date: "05 de Dezembro",
		// If your event is free, just comment this line
		price: "Inscrições encerradas",
		venue: "Auditório da Estácio",
		address: "Rua José Acurcio Benigno, 116 - 212, Braunes, 28611-135",
		city: "Nova Friburgo",
		state: "RJ"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    /*callToAction: {
		text: "Registre-se! É grátis.",
		link: "http://eventick.com.br/primeiro-openlabs"
    },*/

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
		repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

    // Site info
    site: {
		theme: "yellow-swan",
		url: "http://2015.openlabs.com.br",
		googleanalytics: "UA-31169124-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      //'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
		about: "Sobre",
		location: "Local",
		speakers: "Palestrantes",
		schedule: "Programação",
		sponsors: "Patrocinadores",
		partners: "Apoio",
		contact: "Contato"
    },

    // The entire schedule
	schedule: [
		{
			name: "Check-in",
			time: "9h40",
		},

		{
			name: "Marcelo Pires",
			photo: "themes/yellow-swan/img/marcelo.jpg",
			bio: "DevOps.",
			company: "",
			link: {
				href: "https://br.linkedin.com/in/marcpires",
				text: "marcpires"
			},
			presentation: {
				title: "Rest APIS: Por que elas são importantes",
				description: "Depois do movimento responsive first, mobile first, hoje temos o desenvolvimento de aplicativos e produtos voltados para a abordagem API First. Neste talk, serão apresentados alguns dos motivos para essa abordagem ter ganho tanta força nos últimos anos e também algumas tendências.",
				time: "10h20"
			}
		},

		{
			name: "Leonardo Marinho",
			photo: "themes/yellow-swan/img/lhm.jpg",
			bio: "Graduando em análise e desenvolvimento de sistemas, desenvolvedor fron/backend e mobile. Apaixonado por tecnologia, blogueiro no tempo livre e fã de star wars.",
			company: "RG Sistemas",
			link: {
				href: "http://leomhl.github.io",
				text: "leomhl"
			},
			presentation: {
				title: "Desmistificando o mobile híbrido com phonegap",
				description: "Quanto tempo e dinheiro você está disposto a investir em um aplicativo mobile? Descubra no mobile híbrido uma alternativa aos gargalos gerados pelo desenvolvimento nativo.",
				time: "11h10"
			}
		},

		{
			name: 'Almoço',
			time: '12h00'
		},

		{
			name: "Felyppe Rodrigues",
			photo: "themes/yellow-swan/img/felyppe.jpg",
			bio: "Engenheiro de Computação formado pela UERJ, atualmente mestrando em Engenharia de Software pela UFRJ e Analista de Sistemas da empresa Gemain no Rio de Janeiro. Seu histórico de projetos envolvem principalmente verificação, validação e testes de software, desenvolvimento web, tecnologias móveis e ubíquas.",
			company: "Gemain",
			link: {
				href: "",
				text: ""
			},
			presentation: {
				title: "Testes de Software: Academia x Indústria",
				description: "Em um mundo ideal, a indústria desenvolve soluções para o bem-estar da humanidade, enquanto a academia propõe formas de melhorar o desempenho da indústria para a geração de suas soluções. "
					+"No entanto, o cenário atual do mercado de software mostra que a indústria prefere caminhar com as próprias pernas acreditando que escutar ideias acadêmicas a fará perder um precioso tempo de desenvolvimento. "
					+"Em contra-partida, a academia muitas vezes tenta resolver problemas que lhe parecem interessantes, mas que de forma alguma se aplicam ao mercado. "
					+"Os beneficios da relação entre academia e indústria podem ser observados durante todo o ciclo de vida de um projeto de software. Nesta palestra, especificamente, trataremos de como este trabalho conjunto pode beneficiar a atividade de testes, impactando diretamente na qualidade final do produto.",
				time: "13h30"
			}
		},

		{
			name: "Gabriel Paladino",
			photo: "themes/yellow-swan/img/gabriel.jpg",
			bio: "Começou programar por hobbie ainda adolescente, passou a atuar profissionalmente em 2008 como desenvolvedor web e empreendedor. Desde então adquiriu experiência em projetos com diversas tecnologias focando atualmente no uso de Ruby on Rails, também atua junto ao ecossistema de tecnologia na região para fomentar o desenvolvimento de pessoas e empresas.",
			company: "Scupen",
			link: {
				href: "",
				text: ""
			},
			presentation: {
				title: "Ruby, o caminho das pedras",
				description: "Nesta palestra, veremos o dia a dia de um projeto em Ruby on Rails para que você possa começar a utilizar essa pedra preciosa. Também abordaremos conceitos, ferramentas e boas práticas que todo desenvolvedor pode utilizar para melhorar o seu trabalho.",
				time: "14h20"
			}
		},

		{
			name: "Mesa redonda",
			/*photo: "",
			bio: ".",
			company: "",
			link: {
				href: "",
				text: ""
			},
			presentation: {
				title: "Em breve",
				description: "",*/
				time: "15h10"
			//}
		},

		{
			name: "Coffee break",
			time: "16h00"
		},


		{
			name: "Sorteio / Encerramento",
			/*photo: "",
			bio: ".",
			company: "",
			link: {
				href: "",
				text: ""
			},
			presentation: {
				title: "Em breve",
				description: "",*/
				time: "16h30"
			//}
		}

	],

    // List of Sponsors
	sponsors: [
		{
			name: "Agência M3",
			logo: "themes/yellow-swan/img/M3.jpg",
			url: "http://digitalm3.com.br"
		},
		{
			name: "RG Sistemas",
			logo: "themes/yellow-swan/img/rg.png",
			url: "http://rgsistemas.com.br"
		}
	],

	// List of Partners
	partners: [
		{
			name: "Estácio de Sá",
			logo: "themes/yellow-swan/img/estacio.gif",
			url: "http://estacio.br"
		},
		{
			name: "CEFET",
			logo: "themes/yellow-swan/img/cefet.jpg",
			url: "http://cefetfriburgo.pro.br"
		},
		{
			name: "Casa do Código",
			logo: "themes/yellow-swan/img/casaCodigo.jpg",
			url: "http://casadocodigo.com.br"
		},
		{
			name: "Alura",
			logo: "themes/yellow-swan/img/alura.png",
			url: "http://alura.com.br"
		},
		{
			name: "TreinaWeb",
			logo: "themes/yellow-swan/img/treinaWeb.png",
			url: "http://treinaweb.com.br"
		},
		{
			name: "School of Net",
			logo: "themes/yellow-swan/img/schoolOfNet.jpg",
			url: "http://schoolofnet.com/"
		},
		{
			name: "SoftBlue",
			logo: "themes/yellow-swan/img/softblue.png",
			url: "http://softblue.com.br"
		},
		{
			name: "iPed",
			logo: "themes/yellow-swan/img/iped.jpg",
			url: "http://iped.com.br"
		}
	],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
