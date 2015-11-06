module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
		name: "OpenLabs",
		description: "OpenLabs - 1º Conferência #OpenDev",
		date: "05 de Dezembro",
		// If your event is free, just comment this line
		price: "Vagas limitadas!",
		venue: "Auditório da Estácio",
		address: "Rua José Acurcio Benigno, 116 - 212, Braunes, 28611-135",
		city: "Nova Friburgo",
		state: "RJ"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
		text: "Registre-se! É grátis.",
		link: "http://eventick.com.br/primeiro-openlabs"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
		repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

    // Site info
    site: {
      theme: "yellow-swan",
	  url: "http://opendevlabs.github.io",
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
			time: "8h30",
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
				description: "Depois do movimento responsive first, mobile first, hoje temo o desenvolvimento de aplicativos e produtos voltados para a abordagem API First. Neste talk, serão apresentados alguns dos motivos para essa abordagem ter ganha tanta força nos últimos anos e também algumas tendências e etc.",
				time: "9h10"
			}
		},

		{
			name: "Coffee-break",
			time: "10h00"
		},

		{
			name: "Em breve",
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
				time: "10h30"
			//}
		},

		{
			name: "Em breve",
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
				time: "11h20"
			//}
		},

		{
			name: 'Almoço',
			time: '12h10'
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
				time: "14h00"
			}
		},

		{
			name: "Em breve",
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
				time: "14h50"
			//}
		},

		{
			name: "Coffee-break",
			time: "15h40"
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
				time: "16h10"
			//}
		},

		{
			name: "Encerramento / Sorteio",
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
				time: "17h00"
			//}
		}

	],

    // List of Sponsors
    sponsors: [
      /*{
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }*/
    ],

	// List of Partners
	partners: [
		{
			name: "Casa do Código",
			logo: "themes/yellow-swan/img/casaCodigo.jpg",
			url: "http://casadocodigo.com.br"
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
