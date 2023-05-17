<template>
  <div class="pa-0 overflow-hidden">
    <Flicking
      hideBeforeInit
      :options="{ circular: true, renderOnlyVisible: true }"
      :cameraTag="'div'"
      :cameraClass="'d-flex'"
      :plugins="plugins"
      style="cursor: grab;"
    >
      <slot />
    </Flicking>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Flicking } from '@egjs/vue-flicking'
// import { AutoPlay } from '@egjs/flicking-plugins'

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
        // new AutoPlay({ 
        //   duration: 2000,
        //   direction: this.reverse ? 'PREV' : 'NEXT',
        //   stopOnHover: true
        // }),
      ]
    }
  },
})
</script>d