<template>
    <div id="app" class="container mt-5">
        <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="deleteDrink"></navbar>
        <h1>Drink Shop</h1>
        <p class="animated fadeInRight">Here are the deals</p>
        
        <price-slider :sliderStatus="sliderStatus" :max.sync="max"></price-slider>

        <product-list :max="max" :drinks="drinks" @add-drink="addDrink"></product-list>
    </div>
</template>

<script>
import Navbar from './Navbar';
import ProductList from './ProductList.vue';
import PriceSlider from './PriceSlider';

export default {
  name: 'products',
  props: [
      "drinks",
      "max",
      "cart",
      "cartQty",
      "cartTotal",
      "sliderStatus",
      "sliderState"
  ],
  components: {
    Navbar,
    ProductList,
    PriceSlider
  },
}
</script>