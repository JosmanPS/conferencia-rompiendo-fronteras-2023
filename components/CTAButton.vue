<template>
  <button
    class="text-primary font-condensed text-lg font-bold bg-canary px-4 py-2 transition"
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
