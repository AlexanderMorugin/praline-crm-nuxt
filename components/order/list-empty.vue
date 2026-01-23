<template>
  <div class="orderListEmpty">
    <span class="orderListEmpty__title">У вас нет заказов</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.orderListEmpty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__title {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 2px;
    color: var(--deep-blue-thirdly);
    padding-top: 100px;
  }
}
</style>
