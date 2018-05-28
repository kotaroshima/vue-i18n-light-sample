import i18n from 'i18n/component1';
import template from './component1.html';

export default ({ Vue }) => {
  Vue.component('component1', {
    i18n,
    data() {
      return {
        name: 'Luke Skywalker',
      };
    },
    methods: {
      lazyLoad() {
        import(/* webpackChunkName: "component2" */ '../component2/component2')
          .then((module) => {
            const Comp2Clazz = Vue.extend(module.default);
            new Comp2Clazz({}).$mount('#component2-slot');
          });
      },
    },
    template,
  });
};
