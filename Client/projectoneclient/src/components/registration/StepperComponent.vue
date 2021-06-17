<template>
  <v-stepper v-model="e6" vertical elevation="10">
    <v-stepper-step :complete="e6 > 1" step="1" editable>
      PASO 1: Información principal
      <small>Complete la con la información principal del servicio.</small>
      <small>Al pararse en el boton "Siguiente" se indican los camposobligatiorios.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <RegistrationForm />
      <v-btn color="primary" @click="e6 = 2"> Siguiente </v-btn>
      <v-btn text> Limpiar datos </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" editable>
      PASO 2: Horario de trabajo
      <small>Agregar información sobre los horarios en los que brinda el servicio.</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <ScheduleSettingsComponent />
      <v-btn color="primary" @click="e6 = 3"> Siguiente </v-btn>
      <v-btn text> Limpiar datos </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" editable>
      PASO 3: Ubicación
      <small>Agregar ubicación en el mapa e ingresar dirección si asi lo desea.</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-btn color="primary" @click="e6 = 4" editable> Siguiente </v-btn>
      <v-btn text> Limpiar Datos </v-btn>
    </v-stepper-content>

  </v-stepper>
</template>

<script>
import RegistrationForm from "../registration/RegistrationForm";
import ScheduleSettingsComponent from "../schedule/ScheduleSettingsComponent";

export default {
    name: 'StepperComponent',

    components: {
        RegistrationForm,
        ScheduleSettingsComponent
    },

    data: () => ({
        e6: 1,
    }),
};
</script>

<style>
</style>