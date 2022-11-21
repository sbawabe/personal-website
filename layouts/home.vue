<template>
  <v-app id="app" :style="{ backgroundColor: THEME.cream }">
    <Navbar />
    <v-main>
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { THEME } from '~/lib/utils/colors'

export default {
  data () {
    return {
      THEME,
    }
  }
}
</script>

