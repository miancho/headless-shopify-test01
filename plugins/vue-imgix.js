import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: 'pigeon-llcmyshopify.imgix.net',
    defaultIxParams: {
        auto: 'format,compress'
    },
});