import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import CustomTheme from '@/app/Arch/Theme';


Vue.use(Vuetify, {
  theme: CustomTheme,
  customProperties: true,
  iconfont: 'md',
});
