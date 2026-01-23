<template>
  <ul class="orderList">
    <li v-for="order in ordersStore.orders" :key="order.id">
      <OrderListCard :order="order" />
    </li>
  </ul>
</template>

<script setup>
const ordersStore = useOrdersStore();
</script>

<style lang="scss" scoped>
.orderList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
