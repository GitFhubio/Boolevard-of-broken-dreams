new Vue({
  el: '#root',
  data: {
    indexImg:0,
    positionDotHorizontal:0,
    indexSocial:'',
isBurgerActive:false,
burger_imgs:[{alt:'0',
src:'home_bg'
},{alt:'1',
src:'about_bg',
},{alt:'2',
src:'services_bg',
},{alt:'3',
src:'products_bg',
},{alt:'4',
src:'blog_bg',
},{alt:'6',
src:'contact_us_bg',
}],
imgs:[{alt:'0',
src:'home_bg'
},{alt:'1',
src:'about_bg',
},{alt:'2',
src:'services_bg',
},{alt:'3',
src:'products_bg',
},{alt:'4',
src:'blog_bg',
},{alt:'6',
src:'contact_us_bg',
}],
burger_list:[{name:'Home',
},{name:'About'
},{name:'Services'
},{name:'Products',
background_img:'4'
},{name:'Blog'
},{name:'Contact us'
}
],
footer_social_media: [
  {
    name: 'facebook',
    code: '-f',
    url: '#',
  },
  {
    name: 'twitter',
    code: '',
    url: '#',
  },
  {
    name: 'youtube',
    code: '',
    url: '#',
  },
  {
    name: 'instagram',
    code: '',
    url: '#',
  },
],
logo:{
  url:'https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg',
  alt:'logo del sito'
}

  },
  methods:{
    toggleMenu(){
      if(this.isBurgerActive==false)
   { this.isBurgerActive=true;}
   else{
     this.isBurgerActive=false;
   }
 },
 Slider(index){
      this.indexImg=index;
  },
  showName(ind){
  this.indexSocial=ind;
  },
  hideName(){
  this.indexSocial='';
},
slideHorizontal(index, id){

  this.positionDotHorizontal = index;

  if (this.positionDotHorizontal == 0) {
    document.getElementById(id).scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    document.getElementById(id).scrollTo({
      left: (this.positionDotHorizontal*600),
      behavior: 'smooth'
    });
  };

},
}
})

Vue.config.devtools = true;
