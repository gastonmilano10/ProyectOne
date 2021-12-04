<template>
  <v-stepper v-model="e6" vertical elevation="10">
    <!-- STEP 1 -->
    <v-stepper-step :complete="e6 > 1" step="1" editable>
      PASO 1: Información principal
      <small>Complete la con la información principal del servicio.</small>
      <small
        >Al pararse en el boton "Siguiente" se indican los
        camposobligatiorios.</small
      >
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-sheet rounded="lg" class="pa-6 mb-7 backgroundStyle2">
        <v-container>
          <v-form v-model="validarPaso1" ref="formPaso1">
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
                  clearable
                  :items = "listaDepartamentos"
                >
                </v-autocomplete>
              </v-col>

              <v-col cols="12" md="4">
                <v-autocomplete
                  solo-inverted
                  dark
                  clearable
                  placeholder="Zonas"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-sheet>
      <v-btn color="primary" @click="e6 = 2" :disabled="!validarPaso1"> Siguiente </v-btn>
      <v-btn text @click="resetPaso1()"> Limpiar datos </v-btn>
    </v-stepper-content>

  <!-- STEP 2 -->
    <v-stepper-step :complete="e6 > 2" step="2" editable>
      PASO 2: Horario de trabajo
      <small
        >Agregar información sobre los horarios en los que brinda el
        servicio.</small
      >
    </v-stepper-step>
    <v-stepper-content step="2">
      <ScheduleSettingsComponent />
      <v-btn color="primary" @click="e6 = 3" :disabled="!validarPaso2"> Siguiente </v-btn>
      <v-btn text> Limpiar datos </v-btn>
    </v-stepper-content>

    <!-- STEP 3 -->
    <v-stepper-step :complete="e6 > 3" step="3" editable>
      PASO 3: Ubicación
      <small
        >Agregar ubicación en el mapa e ingresar dirección si asi lo
        desea.</small
      >
    </v-stepper-step>
    <v-stepper-content step="3">
      <v-btn color="primary" @click="e6 = 4" editable :disabled="!validarPaso3"> Siguiente </v-btn>
      <v-btn text> Limpiar Datos </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import ScheduleSettingsComponent from "../schedule/ScheduleSettingsComponent";

export default {
  name: "StepperComponent",

  components: {
    ScheduleSettingsComponent,
  },

  data: () => ({
    e6: 1,
    dialog: false,

    listaDepartamentos: ['Paysandu', 'Salto', 'Rio Negro', 'Colonia'],

    //FORMS
    validarPaso1: false,
    validarPaso2: false,
    validarPaso3: false,
    empresa: "",
    servicio: "",
    email: "",
    adress: "",
    phone: "",
    workMode: "",

    //REGLAS DE VALIDACION
    empresaRules: [
      (v) => !!v || "Nombre de la Empresa es requerido",
      (v) =>
        v.length <= 10 ||
        "Nombre de la empresa debe tener 10 caracteres como maximo",
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
  }),

  methods: {
      validate () {
        this.$refs.form.validate()
      },
      resetPaso1 () {
        this.$refs.formPaso1.reset()
      },
      resetPaso2 () {
        this.$refs.formPaso2.reset()
      },
      resetPaso3 () {
        this.$refs.formPaso3.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  },
};
</script>

<style scoped>
.backgroundStyle2 {
  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);
}
</style>