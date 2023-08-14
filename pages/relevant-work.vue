<template>
  <v-container>
    <v-row class="ma-0 mt-3 mb-n3 mb-md-0" justify="center">
      <v-col cols="12" md="8" class="yellow-border--card">
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
    <v-row align="center">
      <v-col cols="12" md="6" class="px-6">
        <h3 class="my-3">Web Design</h3>
        <p>
        As a software engineer at Verb Energy, I lead the creation and launch of all front-end and
        customer-facing products, focusing particularly on our
        <a href="https://www.verbenergy.co" target="_blank">website <v-icon :size="13">mdi-open-in-new</v-icon></a>.
        I work closely with our design team to create and implement new web designs, acting as a
        liaison between the two teams.
        </p>

        <p>
        I have also helped design other websites from the ground-up&#8212;two of my favorites being the
        the Fall 2020
        <a href="https://cs.brown.edu/courses/csci1300/fall2020/" target="_blank">Brown University CS1300 course website <v-icon :size="13">mdi-open-in-new</v-icon></a>
        (hand-coded) and a webpage (Squarespace) for
        <a href="https://www.jameslibrary.org/" target="_blank">The James Library <v-icon :size="13">mdi-open-in-new</v-icon></a>,
        a local non-profit library and center for the arts in my hometown.
        </p>
        <ButtonPrimary
          class="my-1"
          href="https://www.verbenergy.co"
          target="_blank"
        >
          Verb's Website <v-icon small>mdi-open-in-new</v-icon>
        </ButtonPrimary>
      </v-col>
       <v-col cols="12" md="6" class="pa-0">
        <img src="/relevant-work/verb-website.png" width="100%" height="auto">
      </v-col>
    </v-row>
    <v-row align="center" class="flex-column-reverse flex-md-row">
      <v-col cols="12" md="6" class="pa-0">
        <img src="/relevant-work/submissionA.webp" width="100%" height="auto">
      </v-col>
      <v-col cols="12" md="6" class="px-6">
        <h3 class="my-3">User Interfaces <b>&</b> User Experience</h3>
        <p>
        At Brown, I was a <b>UI/UX Research Assistant</b> for Dr. Jeff Huang and a <b>Head Teaching Assistant</b>
        for his course, CSCI 1300: User Interfaces and User Experience. My research with Dr. Huang earned me
        an honorable mention for the <b>2021 CRA Outstanding Undergraduate Researcher Award</b>. In October 2021, our
        research team published the paper
        <i>"The UX Factor: Using Comparitive Peer Review to Evaluate Designs through User Preferences"</i>,
        which earned an <b>Honorable Mention</b> & <b>Impact Recognition Award</b>
        from the Conference On Computer-Supported Cooperative Work and Social Computing (CSCW).
        </p>
        <ButtonPrimary
          class="my-1"
          href="https://dl.acm.org/doi/abs/10.1145/3479863"
          target="_blank"
        >
          Read the Paper <v-icon small>mdi-open-in-new</v-icon>
        </ButtonPrimary>
        <ButtonPrimary
          class="my-1"
          href="https://uxfactor.cs.brown.edu/"
          target="_blank"
        >
          UX Factor Website <v-icon small>mdi-open-in-new</v-icon>
        </ButtonPrimary>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" md="6" class="px-6">
        <h3 class="my-3">Physics</h3>
        <p>
        I also participated in physics research during my time at Brown, under the supervisions of Professor Jim Gates
        (2018) and Professor Stephon Alexander (2019-2021). With Dr. Stephon Alexander as my advisor, my undergraduate thesis
        combined Deep Learning and Astrophysics, by using a graph network to view the large scale structure of the universe.
        </p>
        <ButtonPrimary
          href="/thesis_bawabe.pdf"
          target="_blank"
        >
          Read my Thesis <v-icon small>mdi-open-in-new</v-icon>
        </ButtonPrimary>
      </v-col>
       <v-col cols="12" md="6">
        <img src="/relevant-work/250-500.png" width="100%" height="auto">
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.yellow-border--card {
  border-radius: 12px;
  background-color: transparent;
  border: 2px solid #F4EE78;
}
</style>