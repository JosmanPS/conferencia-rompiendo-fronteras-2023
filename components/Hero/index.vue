<template>
  <section class="hero-section pt-12 pb-24 px-2 relative overflow-hidden">
    <div class="container mx-auto">
      <div class="flex align-middle flex-col justify-center sm:flex-row sm:justify-between">
        <img
          class="difference w-[100px] h-[100px] mx-auto sm:mx-0"
          src="/img/logo.png"
          alt="Rompiendo Fronteras"
        />
        <img
          class="h-[100px] mb-4 hidden sm:block"
          src="/img/conf-map-min.png"
          alt="Rompiendo Fronteras"
        />
      </div>
      <div class="text-center mx-auto max-w-4xl mb-12">
        <div class="relative py-24">
          <img
            class="max-w-[800px] w-full mx-auto"
            src="/img/title-conf-min.png"
            alt="Conferencia Rompiendo Fronteras 2023"
          />
          <img class="hero-title-globe w-full max-w-[600px] opacity-50" src="/img/globe.png" alt="Para las naciones" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="text-center mb-8 sm:mb-0 sm:text-left">
          <p class="uppercase font-condensed text-white difference text-lg font-semibold">
            8-9 de Septiembre
          </p>
        </div>
        <div class="text-center mb-8 sm:mb-0 z-50">
          <CTAButton />
        </div>
        <div class="text-center sm:text-right">
          <p class="uppercase font-condensed text-white difference text-lg font-semibold">
            Tegucigalpa, Honduras
          </p>
        </div>
      </div>
    </div>
    <!-- <img class="hero-globe" src="/img/globe.png" alt="Para las naciones" /> -->
  </section>
</template>

<style>
.hero-section {
  background-image: url(/img/conf-bg-2-min.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.hero-globe {
  position: absolute;
  opacity: 60%;
  right: -200px;
  bottom: -200px;
  width: 600px;
  height: auto;
  -webkit-animation: spin 16s linear infinite;
  -moz-animation: spin 16s linear infinite;
  animation: spin 16s linear infinite;
  z-index: -1;
}

.hero-title-globe {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  -webkit-animation: spin 16s linear infinite;
  -moz-animation: spin 16s linear infinite;
  animation: spin 16s linear infinite;
  z-index: 1;
}

@-moz-keyframes spin {
    100% { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
    }
}
</style>
