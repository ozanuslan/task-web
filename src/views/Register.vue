<template>
  <v-container fluid>
    <v-card
      elevation="2"
      id="register"
      class="mx-auto ma-12 pa-6"
      max-width="600"
    >
      <v-form v-model="isValid">
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

        <v-btn color="success" type="submit">Register</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      isValid: false,
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
        (v) => v.length <= 16 || 'Password must be less than 16 characters',
      ],
    };
  },
  methods: {},
};
</script>
