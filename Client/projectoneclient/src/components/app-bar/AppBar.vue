<template>
  <v-card class="mx-auto overflow-hidden navigation">
    <v-app-bar
      color="white"
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-text-field
        prepend-inner-icon="mdi-magnify"
        placeholder="Buscar empresas"
        dense
        flat
        hide-details
        rounded
        solo
        color="blue-grey darken-1"
        clearable
        background-color="blue-grey lighten-5"
      ></v-text-field>

      <v-spacer></v-spacer>

      <UserButton />
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.navigation {
  height: 10vh;
  width: 100%;
}
</style>