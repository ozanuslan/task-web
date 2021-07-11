<template>
  <v-container fluid>
    <v-card
      elevation="2"
      id="register"
      class="mx-auto ma-12 pa-6"
      max-width="600"
    >
      <v-form v-model="valid">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          v-on:click="register"
        >
          Register
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || 'Invalid e-mail.';
        },
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length > 3 || 'Password must be more than 3 characters',
        (v) => v.length <= 32 || 'Password must be less than 32 characters',
      ],
    };
  },
  methods: {
    register: async function () {
      try {
        const obj = {
          email: this.email,
          password: this.password,
        };
        await axios
          .post('https://direcon-task-api.herokuapp.com/api/register', obj)
          .catch(() => {
            return;
          });
        this.$store.state.email = this.email;
        this.$store.state.password = this.password;

        const patchObj = {
          session_id: this.$store.state.session_id,
          email: this.$store.state.email,
          password: this.$store.state.password,
        };

        console.log("Claimer's info = ", patchObj);
        await axios
          .patch('https://direcon-task-api.herokuapp.com/api/event', patchObj)
          .catch((error) => {
            console.log(error);
          });
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
