<template>
  <v-card class="backgroundStyle3 pa-6 mb-7">
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
              hide-no-data
              hide-details
              label="Seleccione los días"
              solo-inverted
              dark
              multiple
              class="mb-6"
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
                  readonly
                  solo-inverted
                  dark
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
                <v-btn text color="primary" @click="startTimeDialog = false">
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
                  readonly
                  solo-inverted
                  dark
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="endTimeDialog" v-model="endTime" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="endTimeDialog = false">
                  Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(endTime)">
                  Guardar
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-checkbox
              v-model="runningSchedule"
              hide-details
              class="shrink mt-4"
              label="¿Horario de corrido?"
              solo-inverted
              dark
            ></v-checkbox>
          </v-col>

          <v-col cols="12" md="8">
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
                  readonly
                  solo-inverted
                  dark
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
                <v-btn text color="primary" @click="restScheduleDialog = false">
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
    </v-card-actions>
  </v-card>
</template>

<script>
import ScheduleComponent from './ScheduleComponent.vue'
export default {
  name: 'ScheduleSettingsComponent',

  components: {
    ScheduleComponent
  }
};
</script>

<style scoped>
.backgroundStyle3 {
  /* background: #355C7D;  
  background: -webkit-linear-gradient(to right, #4d2e36, #4d4158, #29465f);  
  background: linear-gradient(to right, #4d2e36, #4d4158, #29465f);  */
  background: #141E30 !important;  
  background: -webkit-linear-gradient(to right, #243B55, #141E30) !important;
  background: linear-gradient(to right, #243B55, #141E30) !important;
}
</style>