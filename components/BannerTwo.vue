<template>
  <section class="banner-section py-24 px-4 relative overflow-hidden">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-3xl font-serif text-white difference">
          Todas las naciones que hiciste vendrán y adorarán delante de ti,
          Señor, Y glorificarán tu nombre. Porque tú eres grande, y hacedor de
          maravillas; Solo tú eres Dios.
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
