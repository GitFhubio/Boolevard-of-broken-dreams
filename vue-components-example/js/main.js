// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere un’immagine presa anch’essa da un data

Vue.config.devtools = true;

var app = Vue.component("App",
{
  template:`
  <div class="container" style="display:flex;justify-content:center;">
    <products-list></products-list>
  </div>`,
  data(){
    return{};
  }

})

Vue.component("products-list",
{
  template:`
  <div>
  <h2 class="text-center">Elenco prodotti</h2>
  <div style="display:flex;">
    <product-box v-for="product in products" :key="product.id" v-bind:item="product"></product-box>
  </div>
  </div>`,
  data(){
    return{
     products:[
       {id:1, nome:'prodotto1'},
       {id:2, nome:'prodotto2'},
       {id:3, nome:'prodotto3'}
     ]

    };
  }

})

Vue.component("product-box",
{
  template:`<div class="card" style="width:240px;">
  <img v-bind:src="'https://picsum.photos/240/240?image='+ item.id">
  <h4>{{item.nome}}</h4>
  </div>`,
  props:['item'],
  data(){
    return{

  }
}

})



new Vue({
  el: '#root'
});