<template>
  <v-main>
    <div class="text-center">
      <h1>Hey, welcome to the landing page.</h1>
    </div>
    <PricingComponent />
  </v-main>
</template>

<script>
import PricingComponent from '../components/PricingComponent.vue';
export default {
  name: 'Home',
  components: {
    PricingComponent,
  },
};
</script>
