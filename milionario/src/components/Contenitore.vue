<template>
  <div>
    <div v-if="vittoria == false">
      <Domanda :domanda="array[level].domanda"></Domanda>
      <Risposta
        :style="
          rispostaConcorrente == risposta
            ? { 'background-color': answerColor }
            : ''
        "
        v-on:answer="competitorChoice(risposta, level)"
        v-for="(risposta, index) in array[level].risposte"
        :key="index"
        :risposta="risposta"
      />
    </div>
    <div v-else><p>Hai vinto</p></div>
  </div>
</template>

<script>
import Domanda from "./Domanda.vue";
import Risposta from "./Risposta.vue";

export default {
  name: "",
  props: {},
  data: function() {
    return {
      rispostaConcorrente: "",
      level: 0,
      vittoria: false,
      answerColor: "white",
      array: [
        {
          domanda: "Quale è la capitale dell' Italia?",
          risposte: ["Milano", "Roma", "Torino", "Livorno"],
          rispostaesatta: "Roma",
        },
        {
          domanda: "Quale è la capitale della Francia?",
          risposte: ["Valencia", "Parigi", "Londra", "Tokyo"],
          rispostaesatta: "Parigi",
        },
      ],
    };
  },
  components: {
    Domanda,
    Risposta,
  },
  mounted: function() {
    // this.randomIndex= Math.floor(Math.random() * this.array.length)
    // console.log(this.array.length);
  },
  methods: {
    competitorChoice(risposta, level) {
      let that = this;
      that.rispostaConcorrente = risposta;
      if (risposta == that.array[level].rispostaesatta) {
        setTimeout(function() {
          that.answerColor = "green";
        }, 3000);
        setTimeout(function() {
          that.newQuestion();
        }, 5000);
      } else {
        setTimeout(function() {
          that.answerColor = "red";
        }, 3000);
        setTimeout(function() {
          location.reload();
        }, 5000);
      }
    },
    newQuestion() {
      if (this.level == this.array.length - 1) {
        this.vittoria = true;
      } else {
        this.level++;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
