<template>
  <section class="hero-section py-24 relative overflow-hidden">
    <div class="container mx-auto">
      <div class="flex align-middle justify-center">
        <img
          class="difference w-[120px] mb-16"
          src="/img/logo.png"
          alt="Rompiendo Fronteras"
        />
      </div>
      <div class="text-center mx-auto max-w-4xl">
        <img
          class="difference"
          src="/img/title.png"
          alt="Conferencia Rompiendo Fronteras 2023"
        />
        <h2 class="text-white difference font-serif text-4xl my-16">
          « Para las naciones »
        </h2>
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
  background-image: url(/img/background-1.jpg);
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
