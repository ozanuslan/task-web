<template>
  <v-main>
    <div class="text-center">
      <h1>Hey, welcome to the landing page.</h1>
    </div>
    <PricingComponent />
    <div class="text-center">
      <v-btn color="success" v-on:click="onSubmitClick">
        Click Here to Send Performed Events to DB
      </v-btn>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios';
import PricingComponent from '../components/PricingComponent.vue';
export default {
  name: 'Home',
  components: {
    PricingComponent,
  },
  methods: {
    onSubmitClick: async function () {
      let events = this.$store.state.events;
      const data = { events: events };
      await axios.post(
        'https://direcon-task-api.herokuapp.com/api/event',
        data
      );
      this.$store.state.events = [];
    },
  },
};
</script>
