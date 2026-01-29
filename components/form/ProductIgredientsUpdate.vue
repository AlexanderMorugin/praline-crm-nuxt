<template>
  <form
    @submit.prevent="updateProductIngredients"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">
      Шаг 6 <span class="form-title form-title_second">(Ингредиенты)</span>
    </div>

    <button
      type="button"
      v-if="!isFormEdit && isFormOpen"
      class="form-top-button form-top-button_right"
    >
      <IconEdit @click="isFormEdit = true" class="form-button-edit" />
    </button>

    <button
      type="button"
      v-if="isFormEdit && isFormOpen"
      class="form-top-button form-top-button_left"
    >
      <IconUndo @click="isFormEdit = false" class="form-button-edit" />
    </button>

    <button
      type="button"
      class="form-bottom-button"
      :class="isFormOpen ? 'form-bottom-button_open' : ''"
    >
      <IconArrowIos
        @click="isFormOpen = !isFormOpen"
        class="form-button-edit"
      />
    </button>

    <FormTextarea
      label="Ингредиенты"
      type="text"
      name="ingredientsField"
      placeholder="Ингредиенты"
      v-model:value="ingredientsField"
      @clearInput="ingredientsField = null"
      :isFormEdit="isFormEdit"
    />

    <FormSubmit
      v-if="isFormEdit"
      :isLoading="isLoading"
      isActive="true"
      place="product"
    />
  </form>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const ingredientsField = ref(cakesStore.cake[0].ingredients);

const updateProductIngredients = async () => {
  try {
    isLoading.value = true;

    const formData = {
      ingredients: ingredientsField.value
        ? ingredientsField.value.trim()
        : null,
    };

    const result = await cakesStore.updateProductIngredients(formData);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Изменения выполнить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Изменения сделаны.",
      });

      isFormEdit.value = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.formAddingProduct {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
