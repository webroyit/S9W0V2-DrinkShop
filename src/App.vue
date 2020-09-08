<template>
  <div id="app" class="container mt-5">
    <h1>Drink Shop</h1>
    <p class="animated fadeInRight">Here are the deals</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    
    <!-- v-for to loop through an array  -->
    <div class="row d-flex mb-3 align-items-center" v-bind:key="drink.id" v-for="drink in drinks">

      <div v-if="drink.price<=Number(max)">
        <div class="col-sm-4">
          <!--  v-bind bind a variable to an attribute -->
          <img class="img-fluid d-block" v-bind:src="drink.image" v-bind:alt="name" />
        </div>
        <div class="col">
          <h2 class="text-info">{{ drink.name }}</h2>
          <p class="mb-0">{{ drink.description }}</p>

          <!--  : works the same as v-bind -->
          <price class="h5 float-right"  :value="drink.price"></price>
        </div>
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
      max: 4.5,
      drinks: [
        {
          id: 1,
          name: "Soda",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam consequuntur culpa aliquam excepturi sunt magni minima eos tempora aperiam. Temporibus, unde? Assumenda dolores et enim tempora dolorem eligendi aliquam!",
          image: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
          price: 1,
        },
        {
          id: 2,
          name: "Beer",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam consequuntur culpa aliquam excepturi sunt magni minima eos tempora aperiam. Temporibus, unde? Assumenda dolores et enim tempora dolorem eligendi aliquam!",
          image: "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
          price: 5,
        },
        {
          id: 3,
          name: "Smoothie",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam consequuntur culpa aliquam excepturi sunt magni minima eos tempora aperiam. Temporibus, unde? Assumenda dolores et enim tempora dolorem eligendi aliquam!",
          image: "https://images.unsplash.com/photo-1513169639596-cf0480fe1bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
          price: 4.5,
        }
      ]
    }
  }
}

</script>