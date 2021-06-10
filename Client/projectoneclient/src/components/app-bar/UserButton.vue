<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
         v-bind="attrs"
          v-on="on"
            class="hidden-sm-and-down"
            color="grey"
            size="32"
        ></v-avatar>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Matias Basso</v-list-item-title>
              <v-list-item-subtitle>Cliente</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'purple--text' : ''"
                icon
                @click="fav = !fav" 
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
                <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-title>matiasbasso@gmail.com</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
                <v-icon>mdi-phone</v-icon>
            </v-list-item-action>
            <v-list-item-title>099123987</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="menu = false"
          >
            Registrarse
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: 'UserButton',
    
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),
}
</script>

<style>

</style>