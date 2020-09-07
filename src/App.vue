<template>
  <div id="app" class="container mt-5">
    <h1>Drink Shop</h1>
    <p class="animated fadeInRight">Here are the deals</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    
    <!--  v-bind bind a variable to an attribute -->
    <img class="img-fluid" v-bind:src="image" v-bind:alt="name" />

    <h2>{{ name }}</h2>
    <p>{{ description }}</p>

    <!--  : works the same as v-bind -->
    <price :value="price"></price>
    <p></p>
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
  },
  data() {
    return {
      name: "Soda",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam consequuntur culpa aliquam excepturi sunt magni minima eos tempora aperiam. Temporibus, unde? Assumenda dolores et enim tempora dolorem eligendi aliquam!",
      image: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      price: 1
    }
  }
}

</script>