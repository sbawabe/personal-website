<template>
  <v-container fluid class="overflow-hidden pb-6">
    <v-row align="end" justify="space-between" style="min-height: calc(100vh - 88px);">
      <v-col cols="12" sm="6" class="px-8">
        <img src="/hello.svg" class="hello-svg">
        <img src="/hello.svg" class="hello-svg delay-1">
        <img src="/hello.svg" class="hello-svg delay-2">
      </v-col>
      <v-col cols="10" sm="5" class="blue--bold white-border--card mx-auto mr-sm-6 hello-message">
        <h3 class="mb-0 no-uppercase">
          My name is Sarah, and I'm a Software Engineer based in New York City.
          Welcome to my website!
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { THEME } from '~/lib/utils/colors'
export default Vue.extend({
  layout: 'home',
  data () {
    return {
      THEME,
    }
  },
})
</script>
<style lang="scss" scoped>
@keyframes animateleft{from{left:-100vw;opacity:0} to{left:0; opacity:1}}
.hello-svg {
  position: relative;
  animation-name: animateleft;
  animation-duration: 1.5s;
  width: min(100%, 500px);
  height: auto;
}
.delay-1 {
  animation-delay: 0.2s;
}
.delay-2 {
  animation-delay: 0.4s;
}

@keyframes animatebottom{from{bottom:-100vh;opacity:0} to{bottom:0; opacity:1}}
.hello-message {
  position: relative;
  animation-name: animatebottom;
  animation-duration: 1.5s;
  animation-delay: 1s;
}

</style>
