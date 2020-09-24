<template>
    <nav class="navbar navbar-light fixed-top">
      <div class="container">
        <div class="navbar-text ml-auto d-flex">
          <!-- @ is the same as v-on -->
          <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
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
                    <!-- .stop to prevent the event of closing the dropdown -->
                    <a href="#" @click.stop="$parent.$emit('delete', index)" class="badge badge-danger text-white ml-1">-</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Price from './Price.vue'

export default {
    name: "navbar",
    components: {
      FontAwesomeIcon,
      Price
    },
    data() {
     return {
        max: 20
     }
    },
    props: ['cart', 'cartQty', "cartTotal"],
    computed: {
        sliderState: function(){
            return this.sliderStatus ? 'd-flex': 'd-none'
        }
    }
}
</script>

<style>

</style>