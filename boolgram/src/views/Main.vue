<template>
  <div class="main">
    <div class="wrapper-center">
      <div class="main-left">
        <div class="stories-box">
          <Story v-for="(story,index) in stories" :key="index" :story="story" />
        </div>
        <div class="posts-box">
       
    <Post v-for="(post,index) in posts" :key="index" :post="post" />

        </div>
      </div>
      <div class="main-right">
        <div class="main-right-wrapper">
          <div class="profile-info-userLogged">
            <div class="profile-info-userLogged-left"> 
            <div class="img-profile-userLogged">
              <img src="../assets/profile.jpg" alt="" />
            </div>
            <div class="user-name-box">
              <p class="user-name">Guiasco</p>
              <p class="real-name">Guia Scognamiglio</p>
            </div>
            </div>
            <a href="#" class="change-account">Passa a</a>
          </div>
          <div class="suggestions-box">
           <Suggestion v-for="(story,index) in stories" :key="index" :story="story"/>
          </div>
          <footer>
            <div class="footer-links">
              <ul class="link-ul">
                <li class="link-li">About</li>
              </ul>
            </div>
            <div class="copyright">
              &copy; 2021 BOOLGRAM FROM BOOLBOOK
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";
import Story from "@/components/Story.vue"
import Suggestion from "@/components/Suggestion.vue"
export default{
  name:"App",
  data:function(){
return{
  posts:[],
  stories:[],
}
  },
  components:{
    Post,
    Story,
    Suggestion
  },
  mounted:function(){
this.$http.get(this.$posts)
      .then((result) => {
        this.posts= result.data;
        console.log(this.posts);
  })
  this.$http.get(this.$stories)
      .then((result) => {
        this.stories= result.data;
        console.log(this.stories);
  })
  }
  }
  
</script>

<style lang="scss" scoped>
@import "../scss/main";
</style>
