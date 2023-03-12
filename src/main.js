import Vue from 'vue'
import App from './App.vue'
import {Button, Row} from 'element-ui'


Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)


new Vue({
  render: h => h(App),
}).$mount('#app')
