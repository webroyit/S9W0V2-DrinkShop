<template>
  <div id="app" class="container mt-5">
    <h1>Drink Shop</h1>
    <p class="animated fadeInRight">Here are the deals</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    
    <div class="row d-flex mb-3 align-items-center">
      <div class="col-sm-4">
        <!--  v-bind bind a variable to an attribute -->
        <img class="img-fluid d-block" v-bind:src="image" v-bind:alt="name" />
      </div>
      <div class="col">
        <h2 class="text-info">{{ name }}</h2>
        <p class="mb-0">{{ description }}</p>

        <!--  : works the same as v-bind -->
        <price class="h5 float-right"  :value="price"></price>
      </div>
    </div>
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