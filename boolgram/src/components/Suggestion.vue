<template>
      <ul class="list-users-suggested">
              <li class="user-suggested-li">
                <div class="suggested-user">
                  <div class="suggested-user-left">
                  <div class="container-imgUser-story">
                    <img :src="story.profile_picture" alt="" />
                  </div>
                  <h5 class="user-name-story">{{story.profile_name}}</h5>
                  </div>
                  <a href="#" class="change-account">Segui</a>
                </div>
              </li>
              </ul>
</template>

<script>
export default {
  name: 'Suggestion',
  props: {
 story:Object

  }
}
</script>

<style scoped lang="scss">
@import "../scss/suggestion";
</style>
