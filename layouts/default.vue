<template>
  <v-app id="app" :style="{ backgroundColor: THEME.white }">
    <v-container fluid>
      <v-row class="mb-n6" justify="space-between" align="center">
        <v-col cols="auto" class="pl-6 pb-0">
          <nuxt-link to="/">
            <img
              src="/name.svg"
              alt="Sarah Bawabe"
              style="width: 150px; height: auto"
            >
          </nuxt-link>
        </v-col>
        <v-col cols="auto" class="d-none d-md-block">
          <nuxt-link
            v-for="link in NAV_LINKS"
            class="px-2 mx-1 nav-link"
            :key="link.to"
            :to="link.to"
            v-text="link.name"
          />
        </v-col>
        <v-col cols="auto" class="d-md-none">
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
      right
      temporary
      class="py-6"
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
    <v-main>
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
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
  </v-app>
</template>

<script>
import { THEME } from '~/lib/utils/colors'

const NAV_LINKS = [
  { name: 'Art & Design', to: '/art-and-design'},
  { name: 'Relevant Work', to: '/relevant-work'},
  { name: 'Resume', to: '/resume'},
  { name: 'About', to: '/about'},
]

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
.base-nav-link {
  position: relative;
  z-index: 0;
  text-decoration: none;
  text-transform: uppercase;
  &:hover, &.nav-link--active {
    &::before {
      background-color: #F4EE78;
      position: absolute;
      content: "";
      width: 90%;
      z-index: -1;
      bottom: 0;
      height: 16px;
      transform: translate(4px, 2px);
    }
  }
}

.nav-link {
  @extend .base-nav-link;
  color: #000000;
}

.footer-link {
  @extend .base-nav-link;
  color: #fff;
  &:hover, &.nav-link--active {
    &::before {
      background-color: #F16623;
    }
  }
}
</style>
