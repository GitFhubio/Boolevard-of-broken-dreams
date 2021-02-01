let boolzapp = new Vue({
  el: "#boolzapp",
  data:{
contacts: [
    {
    name: 'Stanis La Rochelle',
    avatar: '_1',
    matched:true,
    // michele è visibile se prendo visibile come proprietà che definisce chat aperta...gli altri li setto a false
    visible: true,
    messages: [
      {
      date: '22/01/2020 11:12:55',
      text: 'Tu ti devi trovare una pari grado,una camerierina',
      status: 'received',
      show:false
      },
      {
      date: '22/01/2020 11:14:00',
      text: 'Non pensi che stai esagerando Stanis?',
      status: 'sent',
      show:false
      },
      {
     date: '22/01/2020 11:15:22',
     text: 'Io credo che tu sia davvero un bravo ragazzo ma la tua provenienza operaia...',
    status: 'received',
    show:false
  },
  {date: '22/01/2020 11:15:22',
  text: 'Ma mio padre è ingegnere...',
 status: 'sent',
 show:false
},
{date: '22/01/2020 11:15:22',
text: 'È ingegnere operaio!',
status: 'received',
show:false
 }
    ],
    },
    {
    name: 'Mariano',
    avatar: '_2',
    matched:true,
    visible: false,
    messages: [
      {
      date: '10/01/2020 16:14:55',
      text: 'Tocca a te',
      status: 'received',
      show:false
      },
      {
      date: '10/01/2020 16:14:00',
      text: 'Fammi essere felice...',
      status: 'sent',
      show:false
      },
      {
     date: '10/01/2020 16:15:22',
     text: 'Nooo ma che è???Vorrei essere felice??Ma che è?Poi t\'ho detto d\'iniziare sempre con ti prego... ',
    status: 'received',
    show:false
  },
  {date: '10/01/2020 16:15:22',
  text: 'Ti prego,vero...',
 status: 'sent',
 show:false
},
{date: '10/01/2020 16:16:22',
text: 'Ma nooo ma è tardi è tardi ormai,sò tre ore che te lo dico.. ',
status: 'received',
show:false
},
{date: '10/01/2020 16:16:22',
text: ' Qua siamo in due mi sembra che l\'unico tra noi due che sta facendo uno sforzo per evitare che io ti meni sono sempre io',
status: 'received',
show:false
},
{date: '10/01/2020 16:17:22',
text: 'la stessa persona che prima o poi ti menerà...ma lo capisci?',
status: 'received',
show:false
 }
  ],
    },
    {
    name: 'Gianfranco',
    avatar: '_9',
    visible: false,
    matched:true,
    messages: [
      {
      date: '28/03/2020 10:10:40',
      text: 'Mai e poi mai svilire il ruolo del Parlamanto',
      status: 'received',
      show:false
      },
      {
      date: '28/03/2020 10:11:10',
      text: 'Ogni cittadino ha dei diritti ma anche dei doveri',
    status: 'received',
    show:false
      },
      {
      date: '29/01/2020 10:11:22',
      text: 'Francamante',
      status: 'received',
      show:false
      }
    ],
    },
    {
    name: 'Corinna',
    avatar: '_6',
    visible: false,
    matched:true,
    messages: [
      {
      date: '17/01/2020 15:30:55',
      text: 'È stato il gioie...',
      status: 'received',
      show:false
    },
    {
    date: '17/01/2020 15:31:55',
    text: 'È stato il gioieie...',
    status: 'received',
    show:false
  },
  {
  date: '17/01/2020 15:32:55',
  text: 'È stato il gioieie...',
  status: 'received',
  show:false
},
{
date: '17/01/2020 18:43:55',
text: 'È stato l\'orafo.',
status: 'received',
show:false
}
    ],
    },
    {
    name: 'Renè',
    avatar: '_5',
    visible: false,
    matched:true,
    messages: [
      {
      date: '13/01/2020 18:46:55',
      text: '...',
      status: 'sent',
      show:false
    },
    {
    date: '13/01/2020 18:47:55',
    text: 'Sei entratooo in campoooo testa di cazzoooo!!!',
    status: 'received',
    show:false
  },
  {
  date: '13/01/2020 18:47:55',
  text: 'sei uno stronzo m\'hai rovinato tutto,sei entratooo in campooo porca puttana',
  status: 'received',
  show:false
},
{
date: '13/01/2020 18:48:55',
text: 'vai viaa,non ti voglio vedere mai più,capito???',
status: 'received',
show:false
},
{
date: '13/01/2020 18:48:55',
text: 'testa di cazzo di merda vaffanculooo',
status: 'received',
show:false
}
    ],
    },
  ],
    admin: { name:'Seppia',
      avatar:'_io',
      visible:false,
    },
    newMessage:"",
    today:"",
    todayfull:"",
    search:""
}
,methods:{
nowActive:function(index){
 this.contacts.forEach((item, i) => {
   if(item.visible==true){
     item.visible=false; }
 });
this.contacts[index].visible=true;
}
,
addMessage:function(){
 let msg=this.newMessage;
  this.contacts.forEach((item, i) => {
  if(item.visible==true && msg!=''){
    // oppure item.messages.push()
      item.messages=[...item.messages,{
      date:this.todayfull,
      text: msg,
      status: 'sent',
      show:false
      }]; }
  });
  this.newMessage='';
},
searchUser:function(){
  let search=this.search;
  this.contacts.forEach((item, i) => {
    if(search!='' && !item.name.toLowerCase().includes(search.toLowerCase())){
      item.matched=false; }
      else if(search==''){
        item.matched=true;

      }


  });

},
nowTime:function(){
  let day=(new Date).getDate();
  let month=(new Date).getMonth()+1;
  let year=(new Date).getFullYear();
  let minutes= (new Date).getMinutes();
  if(month<10){
  this.today=day+'/0'+month;
} else{
    this.today=day+'/'+month;
}
if (minutes<10){
minutes= '0'+(new Date).getMinutes();
}
  console.log(this.today);
  this.todayfull=this.today+'/'+year+' '+(new Date).getHours() +':'+minutes;
  console.log(this.todayfull);
},

LastChatToday:function(contact){

    if(contact.messages[contact.messages.length-1].date.slice(0,5) == this.today){
         return true }
      else {
        return false;

      }
  },
  removeMessage(contact,ind){
     contact.messages.splice(ind,1);
        // Vue.delete(contact.messages,ind);
  }
  ,
  dropdown(contact,ind){
// se è aperto chiudilo altrimenti ho cliccato per aprire,quindi chiudi gli altri se sono aperti
    if (contact.messages[ind].show==true){
     contact.messages[ind].show=false;
  }else{
  this.contacts.forEach((item, i) => {
          item.messages.forEach((el, v) => {
             el.show=false;
      });
      });
         contact.messages[ind].show=true;
     }
    }
},
mounted() {

  this.nowTime();
}

});

