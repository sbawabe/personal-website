<template>
  <v-btn
    class="button--primary"
    :color="color"
    depressed
    :style="{borderColor: textColor}"
    v-bind="$attrs"
  >
    <div :style="{color: textColor}">
      <slot />
    </div>
  </v-btn>
</template>
<script lang="ts">
import Vue from 'vue'
import { THEME } from '~/lib/utils/colors'

export default Vue.extend({
  props: {
    color: {
      type: String as () => THEME,
      default: () => THEME.accent,
    },
    textColor: {
      type: String as () => THEME,
      default: () => THEME.secondary,
    }
  }
})
</script>
<style lang="scss" scoped>
.button--primary {
  border: 1px solid;
}
.button--primary:hover {
  border: 1px dashed;
}
</style>