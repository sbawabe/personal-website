<template>
  <v-container fluid class="pa-0">
    <h1 class="ml-3">ART<b>&</b>DESIGN</h1>
    <Slideshow :max-tab="ART_SLIDES_1.length">
      <template v-for="slide in ART_SLIDES_1">
        <v-slide-item :key="slide.name">
          <v-container class="pa-0 px-1">
            <img :src="slide.src" :aria-label="slide.name" style="height: min(50vw, 350px); width: auto;">
          </v-container>
        </v-slide-item>
      </template>
    </Slideshow>
    <Slideshow :max-tab="ART_SLIDES_2.length" reverse>
      <template v-for="slide in ART_SLIDES_2">
        <v-slide-item :key="slide.name">
          <v-container class="pa-0 px-1">
            <img :src="slide.src" :aria-label="slide.name" style="height: min(50vw, 350px); width: auto;">
          </v-container>
        </v-slide-item>
      </template>
    </Slideshow>
    <Slideshow :max-tab="POSTER_DESIGNS.length">
      <template v-for="slide in POSTER_DESIGNS">
        <v-slide-item :key="slide.name">
          <v-container class="pa-0 px-1">
            <img :src="slide.src" :aria-label="slide.name" style="height: min(50vw, 350px); width: auto;">
          </v-container>
        </v-slide-item>
      </template>
    </Slideshow>
    <v-row justify="center" class="my-5">
      <template v-for="slide in STICKER_LOGO_DESIGNS">
        <v-col cols="auto" class="py-0" :key="slide.name">
          <img
            :src="slide.src"
            :aria-label="slide.name"
            :style="{height: $vuetify.breakpoint.smAndDown ? '90px' : '180px', width: 'auto'}">
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { THEME } from '~/lib/utils/colors'

const ART_SLIDES_1 = [
  { src: '/art/apple-min.jpg', name: 'Apple', description: 'colored pencil, toned paper', size: '9 x 9'},
  { src: '/art/bear-min.jpg', name: 'Bear & Dragonfly', description: 'cut paper, exacto blade', size: '24 x 18'},
  { src: '/art/bird-min.jpg', name: 'The Bluebird', description: 'micron pen, paint pen, toned paper', size: '10 x 12'},
  { src: '/art/cat-min.jpg', name: 'Bullwinkle', description: 'paint pen, black paper', size: '12 x 18'},
  { src: '/art/charcoalScream-min.jpg', name: 'Scream', description: 'charcoal', size: '18 x 24'},
  { src: '/art/chicken-min.jpg', name: 'Chicken', description: 'micron pen, paint pen, toned paper', size: '9 x 9'},
  { src: '/art/duck-min.jpg', name: '', description: '', size: ''},
  { src: '/design/dreamer-min.jpg', name: '', description: '', size: ''},
]
const ART_SLIDES_2 = [
  { src: '/art/grandpa-min.jpg', name: '', description: '', size: ''},
  { src: '/art/isaac-min.jpg', name: '', description: '', size: ''},
  { src: '/art/pearls-min.jpg', name: '', description: '', size: ''},
  { src: '/art/penBottle-min.jpg', name: '', description: '', size: ''},
  { src: '/art/skydiver-min.jpg', name: '', description: '', size: ''},
  { src: '/art/teapot-min.jpg', name: '', description: '', size: ''},
  { src: '/design/breakthrough-min.jpg', name: '', description: '', size: ''},
  { src: '/art/fish-min.jpg', name: '', description: '', size: ''},
]

const POSTER_DESIGNS = [
  { src: '/design/caitlin_gammaPhi-min.jpg', name: '', description: '', size: ''},
  { src: '/design/coffeeConvo-min.jpg', name: '', description: '', size: ''},
  { src: '/design/joinListserv-min.jpg', name: '', description: '', size: ''},
  { src: '/design/gameNight-01-min.jpg', name: '', description: '', size: ''},
  { src: '/design/empty_calendars-01-min.png', name: '', description: '', size: ''},
  { src: '/design/lazyLunches-min.jpg', name: '', description: '', size: ''},
  { src: '/design/paintNight-min.jpg', name: '', description: '', size: ''},
  { src: '/design/blueno-min.jpg', name: '', description: '', size: ''},
  { src: '/design/lineup-min.png', name: '', description: '', size: ''},
  { src: '/design/gradBooklet-min.jpg', name: '', description: '', size: ''},
  { src: '/design/colorado_small-min.jpg', name: '', description: '', size: ''},
  { src: '/design/dessertsDG_vertical-01-min.jpg', name: '', description: '', size: ''},
]

const WEB_DESIGNS = [
  { src: '/design/james-min.png', name: '', description: '', size: ''},
]

const STICKER_LOGO_DESIGNS = [
  { src: '/design/groovy_dg-01-min.png', name: '', description: '', size: ''},
  { src: '/design/hat_designs-02-min.png', name: '', description: '', size: ''},
  { src: '/design/beamSticker-min.png', name: '', description: '', size: ''},
  { src: '/design/dg_block_design-min.png', name: '', description: '', size: ''},
  { src: '/design/hat_designs-03-min.png', name: '', description: '', size: ''}, 
  { src: '/design/review_finder_blue-02-min.png', name: '', description: '', size: ''},
]

export default Vue.extend({
  data () {
    return {
      THEME,
      ART_SLIDES_1,
      ART_SLIDES_2,
      POSTER_DESIGNS,
      WEB_DESIGNS,
      STICKER_LOGO_DESIGNS,
    }
  },
})
</script>