Vue.config.devtools = true;

import mApplication from '../vue/m-application.vue';
import Lang from './lang';

let lang = new Lang();

window.document.title = lang.translate('title');

Vue.directive('lang', {
    inserted: function (el, binding) {
        el.innerHTML = lang.translate(binding.value);
    }
});
Vue.directive('lang-children', {
    inserted: function (el, binding) {
        el.children[0].innerHTML = lang.translate(binding.value);
    }
});

new Vue({
    el: '#app',
    components: {mApplication},
    data() {
        return {
            current: 'home'
        }
    }
});