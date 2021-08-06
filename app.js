new Vue({
  el: '#app',
  data: {
    title: "Uniek werk! - restauratie",
    image: 'img/img-4.jpg',
    description: "Schilderen van houten ramen",
    types: ['afschuren', 'afkappen', 'bijwerken', 'schilderen', 'schuren'],
    details: ['#gg_floors_constructions'],
    descriptionVisible: true,
    activeWidth: 100,
    activeHeight: 100,
    id: 4,
    variants: [{
        id: 1,
        miniature: 'url(img/img-1.jpg)',
        vImage: 'img/img-1.jpg',
      },

      {
        id: 2,
        miniature: 'url(img/img-2.jpg)',
        vImage: 'img/img-2.jpg',
      },

      {
        id: 3,
        miniature: 'url(img/img-3.jpg)',
        vImage: 'img/img-3.jpg',
      },

      {
        id: 4,
        miniature: 'url(img/img-4.jpg)',
        vImage: 'img/img-4.jpg',
      },

      {
        id: 5,
        miniature: 'url(img/img-5.jpg)',
        vImage: 'img/img-5.jpg',
      },

      {
        id: 6,
        miniature: 'url(img/img-6.jpg)',
        vImage: 'img/img-6.jpg',
      },

      {
        id: 7,
        miniature: 'url(img/img-7.jpg)',
        vImage: 'img/img-7.jpg',
      },

      {
        id: 8,
        miniature: 'url(img/img-8.jpg)',
        vImage: 'img/img-8.jpg',
      },

      {
        id: 9,
        miniature: 'url(img/img-9.jpg)',
        vImage: 'img/img-9.jpg',
      },

      {
        id: 10,
        miniature: 'url(img/img-10.jpg)',
        vImage: 'img/img-10.jpg',
      },

    ]
  },
  methods: {
    updateProduct(vImage, id) {
      this.image = vImage;
      this.id = id;
    },
  },
})
