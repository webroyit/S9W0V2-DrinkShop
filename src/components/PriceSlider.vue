<template>
    <transition name="fade">
      <div v-if="sliderStatus">
        <div class="align-items-center" :class="sliderState">
          <label :class="['font-weight-bold', 'mr-2']" for="formMax">Max</label>
          <!-- v-model to change the value of max -->
           <!-- $parent for more than 1 component above (../) -->
          <input
            id="formMax"
            type="text"
            class="form-control mx-2"
            :style="{'width': '60px', 'text-align': 'center'}"
            v-model="max"
            @change="$parent.$emit('update:max', max)">
          <input type="range" class="custom-range" min="0" max="20" v-model="max" @input="$emit('update:max', max)">
        </div>
      </div>
    </transition>
</template>

<script>
export default {
    name: "price-slider",
    data() {
     return {
        max: 20
     }
    },
    props: ['sliderStatus'],
    computed: {
        sliderState: function(){
            return this.sliderStatus ? 'd-flex': 'd-none'
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