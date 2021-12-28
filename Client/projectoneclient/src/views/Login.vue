<template>
  <v-app id="inspire">
    <div class="app-container">
      <v-card elevation="5" class="login-container pa-3">
        <v-container fluid class="text-center">
          <h1>Ingresar</h1>

          <v-form v-on:submit.prevent="doLogin">
            <v-text-field
              class="mt-5"
              append-icon="mdi-account"
              label="Usuario / Correo"
              solo
              v-model="user"
            ></v-text-field>

            <v-text-field
              class="mt-n5"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Contraseña"
              @click:append="show1 = !show1"
              solo
              v-model="password"
            ></v-text-field>

            <v-btn block color="primary" type="submit" :disabled="invalid"> Ingresar </v-btn>
          </v-form>

          <h5 class="mt-5 mb-2">O ingresar con:</h5>

          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>

          <v-btn fab dark small color="error">
            <v-icon dark> mdi-google </v-icon>
          </v-btn>

          <h5 class="mt-5 mb-2">
            Si no tienes usuario, <router-link to='/user-registration'>REGISTRATE AQUI</router-link>
          </h5>
          <router-link to='/home'>CONTINUAR SIN USUARIO</router-link>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Login",

  data() {
    return {
      show1: false,
      user: "",
      password: "",
      error: false,
      error_msj: false,
    };
  },

  methods: {
    ...mapActions(["login"]),

    doLogin() {
      let jsonLogin = {
        username: this.user,
        password: this.password,
      };

      this.login(jsonLogin)
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 80%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}
</style>