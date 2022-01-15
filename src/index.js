import Vue from 'vue';
import App from './App.vue';
import router from './router';
import _ from 'lodash';

Vue.prototype._ = _;

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
});
