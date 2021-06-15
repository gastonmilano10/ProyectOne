<template>
  <v-app-bar app color="white">
    <v-container class="py-0 fill-height">
      <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
        <v-btn
          v-for="link in links"
          :key="link"
          text
          color="blue-grey darken-1"
        >
          {{ link }}
        </v-btn>
      </v-btn-toggle>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          placeholder="Buscar servicios"
          dense
          flat
          hide-details
          rounded
          solo
          color="blue-grey darken-1"
          clearable
          background-color="blue-grey lighten-5"
        ></v-text-field>
      </v-responsive>
    </v-container>

    <UserButton />
  </v-app-bar>
</template>

<script>
import UserButton from "./UserButton";

export default {
  name: "AppBar",

  components: {
    UserButton,
  },

  data: () => ({
    //LINKS DE APP-BAR
    links: ["PRINCIPAL", "INFORMACION", "REGISTRAR SERVICIO", "CONTACTO"],
  }),
};
</script>

<style>
</style>