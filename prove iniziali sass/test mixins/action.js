new Vue({
  el: '#root',
  data: {
    indexImg:'',
    items:[
      'ciao',
      'come',
      'stai'
    ],
    imgs:[
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg','https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAluSqgc1dAzgxP1qkeHPOzZgkNE7gtlgbw&usqp=CAU'
    ]
  },
  methods:{
    nowActive(ind){
      this.indexImg=ind;
    }
  }

})

Vue.config.devtools = true;
