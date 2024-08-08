<template>
  <button
    class="text-cream font-condensed text-lg font-bold bg-orange rounded px-8 py-4 transition"
    @click="scrollToRegisterSection"
  >
    REGÍSTRATE YA
  </button>
</template>

<script setup lang="ts">
function scrollToRegisterSection() {
  const register = document.getElementById('register')
  register?.scrollIntoView({ behavior: 'smooth' })
}
</script>
