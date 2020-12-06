<template>
  <div class="register d-flex justify-center">
    <v-card class="d-flex flex-column mt-10" elevation="10" width="30%">
      <v-form
        ref="form"
        class="d-flex flex-column"
        @submit.prevent="signUpUser"
      >
        <v-flex>
          <v-alert type="error" dismissible v-model="alert">
            {{ error }}
          </v-alert>
        </v-flex>
        <v-text-field
          class="ma-3 mb-n3"
          background-color="white"
          outlined
          color="accent"
          type="email"
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
          class="ma-3"
          background-color="white"
          outlined
          color="accent"
          :type="show ? 'text' : 'password'"
          label="Password"
          v-model="password"
          :rules="passwordRules"
          required
        ></v-text-field>

        <v-btn
          class="ma-3 mt-n3"
          x-large
          color="click"
          dark
          type="submit"
          :disabled="loading"
          >Sign Up</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      alert: false,
      show: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (!!v && v.length > 6) || "Password must be more than 6 characters"
      ]
    };
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    }
    // loggedListener: firebase.auth().onAuthStateChanged((firebaseUser) => {
    //   if (firebaseUser) {
    //     console.log(firebaseUser);
    //   } else {
    //     console.log("not logged in");
    //   }
    // }),
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true;
      }
    },
    alert(value) {
      if (!value) {
        this.$store.commit("setError", null);
      }
    }
  },
  methods: {
    signUpUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signUpUser", {
          email: this.email,
          password: this.password
        });
      }
    },
    signOutUser() {
      firebase.auth().signOut();
    }
  }
};
</script>
