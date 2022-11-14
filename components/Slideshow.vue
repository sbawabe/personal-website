<template>
  <v-container fluid class="pa-0">
    <v-slide-group
      v-model="slideValue"
      center-active
    >
      <slot />
    </v-slide-group>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    maxTab: {
      type: Number,
      required: true,
    },
    reverse: {
      type: Boolean,
    }
  },
  data () {
    return {
      slideValue: 0,
    }
  },
  methods: {
    incrementSlideValue () {
      if (this.slideValue >= this.maxTab) {
        this.slideValue = 0
        return
      }
      this.slideValue += 1
    },
    decrementSlideValue () {
      if (this.slideValue === 0) {
        this.slideValue = this.maxTab - 1
        return
      }
      this.slideValue -= 1
    }
  },
  mounted () {
    if (this.reverse) {
      setInterval(this.decrementSlideValue, 2000);
    } else {
      setInterval(this.incrementSlideValue, 2000);
    }
  }
})
</script>