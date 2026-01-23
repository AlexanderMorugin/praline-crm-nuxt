<template>
  <div class="orderCard">
    <div class="orderCard__title">
      Заказ №
      <span class="orderCard__titleAccent">{{ order.order_number }}</span> от
      <span class="orderCard__titleAccent">{{ order.order_date }}</span>
    </div>
    <OrderUser :order="order" />
    <div class="line-solid" />
    <OrderProducts :order="order" />
    <div class="line-solid" />
    <OrderTotal :order="order" />
    <div class="test">{{ order }}</div>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderCard {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: var(--border-radius-l);
  background: var(--deep-blue-thirdly);
  padding: 20px;

  @media (max-width: 767px) {
    padding: 20px 10px;
  }

  &__title {
    font-family: "Inter-Regular", sans-serif;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1px;
    color: var(--mask-white-secondary);
  }

  &__titleAccent {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 1px;
    color: var(--white-primary);
  }
}
</style>
