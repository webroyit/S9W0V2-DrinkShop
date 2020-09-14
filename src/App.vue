<template>
  <div id="app" class="container mt-5">
    <nav class="navbar navbar-light fixed-top">
      <div class="container">
        <div class="navbar-text ml-auto d-flex">
          <!-- @ is the same as v-on -->
          <button class="btn btn-sm btn-outline-success" @click="sliderStatus = !sliderStatus">
             <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
          </button>
          <div class="dropdown ml-2">
            <button
              class="btn btn-success btn-sm dropdown-toggle"
              id=cartDropdown
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="badge badge-pill badge-light mr-1">{{ cartQty }}</span>
              <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
              <price class="ml-2" :value="cartTotal"> </price>
            </button>

            <div class="dropdown-menu dropdown-menu-right">
              <div v-for="(drink, index) in cart" :key="index">
                <div>
                  <div class="dropdown-item-text text-nowrap text-right">
                    <span class="badge badge-pill badge-warning align-text-top mr-1">
                      {{ drink.qty }}
                    </span>
                    {{ drink.product.name }}
                    <b><price :value="drink.qty * drink.product.price"> </price></b>
                    <a href="#" @click="deleteDrink(index)" class="badge badge-danger text-white ml-1">-</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <h1>Drink Shop</h1>
    <p class="animated fadeInRight">Here are the deals</p>
    
    <transition name="fade">
      <div v-if="sliderStatus">
        <div class="align-items-center" :class="sliderState">
          <label :class="['font-weight-bold', 'mr-2']" for="formMax">Max</label>
          <!-- v-model to change the value of max -->
          <input id="formMax" type="text" class="form-control mx-2" :style="{'width': '60px', 'text-align': 'center'}" v-model="max">
          <input type="range" class="custom-range" min="0" max="20" v-model="max">
        </div>
      </div>
    </transition>

    <!-- v-for to loop through an array  -->
    <div v-bind:key="drink.id" v-for="drink in drinks">
      <transition name="fade">
        <div class="row d-flex mb-3 align-items-center" v-if="drink.price<=Number(max)">
          <div class="col-1 m-auto">
            <!-- v-on to handle event -->
            <button class="btn btn-info" v-on:click="addDrink(drink)">+</button>
          </div>

          <div class="col-4">
            <!--  v-bind bind a variable to an attribute -->
            <img class="img-fluid d-block" v-bind:src="drink.image" v-bind:alt="name" >
          </div>

          <div class="col">
            <h2 class="text-info">{{ drink.name }}</h2>
            <p class="mb-0">{{ drink.description }}</p>

            <!--  : works the same as v-bind -->
            <price class="h5 float-right"  :value="drink.price"></price>
          </div>
        </div>
      </transition>
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
      max: 20,
      sliderStatus: false,
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
          price: 6,
        },
        {
          id: 3,
          name: "Smoothie",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam consequuntur culpa aliquam excepturi sunt magni minima eos tempora aperiam. Temporibus, unde? Assumenda dolores et enim tempora dolorem eligendi aliquam!",
          image: "https://images.unsplash.com/photo-1513169639596-cf0480fe1bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
          price: 4.5,
        }
      ],
      cart: []
    }
  },
  computed: {
    cartTotal: function() {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + (this.cart[key].product.price * this.cart[key].qty);
      }
      return sum;
    },
    cartQty: function() {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
    sliderState: function(){
      return this.sliderStatus ? 'd-flex': 'd-none'
    }
  },
  methods: {
    addDrink: function(drink) {
      let whichDrink;
      let existing = this.cart.filter(function(item, index) {
        if(item.product.id == Number(drink.id)){
          whichDrink = index;
          return true;
        }
        else{
          return false;
        }
      });

      if(existing.length) {
        this.cart[whichDrink].qty++;
      }
      else {
        this.cart.push({ product: drink, qty: 1 });
      }
    },
    deleteDrink: function(id) {
      if(this.cart[id].qty > 1) {
        this.cart[id].qty--;
      }
      else {
        this.cart.splice(id, 1);
      }
    }
  }
}

</script>

<style>
  /* these names are from vue */
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease-in-out;
  }

</style>