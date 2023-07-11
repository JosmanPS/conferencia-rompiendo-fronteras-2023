<template>
  <section class="bg-cream">
    <div class="container mx-auto py-24 px-4">
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="price in prices"
          :key="price.price"
        >
          <PricingCard
            :title="price.title"
            :price="price.price"
            :description="price.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const prices = [
  {
    title: 'Preventa',
    price: 500,
    description: '*Válido hasta el 17 de Julio del  2023 <br/>**Valor en USD: $20.00',
  },
  {
    title: 'Venta',
    price: 600,
    description: '*A partir del 17 de Julio del  2023<br/>**Valor en USD: $25.00',
  },
]
</script>
