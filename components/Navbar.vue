<template>
  <pass-through>
    <v-container fluid>
      <v-row class="mb-n6" justify="space-between" align="center">
        <v-col cols="auto" class="pl-6 pb-0">
          <nuxt-link to="/">
            <slot>
              <img
                src="/favicon.svg"
                alt="Sarah Bawabe"
                style="width: 35px; height: auto"
              >
            </slot>
          </nuxt-link>
        </v-col>
        <v-col cols="auto">
          <v-app-bar-nav-icon
            style="color: black"
            @click.stop="drawer = !drawer"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="py-6"
      right
      temporary
      :aria-hidden="drawer"
    >
      <v-container>
        <v-row justify="end" class="mx-0">
          <v-btn
            color="black"
            icon
            @click="drawer = !drawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-list nav dense>
        <template v-for="link in NAV_LINKS">
          <v-list-item :key="link.to">
            <nuxt-link
              class="px-2 nav-link"
              :to="link.to"
              v-text="link.name"
            />
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </pass-through>
</template>

<script>
import { NAV_LINKS } from '~/lib/utils/nav-links'

export default {
  data () {
    return {
      NAV_LINKS,
      drawer: false,
    }
  }
}
</script>