<template>
  <div>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        rel="stylesheet"
      />
    </head>
    <main>
      <Hero />
      <About />
      <BannerOne />
      <Speakers />
      <Agenda />
      <BannerTwo />
      <Pricing />
      <Register />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
const title = 'Conferencia Rompiendo Fronteras 2024'
const description =
  'Regístrate para la Conferencia Rompiendo Fronteras 2024 "Sé Fructífero y Multiplícate"" del 6 - 7 de Septiembre en Tegucigalpa, Honduras.'
const seoImageUrl = 'https://conferencia.rompiendofronteras.org/img/seo-img.jpg'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: seoImageUrl,
  twitterCard: 'summary_large_image',
})
</script>
