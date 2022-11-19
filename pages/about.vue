<template>
  <v-container fluid class="px-0">
    <v-row class="my-0">
      <v-col cols="6" md="4" class="pa-0">
        <img src="/portrait.jpg" width="100%" height="auto">
      </v-col>
      <!-- <v-col cols="6" md="auto" class="px-0">
        <div class="py-2 py-md-0 ml-n8 ml-md-n12 px-8 px-md-12" :style="{backgroundColor: THEME.yellow}">
          <h1><i>HI! I'M SARAH.</i></h1>
        </div>
      </v-col> -->
    <!-- </v-row>
    <v-row> -->
      <v-col class="blue--bold--paragraph">
        <p>
        I'm a <b>Software Engineer II at Verb Energy</b>, where I work full-stack with a specialty in front-end. 
        I lead the creation and launch of all front-end and customer-facing products, focusing particularly
        on our <a href="https://www.verbenergy.co" target="_blank">website <v-icon :size="13">mdi-open-in-new</v-icon></a>. I work closely with our design team
        to create and implement new web designs, acting as a liaison between the two teams.
        </p>
        <p>
        While in college (Brown University, Class of 2021), I studied <b>Astrophysics and Computer Science</b>, with
        a focus on design. I loved taking art classes, and art has been a passion of mine for as long as I can
        remember. I love finding ways to incorporate art into everything I do.
        </p>

        <!-- <h3>Research</h3>
        <h4>User Interfaces <b>&</b> User Experience</h4>
        <p>
        At Brown, I was a <b>UI/UX Research Assistant</b> for Dr. Jeff Huang and a <b>Head Teaching Assistant</b>
        for his course, CSCI 1300: User Interfaces and User Experience. My research with Dr. Huang earned me
        an honorable mention for the <b>2021 CRA Outstanding Undergraduate Researcher Award</b>. In October 2021, our
        research team published the paper
        <a href="https://dl.acm.org/doi/abs/10.1145/3479863" target="_blank">
        <i>"The UX Factor: Using Comparitive Peer Review to Evaluate Designs through User Preferences"</i>
        <v-icon :size="13">mdi-open-in-new</v-icon></a>,
        which earned an <b>Honorable Mention</b> & <b>Impact Recognition Award</b>
        from the Conference On Computer-Supported Cooperative Work and Social Computing (CSCW).
        </p>
        <h4>Physics</h4>
        <p>
        I also participated in physics research during my time at Brown, under the supervisions of Professor Jim Gates
        (2018) and Professor Stephon Alexander (2019-2021). With Dr. Stephon Alexander as my advisor, 
        <a href="/thesis_bawabe.pdf" target="_blank">my undergraduate thesis<v-icon :size="13">mdi-open-in-new</v-icon></a>
        combined Deep Learning and Astrophysics, by using a graph network to view large scale structure of the universe.
        </p> -->
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
