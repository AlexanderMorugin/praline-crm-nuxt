<template>
  <div class="cakeCard">
    <!-- {{ cakesStore.cake }} -->
    <span>{{ cakesStore.cake[0].id }}</span>
    <span>{{ cakesStore.cake[0].title }}</span>
    <span>{{ cakesStore.cake[0].slug }}</span>
    <button @click="deleteCake">Удалить</button>
  </div>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();

const deleteCake = async () => {
  try {
    const result = await cakesStore.deleteCake();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Торт удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Торт удален.",
      });
    }

    return navigateTo("/cakes");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.cakeCard {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
