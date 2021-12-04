<template>
  <v-sheet
    rounded="lg"
    class="pa-6 mb-7 backgroundStyle2"
  >
    <v-container>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" md="5">
            <v-text-field
              color="blue-grey darken-1"
              placeholder="Empresa / Servicio"
              v-model="empresa"
              :rules="empresaRules"
              :counter="15"
              solo-inverted
              dark
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="7">
            <v-text-field
              v-model="workMode"
              :rules="workModeRules"
              :counter="20"
              placeholder="Modo de trabajo"
              required
              solo-inverted
              dark
              clearable
              color="blue-grey darken-1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              color="blue-grey darken-1"
              append-icon="mdi-phone"
              v-model="phone"
              :rules="phoneRules"
              :counter="15"
              placeholder="Telefono de contacto"
              required
              solo-inverted
              dark
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              append-icon="mdi-email"
              v-model="email"
              :rules="emailRules"
              :counter="20"
              placeholder="Email"
              required
              solo-inverted
              dark
              clearable
              color="blue-grey darken-1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3">
            <v-btn
              width="100%"
              height="60%"
              color="blue-grey"
              class="white--text"
              @click="loader = 'loading3'"
            >
              Mapa
              <v-icon right dark> mdi-google-maps </v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" md="9">
            <v-text-field
              append-icon="mdi-adress"
              v-model="adress"
              :rules="adressRules"
              :counter="15"
              placeholder="Dirección"
              solo-inverted
              dark
              clearable
              color="blue-grey darken-1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-autocomplete 
              placeholder="Departamentos" 
              solo-inverted
              dark 
              clearable>
            </v-autocomplete>
          </v-col>

          <v-col cols="12" md="4">
            <v-autocomplete 
              solo-inverted
              dark 
              clearable 
              placeholder="Zonas">
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>

export default {
  name: 'RegistrationForm',

  components:{
  },

  data: () => ({
    //FORM
    valid: false,
    empresa: "",
    servicio: "",
    email: "",

    //REGLAS DE VALIDACION
    empresaRules: [
      (v) => !!v || "Nombre de la Empresa es requerido",
      (v) =>
        v.length <= 10 ||
        "Nombre de la empresa debe tener 10 caracteres como maximo",
    ],
    servicioRules: [
      (v) => !!v || "El servicio es requerido",
      (v) =>
        v.length <= 15 || "El servicio debe tener 15 caracteres como maximo",
    ],
    adressRules: [
      (v) => !!v || "El servicio es requerido",
      (v) =>
        v.length <= 15 || "El servicio debe tener 15 caracteres como maximo",
    ],
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+/.test(v) || "E-mail ingresado es incorrecto",
    ],

    dialog: false,
  })
};
</script>

<style scoped>
.backgroundStyle2 {
  /* background: #355C7D;  
  background: -webkit-linear-gradient(to right, #4d2e36, #4d4158, #29465f);  
  background: linear-gradient(to right, #4d2e36, #4d4158, #29465f);  */
  background: #141E30;  
  background: -webkit-linear-gradient(to right, #243B55, #141E30);
  background: linear-gradient(to right, #243B55, #141E30);
}
</style>