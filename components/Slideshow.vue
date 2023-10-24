<template>
  <Flicking
    ref="flicking"
    :options="{
      autoResize: true,
      useResizeObserver: true,
      align: 'prev',
      circular: true,
    }"
    style="cursor: grab"
  >
    <slot />
  </Flicking>
</template>
<script lang="ts">
import Vue from "vue";
import { Flicking } from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

export default Vue.extend({
  components: { Flicking },
});
</script>
