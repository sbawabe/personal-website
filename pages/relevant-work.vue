<template>
  <v-container>
    <!-- <h1>relevant work</h1> -->
    <!-- <v-tabs>
      <v-tab>
        UI/UX
      </v-tab>
      <v-tab>
        Physics
      </v-tab>
    </v-tabs> -->
    <!-- <h1>RESEARCH</h1> -->
    <v-row align="center" class="flex-column-reverse flex-md-row">
      <v-col cols="12" md="6">
        <img src="/relevant-work/submissionA.webp" width="100%" height="auto">
      </v-col>
      <v-col cols="12" md="6" class="px-6">
        <h3 class="my-3">User Interfaces <b>&</b> User Experience</h3>
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
        combined Deep Learning and Astrophysics, by using a graph network to view large scale structure of the universe.
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