<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="65">
          <v-icon color="white" size="50">mdi-account</v-icon>
        </v-avatar>

        <div>Enzo Milano</div>
          <v-btn dark x-small color="red darken-2">
           Cerrar sesion
          </v-btn>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-group
          class="text-left"
          v-for="category in categories"
          :key="category.title"
          v-model="category.active"
          :prepend-icon="category.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="category.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in category.items" :key="child.title">
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-list
        class="text-left mt-n4"
        v-for="category in categories"
        :key="category.title"
        v-model="category.active"
        :prepend-icon="category.icon"
        no-action
      >
        <v-list-item-group color="primary">
          <v-list-item v-for="link in links" :key="link.title">
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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
    </v-app-bar>

    <v-main class="mt-5">
      <v-card class="mx-auto" max-width="400" elevation="5">
        <v-list-item three-line class="text-left">
          <v-list-item-content>
            <div class="text-overline mb-4 category-title">PELUQUERIA</div>

            <v-list-item-title class="text-h5 mb-1">
              CORTE ESTILO
            </v-list-item-title>

            <v-list-item-subtitle class="mt-2">
              <v-icon size="20"> mdi-phone</v-icon>
              098987236
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              <v-icon size="20"> mdi-email</v-icon>
              peluqueriacut@gmail.com
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              <v-icon size="20"> mdi-map-marker</v-icon>
              Bulervar y avenida salto
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="70" outlined>
            <v-icon size="50">mdi-hair-dryer</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn rounded small> Ver detalles </v-btn>

          <v-spacer></v-spacer>

          <v-btn fab dark x-small color="success">
            <v-icon dark> mdi-whatsapp </v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>{{
              showDetails ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    drawer: null,
    showDetails: false,

    links: [
      { icon: "mdi-plus-circle", title: "Nuevo servicio" },
      { icon: "mdi-send", title: "Send" },
      { icon: "mdi-delete", title: "Trash" },
      { icon: "mdi-alert-octagon", title: "Spam" },
    ],

    categories: [
      {
        icon: "mdi-shape",
        items: [
          { title: "Peluqueria" },
          { title: "Camioneros" },
          { title: "Desarrollador" },
          { title: "Supermercado" },
          { title: "Fletes" },
        ],
        title: "Categorias",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.category-title {
  color: orange;
}
</style>

