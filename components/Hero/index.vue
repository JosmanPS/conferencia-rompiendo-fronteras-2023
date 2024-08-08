<template>
  <section class="bg-cream pt-12 pb-24 px-2 relative overflow-hidden">
    <div class="container mx-auto">
      <div
        class="flex align-middle items-center flex-col justify-center sm:flex-row sm:justify-between"
      >
        <img
          class="mx-auto hidden sm:block sm:mx-0 h-[45px]"
          src="/img/rf-logo-h.png"
          alt="Rompiendo Fronteras"
        />
        <div class="d-flex flex-col">
          <img
            class="h-[60px] mb-4 sm:block items-center"
            src="/img/crf24.png"
            alt="Rompiendo Fronteras"
          />
          <p class="text-right font-serif font-medium text-xl">
            6 y 7 de Septiembre
          </p>
        </div>
      </div>
      <div class="text-center mx-auto max-w-4xl py-8 md:py-4">
        <div class="relative py-0">
          <img
            class="max-w-[700px] w-full mx-auto"
            src="/img/monstera-title.png"
            alt="Conferencia Rompiendo Fronteras 2024"
          />
        </div>
        <p class="font-serif text-4xl mb-4">Inscripción L 600*</p>
        <p class="uppercase font-medium mb-4">*Cupo limitado</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="text-center mb-8 sm:mb-0 sm:text-left"></div>
        <div class="text-center mb-8 sm:mb-0 z-50">
          <CTAButton />
        </div>
        <div class="text-center sm:text-right"></div>
      </div>
    </div>
    <img class="absolute w-[200px] md:w-[400px] h-auto left-[20px] bottom-[-20px]" src="/img/orange.png" alt="Orange" />
  </section>
</template>
