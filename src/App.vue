<template>
  <div id="app" class="container mt-5">
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
    <h1>Drink Shop</h1>
    <p class="animated fadeInRight">Here are the deals</p>
    
    <price-slider :sliderStatus="sliderStatus" :max.sync="max"></price-slider>

    <product-list :max="max" :drinks="drinks" @add-drink="addDrink"></product-list>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import ProductList from './components/ProductList.vue'
import PriceSlider from './components/PriceSlider'

export default {
  name: 'App',
  components: {
    Navbar,
    ProductList,
    PriceSlider
  },
  data() {
    return {
      max: 20,
      sliderStatus: true,
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

</style>