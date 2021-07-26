import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  mounted() {
    this.retrieveSessionId();
  },
  methods: {
    async retrieveSessionId() {
      const res = await axios.get(
        'https://direcon-task-api.herokuapp.com/api/session'
      );
      this.$store.state.session_id = res.data.session_id;
      console.log('Session id: ' + res.data.session_id);
    },
  },
}).$mount('#app');
