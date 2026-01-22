<template>
  <!-- <div> -->
  <div>{{ orderStore.order }}</div>
  <!-- </div> -->
</template>

<script setup>
definePageMeta({
  layout: "main",
});
const route = useRoute();
const orderStore = useOrdersStore();
await orderStore.getOrder(route.params.id);
</script>
