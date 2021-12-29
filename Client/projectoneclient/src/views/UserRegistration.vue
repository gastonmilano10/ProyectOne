<template>
  <v-app id="inspire">
    <div class="app-container">
      <v-card elevation="5" class="login-container pa-3">
        <v-container fluid class="text-center">
          <h1>Registrar nuevo usuario</h1>

          <v-form
            ref="registrationForm"
            v-model="isRegistrationValid"
            v-on:submit.prevent="doRegistration"
          >
            <v-text-field
              class="mt-5"
              label="Nombre"
              solo
              v-model="name"
              :rules="nameRules"
              :counter="15"
            ></v-text-field>

            <v-text-field
              class="mt-n1"
              label="Apellido"
              solo
              v-model="surname"
              :rules="surnameRules"
              :counter="15"
            ></v-text-field>

            <v-text-field
              class="mt-n1"
              append-icon="mdi-phone"
              label="Telefono / Celular"
              solo
              v-model="phone"
              :rules="phoneRules"
              :counter="15"
            ></v-text-field>

            <v-text-field
              class="mt-n1"
              append-icon="mdi-email"
              label="Correo electronico"
              solo
              v-model="email"
              :rules="emailRules"
            ></v-text-field>

            <v-divider></v-divider>

            <v-text-field
              class="mt-6"
              append-icon="mdi-account"
              label="Usuario"
              solo
              v-model="username"
              :rules="usernameRules"
              :counter="15"
            ></v-text-field>

            <v-text-field
              class="mt-n1"
              :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword1 ? 'text' : 'password'"
              label="Contraseña"
              @click:append="showPassword1 = !showPassword1"
              solo
              v-model="password1"
              :rules="password1Rules"
              :counter="20"
            ></v-text-field>

            <v-text-field
              class="mt-n1"
              :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword2 ? 'text' : 'password'"
              label="Repetir contraseña"
              @click:append="showPassword2 = !showPassword2"
              solo
              v-model="password2"
              :rules="password2Rules"
              :counter="20"
            ></v-text-field>

            <v-divider></v-divider>

            <v-btn
              block
              color="primary"
              :disabled="!isRegistrationValid"
              @click="validateRegistration"
              type="submit"
            >
              Registrar
            </v-btn>
          </v-form>

          <h5 class="mt-5 mb-2">O registrarse con:</h5>

          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>

          <v-btn fab dark small color="error">
            <v-icon dark> mdi-google </v-icon>
          </v-btn>

          <h5 class="mt-5 mb-2">
            Si ya tienes usuario,
            <router-link to="/">INGRESAR AQUI</router-link>
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
  name: "UserRegistration",

  data() {
    return {
      showPassword1: false,
      showPassword2: false,
      error: false,
      error_msj: false,
      isRegistrationValid: true,

      name: "",
      surname: "",
      phone: "",
      username: "",
      password1: "",
      password2: "",
      email: "",

      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) =>
          v.length <= 15 || "El nombre debe contener menos de 15 caracteres",
      ],
      surnameRules: [
        (v) => !!v || "El apellido es requerido",
        (v) =>
          v.length <= 15 || "El apellido debe contener menos de 15 caracteres",
      ],
      phoneRules: [
        (v) =>
          v.length <= 15 || "El telefono debe contener menos de 15 caracteres",
      ],
      usernameRules: [
        (v) => !!v || "El usuario es requerido",
        (v) =>
          v.length <= 15 || "El apellido debe contener menos de 15 caracteres",
      ],
      password1Rules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          v.length <= 20 ||
          "La contraseña debe contener menos de 20 caracteres",
      ],
      password2Rules: [
        (v) => !!v || "Repetir contraseña",
        (v) =>
          v.length <= 20 ||
          "La contraseña debe contener menos de 20 caracteres",
        (v) => v == this.password1 || "Las contraseñas no coinciden",
      ],
      emailRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+/.test(v) || "El e-mail deber ser valido",
      ],
    };
  },

  methods: {
    ...mapActions(["userRegistration"]),

    validateRegistration() {
      this.$refs.registrationForm.validate();
    },

    doRegistration() {
      let jsonRegistration = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        username: this.username,
        password: this.password1,
      };

      this.userRegistration(jsonRegistration);
    },
  },
};
</script>

<style scoped>
.registration-container {
  width: 80%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}
</style>