<template>
  <v-app id="app" :style="{ backgroundColor: THEME.white }">
    <v-container fluid>
      <v-row class="mb-n6" justify="space-between" align="center">
        <v-col cols="auto" class="pl-6 pb-0">
          <img
            src="/name.svg"
            alt="Sarah Bawabe"
            style="width: 150px; height: auto"
          >
        </v-col>
        <v-col cols="auto">
          <nuxt-link to="/" class="px-2">
            ABOUT
          </nuxt-link>
          <nuxt-link to="/" class="px-2">
            Relevant Work
          </nuxt-link>
          <nuxt-link to="/" class="px-2">
            Art/Design
          </nuxt-link>
          <nuxt-link to="/" class="px-2">
            Contact
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
    <v-main class="ma-3" :style="{ backgroundColor: THEME.cream }">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { THEME } from '~/lib/utils/colors'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      THEME,
    }
  }
}
</script>
