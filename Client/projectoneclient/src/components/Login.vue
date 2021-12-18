<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-row>
                <v-col md="6">
                  <v-card-text class="mt-6 pb-0">
                    <v-form>
                      <v-text-field
                        width="150"
                        name="user"
                        label="Usuario"
                        type="text"
                        placehoder="Usuario"
                        prepend-icon="mdi-account"
                        solo
                      ></v-text-field>
                      <v-text-field
                        name="password"
                        label="Password"
                        type="password"
                        placehoder="Contraseña"
                        prepend-icon="mdi-lock"
                        append-icon="mdi-eye"
                        solo
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-col class="text-right">
                      <v-btn color="primary">Ingresar</v-btn>
                    </v-col>
                  </v-card-actions>
                </v-col>

                <v-col class="cardPanel">
                  <h1 class="white--text">Ingresar</h1>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String,
  },
};
</script>

<style scoped>
.cardPanel {
  background-color: #539e9e;
}
</style>