<template>
  <v-app id="inspire">
    <AppBar />
    <v-main style="background: #1d4350; background: -webkit-linear-gradient(to bottom, #1d4350, #a43931); background: linear-gradient(to bottom, #1d4350, #a43931); ">
      <v-container >
        <v-row>
          <v-col cols="3">
            <ServicesList />
          </v-col>

          <v-col>
            <RegistrationForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ServicesList from "./components/registration/SevicesList";
import RegistrationForm from "./components/registration/RegistrationForm.vue";
import AppBar from "./components/app-bar/AppBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    AppBar,
    RegistrationForm,
    ServicesList,
  },

  computed: {
    ...mapGetters(["getMensaje"]),
  },

  methods: {
    ...mapActions(["changeMensaje", "addListaPrueba"]),
  },

  data: () => ({
  }),
};
</script>