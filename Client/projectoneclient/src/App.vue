<template>
  <v-app id="inspire">
    <v-app-bar app color="blue-grey darken-1">
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text color="white">
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            dark
          ></v-text-field>
        </v-responsive>
      </v-container>

      <UserButton />
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="xl" elevation="7">
              <v-list flat>
                <v-subheader>SERVICIOS</v-subheader>
                <v-list-item-group
                  v-model="selectedItem"
                  color="blue-grey darken-1"
                >
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
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-6"
              color="blue-grey darken-1"
              elevation="11"
            >
              <v-container>
                <v-form v-model="valid">
                  <v-row>
                    <v-col cols="12" md="5">
                      <v-text-field
                        placeholder="Empresa / Servicio"
                        append-icon="mdi-google-my-business"
                        v-model="empresa"
                        :rules="empresaRules"
                        :counter="15"
                        label="Empresa / Servicio"
                        required
                        color="blue-grey darken-1"
                        solo-inverted
                        dark
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="7">
                      <v-text-field
                        v-model="workMode"
                        :rules="workModeRules"
                        :counter="20"
                        label="Modo de trabajo"
                        required
                        solo-inverted
                        dark
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
                        label="Telefono de contacto"
                        required
                        solo-inverted
                        dark
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        append-icon="mdi-email"
                        v-model="email"
                        :rules="emailRules"
                        :counter="20"
                        label="Email"
                        required
                        solo-inverted
                        dark
                        color="blue-grey darken-1"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="2">
                      <v-checkbox
                        v-model="goToAdress"
                        hide-details
                        class="shrink mt-1"
                        label="¿Trabajo a domicilio?"
                        solo-inverted
                        dark
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox
                        v-model="local"
                        hide-details
                        class="shrink mt-1"
                        label="¿Se puede concurrir al local?"
                        solo-inverted
                        dark
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="12" md="7">
                      <v-row>
                        <v-col cols="12" md="1" sm="1">
                          <v-icon size="35" class="mt-3" solo-inverted dark
                            >mdi-map-marker-plus
                          </v-icon>
                        </v-col>

                        <v-col cols="12" md="11" sm="11">
                          <v-text-field
                            append-icon="mdi-adress"
                            v-model="adress"
                            :rules="adressRules"
                            :counter="15"
                            label="Dirección"
                            solo-inverted
                            dark
                            color="blue-grey darken-1"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="4">
                      <v-autocomplete
                        dark
                        label="Seleccione departamento/s"
                        solo-inverted
                      >
                      </v-autocomplete>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-autocomplete
                        dark
                        solo-inverted
                        label="Seleccione zonas de trabajo"
                      >
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
                            <v-icon right dark> mdi-cloud-upload </v-icon>
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
                            <v-btn text @click="dialog = false">
                              Guardar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import ScheduleComponent from './components/schedule/ScheduleComponent';
import { mapGetters, mapActions } from "vuex";
import UserButton from "./components/app-bar/UserButton";

//import NubeDePalabras from './components/NubeDePalabras';

export default {
  name: "App",

  components: {
    //HelloWorld,
    //NubeDePalabras
    UserButton,
    ScheduleComponent
  },

  computed: {
    ...mapGetters(["getMensaje"]),
  },

  // created() {
  //   this.changeMensaje();
  // },

  methods: {
    ...mapActions(["changeMensaje", "addListaPrueba"]),
  },

  data: () => ({
    //TIMEPICKERS
    startTimeDialog: false,
    startTime: null,
    endTimeDialog: false,
    endTime: null,
    restScheduleDialog: false,
    restSchedule: null,

    //CHECKBOX
    goToAdress: false,
    runningSchedule: false,

    //LINKS DE APP-BAR
    links: ["PRINCIPAL", "INFORMACION", "REGISTRO", "CONTACTO"],

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

    items: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],

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

<style scoped>
.vhover {
  -moz-user-focus: pointer;
}
</style>