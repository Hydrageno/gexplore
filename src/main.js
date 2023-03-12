import Vue from 'vue'
import App from './App.vue'
import {Button, Row, Tabs, TabPane} from 'element-ui'


Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)


new Vue({
  render: h => h(App),
}).$mount('#app')
