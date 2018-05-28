import Vue from 'vue';
import i18nPlugin from 'vue-i18n-light';
import ejs from 'ejs';

Vue.use(i18nPlugin, {
  templating: {
    engine: ejs.compile,
  },
});

import component1 from './components/component1/component1';
component1({ Vue });

new Vue({
  el: '#app',
});
