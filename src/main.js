import Vue from 'vue'
import App from './App.vue'
import {Button, Row, Tabs, TabPane, Table, TableColumn, Upload, Checkbox} from 'element-ui'


Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Upload.name, Upload)
Vue.component(Checkbox.name, Checkbox)


new Vue({
  render: h => h(App),
}).$mount('#app')
