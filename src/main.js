import Vue from 'vue'
import App from './App.vue'
import {Button, Select} from 'element-ui'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

new Vue({
  render: h => h(App),
}).$mount('#app')
