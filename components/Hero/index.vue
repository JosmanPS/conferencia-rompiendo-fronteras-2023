<template>
  <section class="hero-section pt-12 pb-24 relative overflow-hidden">
    <div class="container mx-auto">
      <div class="flex align-middle justify-between">
        <img
          class="difference w-[100px] h-[100px]"
          src="/img/logo.png"
          alt="Rompiendo Fronteras"
        />
        <img
          class="h-[100px] mb-4"
          src="/img/conf-map-min.png"
          alt="Rompiendo Fronteras"
        />
      </div>
      <div class="text-center mx-auto max-w-4xl mb-12">
        <img
          class="max-w-[700px] mx-auto"
          src="/img/conf-globe-min.png"
          alt="Conferencia Rompiendo Fronteras 2023"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div>
          <p class="uppercase font-condensed text-white difference text-lg font-semibold">
            8-10 de Septiembre
          </p>
        </div>
        <div class="text-center">
          <CTAButton />
        </div>
        <div class="text-right">
          <p class="uppercase font-condensed text-white difference text-lg font-semibold">
            Tegucigalpa, Honduras
          </p>
        </div>
      </div>
    </div>
    <img class="hero-globe" src="/img/globe.png" alt="Para las naciones" />
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
