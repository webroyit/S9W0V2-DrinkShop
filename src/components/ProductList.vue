<template>
    <div>
        <!-- v-for to loop through an array  -->
        <div v-bind:key="drink.id" v-for="drink in drinks">
        <transition name="fade">
            <div class="row d-flex mb-3 align-items-center" v-if="drink.price<=Number(max)">
            <div class="col-1 m-auto">
                <!-- v-on to handle event -->
                <!-- emit to use a method from another component -->
                <!-- second argument of emit is the data to pass to another component -->
                <!-- $parent for more than 1 component above -->
                <button class="btn btn-info" v-on:click="$parent.$emit('add-drink', drink)">+</button>
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
import Price from './Price.vue'

export default {
  name: 'product-list',
  components: {
    Price
  },
  props: ["max", "drinks"]
}

</script>