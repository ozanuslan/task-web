<template>
  <v-card
    :elevation="hover ? 16 : 2"
    :class="{ 'on-hover': hover }"
    color="#ffd24f"
    class="mx-auto my-12"
    max-width="370"
    v-on:mouseenter="mouseEnter"
    v-on:mouseleave="mouseLeave"
  >
    <v-card-title class="justify-center">
      <h5>One-Time Purchase</h5>
    </v-card-title>

    <v-card-title class="justify-center">
      <h1>$100</h1>
    </v-card-title>

    <v-card-text class="mx-auto justift-right">
      <v-divider class="mx-4"></v-divider>
      <div v-for="text in texts" :key="text" class="text-center">
        <h5>{{ text }}</h5>
        <v-divider class="mx-4"></v-divider>
      </div>
      <div
        v-for="event in this.$store.stateevents"
        :key="event"
        class="text-center"
      >
        <h5>{{ event }}</h5>
        <v-divider class="mx-4"></v-divider>
      </div>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn block rounded v-on:click="onPricingClick">
        Fetch All Events => Check Console
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PricingComponent',
  data() {
    return {
      hover: false,
      texts: [
        'Find out how your room performs',
        'Get to know your audience',
        'Level up your marketing campaigns',
        'Compare your club with others on your field',
      ],
    };
  },
  methods: {
    mouseEnter: function () {
      this.hover = true;
      const state = this.$store.state;
      if (this.$store.state.session_id !== null) {
        state.events.push({
          session_id: state.session_id,
          email: state.email,
          event: 'hover',
        });
      }
    },
    mouseLeave: function () {
      this.hover = false;
    },
    onPricingClick: async function () {
      console.log(
        await axios.get('https://direcon-task-api.herokuapp.com/api/event/all')
      );
    },
  },
};
</script>
