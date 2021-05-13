<template>
  <div id="app">
    <div id="nav">
      <div class="nav-content">
        <div class="nav-logo">
          <img src="./assets/logo.png" alt="" />
        </div>

        <div class="nav-search">
          <input id="search" type="text" placeholder="Cerca" />
        </div>
        <div class="nav-likeHomeUser">
          <i class="far fa-heart icon"></i>
          <i class="fas fa-home icon"></i>
          <div class="img-profile">
             <img src="./assets/profile.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    min-width: 350px;
    position: relative;
  }
  a{
    text-decoration:none;
  }
  ul{list-style:none;}
@import "scss/nav";
</style>
