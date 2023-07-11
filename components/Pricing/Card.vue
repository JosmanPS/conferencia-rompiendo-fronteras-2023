<template>
  <div class="shadow-lg bg-white rounded-2xl max-w-sm mx-auto">
    <div class="d-flex text-center flex-column align-center justify-center bg-primary rounded-t-2xl py-4">
      <div class="text-white text-sm mb-2">PRECIO DE</div>
      <div class="uppercase text-canary font-semibold text-2xl">{{ props.title }}</div>
    </div>
    <div class="py-12 text-center">
      <div class="text-primary font-bold text-7xl mt-2 mb-8">L {{ props.price }}</div>
      <p class="text-primary mb-8" v-html="props.description"></p>
      <CTAButton />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
})
</script>
