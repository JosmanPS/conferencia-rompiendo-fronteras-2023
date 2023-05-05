<template>
  <main>
    <Hero />
    <About />
    <BannerOne />
    <Pricing />
    <MoreInfoBanner />
    <Register />
    <Footer />
  </main>
</template>

<script setup lang="ts">
const title = 'Conferencia Rompiendo Fronteras 2023'
const description =
  'Regístrate para la Conferencia Rompiendo Fronteras 2023 "Para las naciones" del 8 - 10 de Septiembre en Tegucigalpa, Honduras.'
const seoImageUrl =
  'https://conferencia.rompiendofronteras.org/img/seo-img.jpg'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: seoImageUrl,
  twitterCard: 'summary_large_image',
})
</script>
