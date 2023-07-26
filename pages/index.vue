<template>
  <div>
    <h1>Shop new arrivals</h1>
    <Products/>
  </div>
</template>

<script setup>
import getProducts from "~/apollo/queries/products.gql";
const { setProducts } = await useProducts();
const {
  data: {
    value: {
      products: { nodes: products },
    },
  },
} = await useAsyncQuery(getProducts);
setProducts(products || []);
</script>

<style></style>
