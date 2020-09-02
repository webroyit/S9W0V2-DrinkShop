import Vue from 'vue'
import App from './App.vue'
import "bootstrap"      // for javascript
import { library } from "@fortawesome/fontawesome-svg-core"

import "bootstrap/dist/css/bootstrap.css"
import "animate.css/animate.css"

// Get icons from fortawesome
import {
  faShoppingCart,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
