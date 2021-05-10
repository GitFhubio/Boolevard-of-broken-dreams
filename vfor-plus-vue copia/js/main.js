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
  <button class="btn btn-danger" @click="edit()">BOTTONE edit</button>
  <button class="btn btn-danger" @click="push()">BOTTONE push</button>
  <button class="btn btn-danger" @click="filter()">BOTTONE filter</button>
  <button class="btn btn-danger" @click="set()">BOTTONE set</button>
  <button class="btn btn-danger" @click="cut()">BOTTONE cut</button> 
  <button class="btn btn-danger" @click="setProperty()">BOTTONE set property</button>
  <button class="btn btn-danger">BOTTONE set properties</button>  
  <!-- non avrebbe funzionato length,e non avrebbe funzionato mettere valore senza set(o meglio,
    va bene una volta settato per modificarlo,ma non per crearlo dal nulla) -->
  </div>`,
  data(){
    return{
     indexActive:0,
     products:[
       {id:1, nome:'prodotto1'},
       {id:2, nome:'prodotto2'},
       {id:3, nome:'prodotto3'}
     ]

    };
  },
  methods: {
 edit(){
   this.products[0].nome ="modificato";

 },
 push(){
   this.products.push({
    id:4, nome:'prodotto4'
   })
 },
 filter(){
  return this.products=this.products.filter(e=>e.id>2);
 },
 cut(){
   this.products.splice(1)
 },
 set(){
   Vue.set(this.products[0],'nome','pippo')
 },
 setProperty(){
  Vue.set(this.products[0] ,'cognome','baudo')
},
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