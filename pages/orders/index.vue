<template>
  <div>
    <OrderList v-if="ordersStore.orders.length" />
    <OrderListEmpty v-else />
  </div>
  <!-- <ul class="orders">
    <li v-for="order in ordersStore.orders" :key="order.id">
      <OrderListCard :order="order" />
    </li>
  </ul> -->
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const ordersStore = useOrdersStore();

await ordersStore.loadOrders();
</script>

<!-- <style lang="scss" scoped>
.orders {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style> -->
