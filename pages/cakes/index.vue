<template>
  <div>
    <ProductTopAddingBlock />
    <CakeList v-if="cakesStore.cakes.length" />
    <div v-else>Тортов пока нет</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const cakesStore = useCakesStore();

await cakesStore.loadCakes();
</script>
