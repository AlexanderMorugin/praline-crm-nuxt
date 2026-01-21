<template>
  <ul class="sidebarMenu">
    <li v-for="button in sidebarMenu" :key="button.id">
      <ButtonSidebar :button="button" @closeModal="$emit('closeModal')" />
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const sidebarMenu = ref([
  {
    id: 1,
    title: "Главная",
    path: "/",
    status: false,
  },
  {
    id: 2,
    title: "Заказы",
    path: "/orders",
    status: false,
  },
  {
    id: 3,
    title: "Торты",
    path: "/cakes",
    status: false,
  },
  {
    id: 4,
    title: "Пирожные",
    path: "/pastry",
    status: false,
  },
  {
    id: 5,
    title: "Отзывы",
    path: "/comments",
    status: false,
  },
  {
    id: 6,
    title: "Информация",
    path: "/info",
    status: false,
  },
]);
</script>

<style lang="scss" scoped>
.sidebarMenu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  // border: 1px solid red;
}
</style>
