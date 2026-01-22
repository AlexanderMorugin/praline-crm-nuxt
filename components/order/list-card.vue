<template>
  <NuxtLink :to="`/orders/${order.id}`" class="orderListCard">
    <div class="orderListCard__block">
      <div class="orderListCard__text">
        Заказ №
        <span class="orderListCard__text orderListCard__text_accent">{{
          order.order_number
        }}</span>
      </div>
      <span class="orderListCard__text">
        {{ order.order_date }}
      </span>
    </div>
    <div class="orderListCard__block">content</div>
    <div class="orderListCard__block">status</div>
    <!-- {{ order }} -->
  </NuxtLink>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderListCard {
  // position: relative;
  // display: flex;
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  // justify-content: space-between;
  // align-items: center;
  border-radius: var(--border-radius-s);
  background: var(--deep-blue-thirdly);
  // padding: 10px;

  &__block {
    display: flex;
    flex-direction: column;
    padding: 10px;
    // border: 1px solid red;
  }

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
