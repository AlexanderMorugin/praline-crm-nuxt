<template>
  <div>
    <ul class="orderManager">
      <li v-for="button in managerButtons" :key="button.id">
        <ButtonManager
          :title="button.title"
          :status="button.status"
          @handleClick="manageButtonClick(button.id)"
        />
      </li>
    </ul>

    <!-- Сайдбар для мобилки -->
    <Teleport to="#teleports">
      <Transition name="top">
        <ModalConfirm
          v-if="isMenuModalOpen"
          :isModalOpen="isMenuModalOpen"
          title="Подтвердить удаление"
          @yesClick="isMenuModalOpen = false"
          @noClick="isMenuModalOpen = false"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const managerButtons = ref([
  { id: 1, title: "Подтвердить", status: "done" },
  { id: 2, title: "Доставить", status: "deliver" },
  { id: 3, title: "Завершить", status: "pending" },
  { id: 4, title: "Удалить", status: "delete" },
]);

const isMenuModalOpen = ref(false);

const manageButtonClick = (id) => {
  if (id === 4) {
    isMenuModalOpen.value = true;
  }
};
</script>

<style lang="scss" scoped>
.orderManager {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__button {
    border: 1px solid red;
  }
}
</style>
