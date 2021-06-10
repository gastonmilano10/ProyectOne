<template>
  <v-container>
    <wordcloud
      :data="mensaje"
      nameKey="Category"
      valueKey="Amount"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler"
    >
    </wordcloud>
  </v-container>
</template>

<script>
//import {mapGetters, mapActions} from 'vuex';
import wordcloud from "vue-wordcloud";

export default {
  name: "NubeDePalabras",

  props: ["mensaje"],

  created() {
    //console.log(this.mensaje);
  },

  components: {
    wordcloud,
  },

  methods: {
    wordClickHandler(name, value, vm) {
      console.log("wordClickHandler", name, value, vm);
    },
  },

  data() {
    return {
      palabras: null,
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
    };
  },
};
</script>

<style>
</style>