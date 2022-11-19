<template>
  <v-container class="pa-0">
    <Flicking
      :options="{ circular: true, renderOnlyVisible: true }"
      :cameraTag="'div'"
      :cameraClass="'d-flex'"
      :plugins="plugins"
    >
      <slot />
    </Flicking>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Flicking } from '@egjs/vue-flicking'
import { Fade, AutoPlay } from '@egjs/flicking-plugins'

export default Vue.extend({
  components: { Flicking },
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
      plugins: [
        new Fade(),
        new AutoPlay({ 
          duration: 2000,
          direction: this.reverse ? 'PREV' : 'NEXT',
          stopOnHover: true
        }),
      ]
    }
  },
})
</script>