<template>
  <v-sheet rounded="lg" elevation="7">
    <v-list flat rounded="lg">
      <v-subheader>SERVICIOS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="#1C2833">
        <v-list-item v-for="(item, i) in items2" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "SevicesList",

  data: () => ({
    selectedItem: 1,

    items2: [
      { text: "Acompañantes", icon: "mdi-account-supervisor-circle" },
      { text: "Hogar", icon: "mdi-home-assistant" },
      { text: "Envios", icon: "mdi-cube-send" },
      { text: "Mascotas", icon: "mdi-dog-service" },
      { text: "Profesionales", icon: "mdi-professional-hexagon" },
      { text: "Salud & Belleza", icon: "mdi-account-heart-outline" },
      { text: "Vigilancia", icon: "mdi-alarm-light" },
      { text: "Fitness", icon: "mdi-arm-flex-outline" },
      { text: "Seguros", icon: "mdi-security-network" },
      { text: "Otros", icon: "mdi-flag" },
    ],
  }),
};
</script>

<style>
</style>