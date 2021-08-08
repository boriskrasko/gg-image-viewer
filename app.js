new Vue({
  el: '#app',
  data: {
    title: "Uniek werk! - restauratie",
    image: 'img/img-4.jpg',
    text: 'GG Floors&Construct heeft door zijn jarenlange ervaring een reputatie opgebouwd van een zeer betrouwbare en zeer solide onderneming. Geen enkele muur zal er nog opgeschilderd uitzien.',
    description: "Schilderen van houten ramen",
    types: ['afschuren', 'afkappen', 'bijwerken', 'schilderen', 'schuren'],
    details: ['#gg_floors_constructions'],
    descriptionVisible: true,
    mapVisible: false,
    curtainVisible: false,
    activeWidth: 100,
    activeHeight: 100,
    id: 4,
    variants: [{
        id: 1,
        miniature: 'url(img/img-1.jpg)',
        vImage: 'img/img-1.jpg',
        vText: 'GG Floors&Construct  heeft door zijn jarenlange ervaring een reputatie opgebouwd van een zeer betrouwbare en zeer solide onderneming.',
      },

      {
        id: 2,
        miniature: 'url(img/img-2.jpg)',
        vImage: 'img/img-2.jpg',
        vText: 'Hierbij staat vakmanschap, kwaliteit en service steeds centraal.',

      },

      {
        id: 3,
        miniature: 'url(img/img-3.jpg)',
        vImage: 'img/img-3.jpg',
        vText: 'Door het snel en accuraat inspelen op specifieke wensen van de opdrachtgevers staat GG Floors&Construct garant voor een perfect eindresultaat.',

      },

      {
        id: 4,
        miniature: 'url(img/img-4.jpg)',
        vImage: 'img/img-4.jpg',
        vText: 'GG Floors&Construct staat reeds jaren garant voor alle schilderwerken voor verschillende grotere klasse 8 firma’s.',

      },

      {
        id: 5,
        miniature: 'url(img/img-5.jpg)',
        vImage: 'img/img-5.jpg',
        vText: 'Deze gebruiken wij dan ook graag als referentie voor ons vakmanschap.',

      },

      {
        id: 6,
        miniature: 'url(img/img-6.jpg)',
        vImage: 'img/img-6.jpg',
        vText: 'GG Floors&Construct speelt dan ook in op de specifieke wensen vanuit de opdrachtgevers',

      },

      {
        id: 7,
        miniature: 'url(img/img-7.jpg)',
        vImage: 'img/img-7.jpg',
        vText: 'die bij voorkeur werken met één en dezelfde partij',

      },

      {
        id: 8,
        miniature: 'url(img/img-8.jpg)',
        vImage: 'img/img-8.jpg',
        vText: 'die verantwoordelijk is voor verschillende werkzaamheden binnen een project',

      },

      {
        id: 9,
        miniature: 'url(img/img-9.jpg)',
        vImage: 'img/img-9.jpg',
        vText: 'Geen enkele muur zal er nog opgeschilderd uitzien.',

      },

      {
        id: 10,
        miniature: 'url(img/img-10.jpg)',
        vImage: 'img/img-10.jpg',
        vText: ' ',

      },

    ]
  },
  methods: {
    updateProduct(vImage, id, vText) {
      this.image = vImage;
      this.id = id;
      this.text = vText;
    },
  },
})
new Vue({
  el: '#terras',
  data: {
    title: "Wat een pareltje.",
    image: 'img/terras/img-4.jpg',
    description: "Golf Park Tervuren voor het vertrouwen.",
    types: ["vloeren", "terrassen", "schilderwerken", "pleisterwerke", "dakwerken"],
    details: ['#gg_floors_constructions'],
    descriptionVisible: true,
    mapVisible: false,
    curtainVisible: false,
    activeWidth: 100,
    activeHeight: 100,
    id: 4,
    variants: [{
        id: 1,
        miniature: 'url(img/terras/img-1.jpg)',
        vImage: 'img/terras/img-1.jpg',
      },

      {
        id: 2,
        miniature: 'url(img/terras/img-2.jpg)',
        vImage: 'img/terras/img-2.jpg',
      },

      {
        id: 3,
        miniature: 'url(img/terras/img-3.jpg)',
        vImage: 'img/terras/img-3.jpg',
      },

      {
        id: 4,
        miniature: 'url(img/terras/img-4.jpg)',
        vImage: 'img/terras/img-4.jpg',
      },

      {
        id: 5,
        miniature: 'url(img/terras/img-5.jpg)',
        vImage: 'img/terras/img-5.jpg',
      },

      {
        id: 6,
        miniature: 'url(img/terras/img-6.jpg)',
        vImage: 'img/terras/img-6.jpg',
      },

      {
        id: 7,
        miniature: 'url(img/terras/img-7.jpg)',
        vImage: 'img/terras/img-7.jpg',
      },

      {
        id: 8,
        miniature: 'url(img/terras/img-8.jpg)',
        vImage: 'img/terras/img-8.jpg',
      },

      {
        id: 9,
        miniature: 'url(img/terras/img-9.jpg)',
        vImage: 'img/terras/img-9.jpg',
      },

    ]
  },
  methods: {
    updateProduct(vImage, id, vText) {
      this.image = vImage;
      this.id = id;
      this.text = vText;
    },
  },
})
