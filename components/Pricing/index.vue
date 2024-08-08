<template>
  <section class="bg-cream">
    <div class="container mx-auto py-24 px-4">
      <div class="">
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
    title: 'Venta',
    price: 600,
    description: '*Cupos limitados',
  },
]
</script>
