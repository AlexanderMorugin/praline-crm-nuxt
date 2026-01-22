<template>
  <NuxtLink :to="`/orders/${order.id}`" class="orderListCard">
    <div class="orderListCard__block">
      <div class="orderListCard__blockTop">
        <div class="orderListCard__text">
          №
          <span class="orderListCard__textDoubleAccent">{{
            order.order_number
          }}</span>
        </div>
      </div>
      <span class="orderListCard__text">
        {{ order.order_date }}
      </span>
    </div>

    <div class="orderListCard__block">
      <div class="orderListCard__blockTop">
        <span
          class="orderListCard__textDoubleAccent"
          :class="
            order.delivery_type === 'Доставка'
              ? 'orderListCard__red'
              : 'orderListCard__green'
          "
          >{{ order.delivery_type }}</span
        >
      </div>
      <div class="orderListCard__string">
        <IconAccount class="orderListCard__icon" />
        <span class="orderListCard__textAccent">{{ order.user_name }}</span>
      </div>
      <div class="orderListCard__string">
        <IconPhone class="orderListCard__icon" />
        <span class="orderListCard__textAccent">{{ order.user_phone }}</span>
      </div>
    </div>

    <div class="orderListCard__block">
      <div class="orderListCard__blockTop">
        <div class="orderListCard__text">
          всего:
          <span class="orderListCard__textDoubleAccent">{{
            order.total_cart_count
          }}</span>
          шт
        </div>
      </div>
      <div class="orderListCard__text">
        сумма:
        <span class="orderListCard__textDoubleAccent">{{
          order.total_order_sum
        }}</span>
        ₽
      </div>
    </div>

    <div class="orderListCard__block">
      <div class="orderListCard__blockTop">
        <span class="orderListCard__textDoubleAccent">Доставлен</span>
      </div>
      <span class="orderListCard__text">{{ order.order_date }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.orderListCard {
  display: grid;
  grid-template-columns: 150px 1fr 170px 150px;
  border-radius: var(--border-radius-xs);
  background: var(--deep-blue-thirdly);

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border-right: 3px solid var(--white-primary);

    @media (max-width: 767px) {
      &:nth-child(2) {
        border-right: none;
      }
    }

    &:last-child {
      border-right: none;
    }
  }

  &__blockTop {
    min-height: 26px;
    border-bottom: 1px dashed var(--mask-white-primary);
  }

  &__text {
    font-size: 12px;
    color: var(--mask-white-secondary);
    vertical-align: bottom;
  }

  &__textAccent {
    font-size: 12px;
    font-family: "Inter-Regular", sans-serif;
    color: var(--white-primary);
  }

  &__textDoubleAccent {
    font-size: 18px;
    font-family: "Inter-Medium", sans-serif;
    color: var(--white-primary);
  }

  &__icon {
    width: 18px;
    height: 18px;
    fill: var(--mask-white-secondary);
  }

  &__string {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__red {
    // opacity: 1;
    color: var(--red-primary);
  }

  &__green {
    // opacity: 1;
    color: var(--green-primary);
  }
}
</style>
