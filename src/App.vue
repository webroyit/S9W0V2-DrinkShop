<template>
  <div id="app" class="container mt-5">
    <h1>Drink Shop</h1>
    <p class="animated fadeInRight">Here are the deals</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price value="9.99"></price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Price from './components/Price.vue'

export default {
  name: 'App',
  components: {
    FontAwesomeIcon,
    Price
  }
}
</script>