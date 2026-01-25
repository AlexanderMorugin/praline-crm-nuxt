<template>
  <div>
    <CakeCard />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const route = useRoute();
const cakesStore = useCakesStore();
await cakesStore.getCake(route.params.slug);
</script>

<style lang="scss" scoped>
// .productPage {
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
// }
</style>
