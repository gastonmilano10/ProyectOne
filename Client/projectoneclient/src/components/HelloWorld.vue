<template>
  <v-container>
    <pruebaComponent/>
<!-- 
    <v-text-field
      v-model="mensajeFormulario"
      label="Sabela que si ANAHSE"
    ></v-text-field>

    <v-btn block @click="agregarLista">
      Agregar
    </v-btn>

    <v-btn block @click="obtenerMensaje">
      {{getMensaje}}
    </v-btn> -->
    <NubeDePalabras :mensaje="getMensaje"/>

  </v-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import pruebaComponent from './pruebaComponent';
  import NubeDePalabras from './NubeDePalabras';

  export default {
    name: 'HelloWorld',

    components: {
      pruebaComponent,
      NubeDePalabras
    },

    computed: {
      ...mapGetters(["getMensaje"])
    },

    created() {
      this.changeMensaje();             
    },

    methods: {
      ...mapActions(["changeMensaje", "addListaPrueba"]),
      
      agregarLista(){
        this.addListaPrueba(this.mensajeFormulario)
      },

      obtenerMensaje(){
        this.changeMensaje();
      }
    },

    data: () => ({
      mensajeFormulario: '',

      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
