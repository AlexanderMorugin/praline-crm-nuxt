<template>
  <div class="cakeCard">
    <FormProductTitleUpdate />
    <FormProductDescriptionUpdate />
    <FormProductImageUpdate />
    <FormProductMetaUpdate />
    <FormProductSizesUpdate />
    <FormProductPriceUpdate />
    <FormProductIgredientsUpdate />
    <FormProductNutritionalUpdate />
    <FormProductVisibilityUpdate />

    <div class="cakeCard__buttons">
      <!-- <button @click="deleteCake">Видимость</button> -->
      <!-- <button @click="deleteCake">Удалить</button> -->
      <ButtonManager name="delivery" />
      <ButtonManager name="delete" @handleClick="deleteCake" />
    </div>
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
  padding-bottom: 40px;

  &__buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    border: 1px solid red;
  }
}
</style>
