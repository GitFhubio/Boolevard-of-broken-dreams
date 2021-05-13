<template>
   <div class="story-container">
            <div class="container-imgUser-story">
              <img :src="story.profile_picture" alt="" />
            </div>
            <h5 class="user-name-story">{{story.profile_name}}</h5>
          </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
 story:Object

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/story";
</style>
