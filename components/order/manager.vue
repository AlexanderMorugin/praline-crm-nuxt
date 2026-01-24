<template>
  <ul class="orderManager">
    <li>
      <ButtonManager
        name="accept"
        :status="orderStore.order.status_accept"
        @handleClick="acceptOrder"
      />
    </li>
    <li>
      <ButtonManager
        name="delivery"
        :status="orderStore.order.status_delivery"
        @handleClick="deliveryOrder"
      />
    </li>
    <li>
      <ButtonManager
        name="complete"
        :status="orderStore.order.status_complete"
        @handleClick="completeOrder"
      />
    </li>
    <li>
      <ButtonManager name="delete" @handleClick="isConfirmModalOpen = true" />
    </li>

    <!-- Модалка подтверждения -->
    <Teleport to="#teleports">
      <Transition name="top">
        <ModalConfirm
          v-if="isConfirmModalOpen"
          :isModalOpen="isMenuModalOpen"
          title="Подтвердить удаление"
          :isLoading="isLoading"
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
const { date } = useDate();

const isLoading = ref(false);

const isConfirmModalOpen = ref(false);

const acceptOrder = async () => {
  try {
    isLoading.value = true;

    const result = await orderStore.updateStatusAcceptOrder(date);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Заказ принять не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Заказ принят.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

const deliveryOrder = async () => {
  try {
    isLoading.value = true;

    const result = await orderStore.updateStatusDeliveryOrder(date);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Доставку подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Доставка подтверждена.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

const completeOrder = async () => {
  try {
    isLoading.value = true;

    const result = await orderStore.updateStatusCompleteOrder(date);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Завершение подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Заказ завершен.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
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
    gap: 20px;
  }
}
</style>
