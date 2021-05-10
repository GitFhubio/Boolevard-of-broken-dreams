<template>
  <div>
   <h4 v-on:click="$emit('answer')">{{risposta}}</h4>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
   risposta:String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
