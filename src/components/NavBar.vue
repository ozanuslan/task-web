<template>
  <div>
    <v-app-bar color="accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-btn style="text-transform: none" to="/"
        ><v-toolbar-title>👏 Direcon</v-toolbar-title></v-btn
      >

      <v-spacer></v-spacer>

      <div class="mx-auto">
        <v-btn
          class="mr-3"
          color="orange"
          elevation="2"
          v-on:click="onPricingClick"
          to="/"
        >
          Pricing <v-icon>mdi-cash</v-icon>
        </v-btn>
        <v-btn to="/register" color="primary" elevation="2">
          Register <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: 'NavBar',
  methods: {
    onPricingClick: function () {
      console.log('Pricing clicked!');
    },
  },
};
</script>
