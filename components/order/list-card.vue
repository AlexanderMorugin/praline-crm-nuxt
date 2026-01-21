<template>
  <div class="orderListCard">
    <div class="orderListCard__text">
      Заказ №
      <span class="orderListCard__text orderListCard__text_accent">{{
        order.order_number
      }}</span>
      от
      <span class="orderListCard__text orderListCard__text_accent">{{
        order.order_date
      }}</span>
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderListCard {
  // position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-l);
  background: var(--deep-blue-thirdly);
  padding: 10px;

  &__text {
    line-height: 22px;
    color: var(--mask-white-secondary);

    &_accent {
      font-family: "Inter-Medium", sans-serif;
      color: var(--white-primary);
    }
  }
}
</style>
