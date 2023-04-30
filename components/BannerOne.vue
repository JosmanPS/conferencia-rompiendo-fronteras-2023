<template>
  <section class="banner-section py-24 relative overflow-hidden">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-3xl font-serif text-white difference">
          Antes que te formase en el vientre te conocí, y antes que nacieses te
          santifiqué, te di por profeta a las naciones.
        </p>
      </div>
    </div>
    <img class="banner-globe" src="/img/globe.png" alt="Para las naciones" />
  </section>
</template>

<style>
.banner-section {
  background-image: url(/img/conf-bg-2-min.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.banner-globe {
  position: absolute;
  opacity: 60%;
  right: -200px;
  bottom: -200px;
  width: 600px;
  height: auto;
  -webkit-animation: spin 16s linear infinite;
  -moz-animation: spin 16s linear infinite;
  animation: spin 16s linear infinite;
}
</style>
