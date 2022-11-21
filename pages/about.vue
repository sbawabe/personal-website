<template>
  <v-container fluid style="max-width: min(100vw, 1000px)">
    <v-row justify="center" class="my-0 flex-column-reverse flex-md-row">
      <v-col cols="12" md="4" class="pa-0">
        <v-container>
          <v-row dense>
            <v-col cols="6" md="12">
              <v-card flat class="white-border--card pa-4">
                <v-img
                  src="/about/portrait--square.jpeg"
                  aspect-ratio="1"
                  width="100%"
                  height="auto"
                  style="border-radius: 12px;"
                />
              </v-card>
            </v-col>
            <v-col cols="6" md="12">
              <v-card flat class="white-border--card pa-4 mt-md-3">
                <v-img
                  src="/about/gouda--square.jpg"
                  width="100%"
                  aspect-ratio="1"
                  position="top center"
                  height="auto"
                  style="border-radius: 12px;"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="blue--bold">
        <v-container>
          <v-row justify="center" class="text-center">
            <v-col cols="auto">
              <img src="/hello.svg" style="width: min(100%, 300px); height: auto;">
            </v-col>
          </v-row>
        </v-container>
        <v-container :style="{borderLeft: `2px solid ${THEME.blue}`}">
          <p>
            My name is Sarah, and I'm a <b>Software Engineer II at Verb Energy</b>,
            currently living in New York City and working full-stack with a specialty in front-end.
            I lead the creation and launch of all front-end and customer-facing products, focusing particularly on our
            <a href="https://www.verbenergy.co" target="_blank">website <v-icon :size="13">mdi-open-in-new</v-icon></a>.
            I work closely with our design team to create and implement new web designs, acting as a
            liaison between the two teams.
          </p>
          <p>
            While in college (Brown University, Class of 2021), I studied Astrophysics and Computer Science, <b>with
            a focus on design</b>. I loved taking art classes, and art has been a passion of mine for as long as I can
            remember. I love finding ways to incorporate art into everything I do.
          </p>
          <p class="mb-0">
            In my free time, I love to drink coffee and do the NYT Crossword / Spelling Bee, cook,
            bake, read books, and listen to music. I also have a cat named Gouda here with me in NYC!
          </p>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="mb-6 mx-0" justify="center">
      <v-col cols="12" md="10" class="blue--bold white-border--card">
        <h3>relevant skills</h3>
        <ul>
          <li>
            <b>Languages / Frameworks:</b> TypeScript, JavaScript, Vue.js, Nuxt.js, HTML/CSS/SCSS/SASS, React,
            Python, Java, MongoDB, Google Apps Script, SQL
          </li>
          <li>
            <b>Design Software:</b> Adobe Illustrator, Figma, Adobe Photoshop, Adobe XD, Adobe InDesign
          </li>
        </ul>
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