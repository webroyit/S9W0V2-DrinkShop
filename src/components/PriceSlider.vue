<template>
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
</template>

<script>
export default {
    name: "price-slider",
    props: ['sliderStatus'],
    computed: {
        sliderState: function(){
            return this.sliderStatus ? 'd-flex': 'd-none'
        }
    }
}
</script>

<style>

</style>