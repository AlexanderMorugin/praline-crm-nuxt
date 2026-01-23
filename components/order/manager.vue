<template>
  <ul class="orderManager">
    <li v-for="button in managerButtons" :key="button.id">
      <ButtonManager
        :title="button.title"
        :status="button.status"
        @handleClick="manageButtonClick(button.id)"
      />
    </li>

    <!-- Модалка подтверждения -->
    <Teleport to="#teleports">
      <Transition name="top">
        <ModalConfirm
          v-if="isConfirmModalOpen"
          :isModalOpen="isMenuModalOpen"
          title="Подтвердить удаление"
          @yesClick="deleteOrder"
          @noClick="isConfirmModalOpen = false"
        />
      </Transition>
    </Teleport>
  </ul>
</template>

<script setup>
const toast = useToast();
const orderStore = useOrdersStore();

const isLoading = ref(false);
const managerButtons = ref([
  { id: 1, title: "Подтвердить", status: "done" },
  { id: 2, title: "Доставить", status: "deliver" },
  { id: 3, title: "Завершить", status: "pending" },
  { id: 4, title: "Удалить", status: "delete" },
]);

const isConfirmModalOpen = ref(false);

const manageButtonClick = (id) => {
  if (id === 4) {
    isConfirmModalOpen.value = true;
  }
};

const deleteOrder = async () => {
  try {
    isLoading.value = true;

    const result = await orderStore.deleteOrder();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Заказ удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Заказ удален.",
      });
    }

    return navigateTo("/orders");
  } catch (err) {
    console.log(err);
  } finally {
    isConfirmModalOpen.value = false;
    isLoading.value = false;
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
