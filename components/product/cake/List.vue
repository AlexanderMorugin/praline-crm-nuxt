<template>
  <ul v-if="cakesStore.cakes.length" class="cakeList">
    <li v-for="product in cakesStore.cakes" :key="product.id">
      <ProductListCard :product="product" />
    </li>
  </ul>
</template>

<script setup>
const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.cakeList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
