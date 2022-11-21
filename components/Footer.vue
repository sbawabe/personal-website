<template>
  <v-footer app absolute :color="THEME.blue" class="py-7">
    <v-container fluid>
      <v-row v-for="link in NAV_LINKS" :key="link.to" justify="center">
        <nuxt-link
          class="px-2 my-1 footer-link"
          :to="link.to"
          v-text="link.name"
        />
      </v-row>
      <v-row class="my-8" justify="center">
        <a class="px-2" href="https://github.com/sbawabe" target="_blank">
          <v-icon color="white" large>mdi-github</v-icon>
        </a>
        <a class="px-2" href="https://www.linkedin.com/in/sarah-bawabe/" target="_blank">
          <v-icon color="white" large>mdi-linkedin</v-icon>
        </a>
      </v-row>
      <v-row justify="center" class="white--text fine-print text-center">
        <p class="mb-0">&copy; 2022 All images and content are property of Sarah Bawabe.</p>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue'
import { THEME } from '~/lib/utils/colors'
import { NAV_LINKS } from '~/lib/utils/nav-links'
export default Vue.extend({
  data () {
    return {
      THEME,
      NAV_LINKS,
    }
  },
})
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>