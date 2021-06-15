<template>
  <v-sheet
    min-height="70vh"
    rounded="lg"
    class="pa-6"
    color="transparent"
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

          <v-col cols="12" md="4">
            <v-dialog v-model="dialog" persistent max-width="50%">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  width="100%"
                  height="60%"
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="white--text"
                  @click="loader = 'loading3'"
                >
                  Horario de trabajo
                  <v-icon right dark> mdi-clock-time-two </v-icon>
                </v-btn>
              </template>
              <v-card color="blue-grey darken-1" dark>
                <v-card-title>
                  <span class="text-h5">HORARIO DE TRABAJO</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-combobox
                          v-model="select"
                          :loading="loading"
                          :items="items"
                          cache-items
                          chips
                          class="mx-4"
                          flat
                          hide-no-data
                          hide-details
                          label="Seleccione los días"
                          solo-inverted
                          dark
                          multiple
                        ></v-combobox>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="6">
                        <v-dialog
                          ref="dialog"
                          v-model="startTimeDialog"
                          :return-value.sync="startTime"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="startTime"
                              label="Horario de comienzo"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="startTimeDialog"
                            v-model="startTime"
                            full-width
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="startTimeDialog = false"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(startTime)"
                            >
                              Guardar
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-dialog
                          ref="dialog"
                          v-model="endTimeDialog"
                          :return-value.sync="endTime"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="endTime"
                              label="Horario de fin"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="endTimeDialog"
                            v-model="endTime"
                            full-width
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="endTimeDialog = false"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(endTime)"
                            >
                              Guardar
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="6">
                        <v-checkbox
                          v-model="runningSchedule"
                          hide-details
                          class="shrink mt-4"
                          label="¿Horario de corrido?"
                        ></v-checkbox>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-dialog
                          ref="dialog"
                          v-model="restScheduleDialog"
                          :return-value.sync="restSchedule"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              :disabled="runningSchedule"
                              v-model="restSchedule"
                              label="Horario de descanso"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="restScheduleDialog"
                            v-model="restSchedule"
                            full-width
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="restScheduleDialog = false"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(restSchedule)"
                            >
                              Guardar
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-col>
                    </v-row>

                    <v-row>
                      <ScheduleComponent />
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="dialog = false"> Cerrar </v-btn>
                  <v-btn text @click="dialog = false"> Guardar </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
import ScheduleComponent from '../schedule/ScheduleComponent';

export default {
  name: 'RegistrationForm',

  components:{
    ScheduleComponent
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

<style>
</style>