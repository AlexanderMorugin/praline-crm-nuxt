<template>
  <div>
    <ProductTopAddingBlock />
    <CakeList v-if="cakesStore.cakes.length" />
    <ProductListEmpty v-else title="Тортов пока нет" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cakesStore = useCakesStore();

await cakesStore.loadCakes();
</script>
