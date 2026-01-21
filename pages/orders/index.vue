<template>
  <ul class="orders">
    <li v-for="order in ordersStore.orders" :key="order.id">
      <OrderListCard :order="order" />
    </li>
  </ul>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const ordersStore = useOrdersStore();

await ordersStore.loadOrders();
</script>

<style lang="scss" scoped>
.orders {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
