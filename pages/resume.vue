<template>
  <v-container fluid class="pa-6">
    <v-row justify-md="center">
      <ButtonPrimary
        nuxt
        tag="a"
        href="/resume-bawabe.pdf"
        target="_blank"
      >
        open downloadable PDF file
      </ButtonPrimary>
    </v-row>
    <v-row justify="center" class="pt-2">
      <img src="/resume-bawabe.png" style="width: min(100%, 800px)" height="auto" />
    </v-row>
  </v-container>
</template>