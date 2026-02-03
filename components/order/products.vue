<template>
  <ul class="orderProducts">
    <li
      v-for="item in order.cart_list"
      :key="item.id"
      class="orderProducts__item"
    >
      <div class="orderProducts__imageBox">
        <img :src="item.image" :alt="item.title" class="orderProducts__image" />
      </div>

      <div class="orderProducts__block">
        <div class="orderProducts__details">
          <div class="orderProducts__title">
            <span class="orderProducts__accent orderProducts__titleHeight">{{
              item.title
            }}</span>
            <span class="orderProducts__noAccent orderProducts__titleHeight"
              >{{ item.weigth }}гр</span
            >
          </div>

          <span class="orderProducts__accent orderProducts__count"
            >{{ item.count }} шт</span
          >
        </div>

        <div class="orderProducts__prices">
          <span class="orderProducts__noAccent orderProducts__right">{{
            item.discount
              ? `Цена со скидкой ${item.discount}%`
              : "Цена без скидки"
          }}</span>
          <span class="orderProducts__noAccent orderProducts__right">{{
            item.discount
              ? `${currencyFormater(item.discount_price)}`
              : `${currencyFormater(item.price)}`
          }}</span>
        </div>

        <div class="orderProducts__prices">
          <span class="orderProducts__noAccent orderProducts__right"
            >Сумма</span
          >
          <span class="orderProducts__price orderProducts__right">{{
            item.discount
              ? `${currencyFormater(item.discount_price * item.count)}`
              : `${currencyFormater(item.price * item.count)}`
          }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
const { order } = defineProps(["order"]);

console.log(order.cart_list);
</script>

<style lang="scss" scoped>
.orderProducts {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: fit-content;

  &__item {
    display: grid;
    grid-template-columns: 100px 1fr;
    column-gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 60px 1fr;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 25%;
    column-gap: 10px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 5px;
    }
  }

  &__prices {
    display: grid;
    grid-template-columns: 1fr 25%;
    column-gap: 10px;
    row-gap: 10px;
    padding-top: 5px;
  }

  &__imageBox {
    width: 100px;
    height: 78px;
    border-radius: var(--border-radius-s);
    background: var(--mask-white-primary);
    overflow: hidden;

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__count {
    text-align: right;

    @media (max-width: 767px) {
      text-align: left;
    }
  }

  &__title {
    display: flex;
    gap: 10px;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 0;
    }
  }

  &__accent {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    vertical-align: bottom;
    color: var(--white-primary);

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__noAccent {
    font-family: "Inter-Regular", sans-serif;
    font-size: 12px;
    line-height: 14px;
    vertical-align: bottom;
    color: var(--mask-white-secondary);
  }

  &__right {
    text-align: right;
  }

  &__price {
    font-family: "Inter-Regular", sans-serif;
    font-size: 14px;
    line-height: 14px;
    vertical-align: bottom;
    color: var(--white-primary);
  }

  &__titleHeight {
    line-height: 20px;
  }
}
</style>
