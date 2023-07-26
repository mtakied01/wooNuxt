<template>
  <div class="my-4 grid grid-cols-5 lg:my-8">
    <div class="relative product-card" v-for="(product, key) in products" :key="key">
      <div class="w-40 h-40 bg-cover" :style="`background-image: url('${product.image.sourceUrl}')`"></div>
      <p class="title">{{ product.title }}</p>
      <p class="price">price</p>
    </div>
  </div>
</template>

<script setup>
const { products } = await useProducts();
</script>
