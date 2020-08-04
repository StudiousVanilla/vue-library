import Vue from 'vue';
import AppComponent from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: (h) => h('app'),
});
