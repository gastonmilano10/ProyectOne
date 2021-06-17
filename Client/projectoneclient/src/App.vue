<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="backgroundStyle">
      <v-container>
        <v-row>
          <v-col cols="3">
            <ServicesList />
          </v-col>

          <v-col>
            <StepperComponent/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ServicesList from "./components/registration/SevicesList";
import StepperComponent from "./components/registration/StepperComponent"
import AppBar from "./components/app-bar/AppBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    AppBar,
    ServicesList,
    StepperComponent
  },

  computed: {
    ...mapGetters(["getMensaje"]),
  },

  methods: {
    ...mapActions(["changeMensaje", "addListaPrueba"]),
  },

  data: () => ({
    e6: 1,
  }),
};
</script>

<style scoped>

.backgroundStyle {
  background: #355C7D;  
  background: -webkit-linear-gradient(to right, #4d2e36, #4d4158, #29465f);  
  background: linear-gradient(to right, #4d2e36, #4d4158, #29465f); 
  /* background: #141E30;
  background: -webkit-linear-gradient(to right, #243B55, #141E30);
  background: linear-gradient(to right, #243B55, #141E30); */
}

</style>