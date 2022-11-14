<template>
  <v-container fluid class="px-0">
    <v-row class="my-0">
      <v-col cols="6" md="4" class="pa-0">
        <img src="/portrait.jpg" width="100%" height="auto">
      </v-col>
      <v-col cols="6" md="auto" class="px-0">
        <div class="py-2 py-md-0 ml-n8 ml-md-n12 px-8 px-md-12" :style="{backgroundColor: THEME.yellow}">
          <h1><i>HI! I'M SARAH.</i></h1>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { THEME } from '~/lib/utils/colors'
export default Vue.extend({
  data () {
    return {
      THEME,
    }
  },
})
</script>
