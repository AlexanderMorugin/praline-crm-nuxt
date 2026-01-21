<template>
  <span class="headerTitle">{{
    route.path === "/"
      ? "Главная"
      : route.path === "/orders"
      ? "Заказы"
      : route.path === "/cakes"
      ? "Торты"
      : route.path === "/pastry"
      ? "Пирожные"
      : route.path === "/comments"
      ? "Отзывы"
      : route.path === "/info"
      ? "Информация"
      : ""
  }}</span>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
.headerTitle {
  font-family: "Inter-SemiBold", sans-serif;
  font-size: 24px;
  color: var(--deep-blue-secondary);

  @media (max-width: 767px) {
    font-size: 18px;
  }
}
</style>
