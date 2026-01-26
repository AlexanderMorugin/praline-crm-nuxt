<template>
  <div class="cakeCard">
    <ProductCardTitle />
    <FormProductTitleUpdate />
    <!-- <ProductCardTitle /> -->
    <!-- {{ cakesStore.cake }} -->
    <!-- <span>cake.id: {{ cakesStore.cake[0].id }}</span>
    <span>cake.slug: {{ cakesStore.cake[0].slug }}</span>
    <span>cake.title: {{ cakesStore.cake[0].title }}</span>
    <span
      >cake.description_short: {{ cakesStore.cake[0].description_short }}</span
    >
    <span>cake.description_one: {{ cakesStore.cake[0].description_one }}</span>
    <span>cake.description_two: {{ cakesStore.cake[0].description_two }}</span>
    <span
      >cake.description_three: {{ cakesStore.cake[0].description_three }}</span
    >

    <span>cake.meta_title: {{ cakesStore.cake[0].meta_title }}</span>
    <span
      >cake.meta_description: {{ cakesStore.cake[0].meta_description }}</span
    >
    <span
      >cake.meta_сanonical_url:
      {{ cakesStore.cake[0].meta_сanonical_url }}</span
    >

    <span>cake.weight: {{ cakesStore.cake[0].weight }}</span>
    <span>cake.width: {{ cakesStore.cake[0].width }}</span>
    <span>cake.height: {{ cakesStore.cake[0].height }}</span>

    <span>cake.ingredients: {{ cakesStore.cake[0].ingredients }}</span>
    <span>cake.protein: {{ cakesStore.cake[0].protein }}</span>
    <span>cake.fat: {{ cakesStore.cake[0].fat }}</span>
    <span>cake.carbohydrates: {{ cakesStore.cake[0].carbohydrates }}</span>
    <span>cake.calories: {{ cakesStore.cake[0].calories }}</span>

    <span>Создан: {{ cakesStore.cake[0].createdAt }}</span>
    <span>Редактирован: {{ cakesStore.cake[0].updatedAt }}</span> -->

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
  gap: 20px;
}
</style>
