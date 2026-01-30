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
    <FormProductRatingUpdate />
    <FormProductVisibilityUpdate />

    <!-- <ButtonManager
      name="delete"
      :isLoading="isLoading"
      @handleClick="deleteCake"
    /> -->
  </div>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();

const isLoading = ref(false);

const deleteCake = async () => {
  try {
    isLoading.value = true;

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
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.cakeCard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 40px;

  // &__buttons {
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   gap: 20px;
  //   border: 1px solid red;
  // }
}
</style>