// out of vue/effetti stilistici

// intercettare click outside messaggio per chiudere dropdown- vanilla js
var dropdownContainer=document.getElementsByClassName('dropdown-container');
console.log(dropdownContainer);
document.body.addEventListener('click',function(event){
  console.log(event.target.nodeName);
  console.log(event.target.className);
         for (var x = 0; x < dropdownContainer.length; x++) {
           if(!event.target.className.includes('bubble-content') && !event.target.className.includes('into-bubble')){
          blur2();
           if(dropdownContainer[x].className.includes('show')){
         dropdownContainer[x].classList.remove('show');
         dropdownContainer[x].style.display='none'
         }
        }

    }
})

// per dare blur - vanilla js

var messages=document.getElementsByClassName("messages");
 var backmessage= document.getElementsByClassName("background-message");
 var backchat=document.getElementsByClassName("background-chat")[0];
 var chat= document.getElementsByClassName("chat")[0];
 var bubbleContent=document.getElementsByClassName("bubble-content");
 var writeMessage=document.getElementsByClassName("write-message")[0];
 var currentUser=document.getElementsByClassName("current-user")[0];
  var header= document.getElementsByTagName("header")[0];
  var container=document.getElementsByClassName("container")[0];
  var aside= document.getElementsByTagName("aside")[0];

 for (var v = 0; v < messages.length; v++) {
  messages[v].addEventListener('click',function(){
   blur3();
   if (messages.length==0){
     blur2();
   }
 })}


 function blur1(){
 for (var i = 0; i < backmessage.length; i++) {
   if (backmessage[i].className.includes('blurred1')){
     backmessage[i].classList.remove('blurred1')}
     else{backmessage[i].classList.add('blurred1')}
 }
 for (var i = 0; i < bubbleContent.length; i++) {
 if (bubbleContent[i].className.includes('blurred0')){
   bubbleContent[i].classList.remove('blurred0')}
   else{bubbleContent[i].classList.add('blurred0')}
 }

    if (backchat.className.includes('blurred2')){
      backchat.classList.remove('blurred2')}
      else{backchat.classList.add('blurred2')}

      if (chat.className.includes('blurred3')){
        chat.classList.remove('blurred3')}
        else{chat.classList.add('blurred3')}

          if (writeMessage.className.includes('blurred0')){
            writeMessage.classList.remove('blurred30')}
            else{writeMessage.classList.add('blurred0')}

            if (currentUser.className.includes('blurred0')){
              currentUser.classList.remove('blurred0')}
              else{currentUser.classList.add('blurred0')}

              if (header.className.includes('blurred0')){
                header.classList.remove('blurred0')}
                else{header.classList.add('blurred0')}

                if (container.className.includes('blurred0')){
                  container.classList.remove('blurred0')}
                  else{container.classList.add('blurred0')}

                  if (aside.className.includes('blurred0')){
                    aside.classList.remove('blurred0')}
                    else{aside.classList.add('blurred0')}
           }
           function blur2(){
           for (var i = 0; i < backmessage.length; i++) {
             if (backmessage[i].className.includes('blurred1')){
               backmessage[i].classList.remove('blurred1')}
           }
           for (var i = 0; i < bubbleContent.length; i++) {
           if (bubbleContent[i].className.includes('blurred0')){
             bubbleContent[i].classList.remove('blurred0')}
           }

              if (backchat.className.includes('blurred2')){
                backchat.classList.remove('blurred2')}

                if (chat.className.includes('blurred3')){
                  chat.classList.remove('blurred3')}

                    if (writeMessage.className.includes('blurred0')){
                      writeMessage.classList.remove('blurred0')}

                      if (currentUser.className.includes('blurred0')){
                        currentUser.classList.remove('blurred0')}

                        if (header.className.includes('blurred0')){
                          header.classList.remove('blurred0')}

                          if (container.className.includes('blurred0')){
                            container.classList.remove('blurred0')}

                            if (aside.className.includes('blurred0')){
                              aside.classList.remove('blurred0')}
                     }

                     function blur3(){
                     for (var i = 0; i < backmessage.length; i++) {
                       if (!backmessage[i].className.includes('blurred1')){
                         backmessage[i].classList.add('blurred1')}
                     }
                     for (var i = 0; i < bubbleContent.length; i++) {
                     if (!bubbleContent[i].className.includes('blurred0')){
                       bubbleContent[i].classList.add('blurred0')}
                     }

                        if (!backchat.className.includes('blurred2')){
                          backchat.classList.add('blurred2')}

                          if (!chat.className.includes('blurred3')){
                            chat.classList.add('blurred3')}

                              if (!writeMessage.className.includes('blurred0')){
                                writeMessage.classList.add('blurred0')}

                                if (!currentUser.className.includes('blurred0')){
                                  currentUser.classList.add('blurred0')}

                                  if (!header.className.includes('blurred0')){
                                    header.classList.add('blurred0')}

                                    if (!container.className.includes('blurred0')){
                                      container.classList.add('blurred0')}

                                      if
                                       (!aside.className.includes('blurred0')){
                                        aside.classList.add('blurred0')}
                               }

//      Nel bonus ho montato l'ora con mounted per cui posso fare f che se
// l'ultimo messaggio è di oggi compare la data,altrimenti compare il giorno
