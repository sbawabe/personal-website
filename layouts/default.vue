<template>
  <v-app id="app" :style="{ backgroundColor: THEME.white }">
    <Navbar />
    <v-main>
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { THEME } from '~/lib/utils/colors'
import { NAV_LINKS } from '~/lib/utils/nav-links'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      THEME,
      NAV_LINKS,
      drawer: false,
    }
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
