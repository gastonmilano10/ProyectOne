<template>
  <v-app id="inspire">
    <div class="app-container">
      <v-card elevation="5" class="login-container pa-3">
        <v-container fluid class="text-center">
          <h1>Ingresar</h1>

          <v-form v-on:submit.prevent="login">
            <v-text-field
              class="mt-5"
              append-icon="mdi-account"
              label="Usuario / correo"
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

            <v-btn block color="primary" type="submit"> Ingresar </v-btn>
          </v-form>

          <h5 class="mt-5 mb-2">O ingresar con:</h5>

          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>

          <v-btn fab dark small color="error">
            <v-icon dark> mdi-google </v-icon>
          </v-btn>

          <h5 class="mt-5 mb-2">
            Si no tienes usuario, <a>REGISTRATE AQUI</a>
          </h5>
          <a>CONTINUAR SIN USUARIO</a>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import Axios from "axios";

export default {
  name: "Login",
  props: {
    source: String,
  },

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
    login() {
      let jsonLogin = {
        user: this.user,
        password: this.password,
      };

      Axios.post('https://localhost:5001/api/Users/Login', jsonLogin)
      .then(response => console.log(response))
      console.log(jsonLogin);
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}

.login-container {
  width: 60%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}
</style>