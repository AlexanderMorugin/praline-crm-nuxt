<template>
  <div class="orderTotal">
    <span class="orderTotal__key">Всего на сумму:</span>
    <span class="orderTotal__key orderTotal__right">{{
      currencyFormater(order.total_cart_sum)
    }}</span>
    <span
      class="orderTotal__key"
      :class="
        order.delivery_type === 'Доставка'
          ? 'orderTotal__red'
          : 'orderTotal__green'
      "
      >{{
        order.delivery_type === "Доставка"
          ? "Доставка:"
          : "Скидка за самовывоз:"
      }}</span
    >
    <span
      class="orderTotal__key orderTotal__right"
      :class="
        order.delivery_type === 'Доставка'
          ? 'orderTotal__red'
          : 'orderTotal__green'
      "
    >
      {{
        order.delivery_type === "Доставка"
          ? currencyFormater(order.delivery_sum)
          : currencyFormater(order.cart_samovyvoz_bonus)
      }}</span
    >
    <span class="orderTotal__accent">Итого:</span>
    <span class="orderTotal__accent orderTotal__right">{{
      currencyFormater(order.total_order_sum)
    }}</span>

    <span class="orderTotal__key orderTotal__green">Начислен бонус:</span>
    <span class="orderTotal__key orderTotal__right orderTotal__green">
      {{ currencyFormater(order.user_bonus) }}</span
    >

    <div class="orderTotal__commentBox">
      <span class="orderTotal__key">Комментарий:</span>
      <span class="orderTotal__comment">{{ order.user_comment }}</span>
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderTotal {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px;
  width: fit-content;
  padding-top: 20px;

  &__key {
    font-family: "Inter-Regular", sans-serif;
    font-size: 16px;
    line-height: 20px;
    vertical-align: bottom;
    color: var(--mask-white-secondary);

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  &__right {
    text-align: right;
  }

  &__accent {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 20px;
    color: var(--white-primary);
  }

  &__commentBox {
    display: grid;
    grid-template-columns: 1fr;
  }

  &__commentBox {
    font-family: "Inter-Regular", sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: var(--white-primary);

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__red {
    opacity: 1;
    color: var(--red-primary);
  }

  &__green {
    opacity: 1;
    color: var(--green-primary);
  }
}
</style>
