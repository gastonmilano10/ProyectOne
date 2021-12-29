<template>
  <v-app id="inspire">
    <div class="app-container">
      <v-card elevation="5" class="login-container pa-3">
        <v-container fluid class="text-center">
          <h1>Ingresar</h1>

          <v-form
            ref="loginForm"
            v-model="isLoginValid"
            v-on:submit.prevent="doLogin"
          >
            <v-text-field
              class="mt-5"
              append-icon="mdi-account"
              label="Usuario / Correo"
              solo
              :counter="15"
              v-model="username"
              :rules="usernameRules"
            ></v-text-field>

            <v-text-field
              class="mt-n1"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="Contraseña"
              @click:append="showPassword = !showPassword"
              solo
              :counter="20"
              v-model="password"
              :rules="passwordRules"
            ></v-text-field>

            <v-btn
              block
              color="primary"
              type="submit"
              :disabled="!isLoginValid"
              @click="validateLogin"
            >
              Ingresar
            </v-btn>
          </v-form>

          <h5 class="mt-5 mb-2">O ingresar con:</h5>

          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>

          <v-btn fab dark small color="error">
            <v-icon dark> mdi-google </v-icon>
          </v-btn>

          <h5 class="mt-5 mb-2">
            Si no tienes usuario,
            <router-link to="/user-registration">REGISTRATE AQUI</router-link>
          </h5>
          <router-link to="/home">CONTINUAR SIN USUARIO</router-link>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      showPassword: false,
      isLoginValid: true,
      error: false,
      error_msj: false,
      
      username: "",
      password: "",

      usernameRules: [
        (v) => !!v || "El usuario es requerido",
        (v) =>
          v.length <= 15 || "El usuario debe contener menos de 15 caracteres",
      ],

      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          v.length <= 20 ||
          "La contraseña debe contener menos de 20 caracteres",
      ],
    };
  },

  methods: {
    ...mapActions(["login"]),

    validateLogin() {
      this.$refs.loginForm.validate();
    },

    doLogin() {
      let jsonLogin = {
        username: this.username,
        password: this.password,
      };

      this.login(jsonLogin);
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