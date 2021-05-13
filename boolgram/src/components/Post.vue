<template>
  <div class="post">
      <div class="post-author-box">
        <div class="post-userData">
          <div class="post-userImage">
            <img :src="post.profile_picture" alt="">
          </div>
          <h5>{{post.profile_fullname}}</h5>
        </div>
        <div class="menu-post">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div class="post-img-box">
        <img :src="post.post_image" alt="">
      </div>
      <div class="like-message-box">
        <div class="icon-like-msg">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div class="like-users">
          <div class="img-user-like">
            <img :src="post.profile_picture" alt="">
          </div>
          <div class="all-likes">
            Piace a 
            <strong>{{post.likes[0].username}}</strong>
            <span v-if="post.likes.length>1">
            e 
            <a href="#">
              <strong> altri {{post.likes.length - 1}} </strong>
            </a>
            </span>
          </div>
        </div>
        <div class="post-description">
         <strong>{{post.profile_name}}</strong> <span>{{post.post_text}}</span>
        </div>
      </div>
      <div class="comments-box">
          <div class="last-comment">
            <div v-for="(comment,index) in post.comments" :key="index">
              <p v-if="index<=2">
              <strong>{{comment.username}}</strong>
             {{comment.text}}
             </p>
            </div>
          </div>
          <a class="all-comments" href="#" >
            Visualizza tutti e {{post.comments.length}} commenti
          </a>
      </div>
      <div class="date">
        {{post.date.date}}
      </div>
      <div class="write-comment-box">
        <textarea type="text" placeholder="Aggiungi un commento">
        </textarea>  
        <button type="submit"> Pubblica</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
 post:Object,

  }
}
</script>
<style scoped lang="scss">
@import "../scss/post";
</style>
