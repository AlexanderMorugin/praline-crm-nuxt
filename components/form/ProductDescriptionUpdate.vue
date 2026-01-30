<template>
  <form
    @submit.prevent="updateProductDescription"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">Описание</div>

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
      label="Описание 1"
      type="text"
      name="descriptionOneField"
      placeholder="Описание продукта"
      v-model:value="descriptionOneField"
      @clearInput="descriptionOneField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextarea
      label="Описание 2"
      type="text"
      name="descriptionTwoField"
      placeholder="Описание продукта"
      v-model:value="descriptionTwoField"
      @clearInput="descriptionTwoField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextarea
      label="Описание 3"
      type="text"
      name="descriptionThreeField"
      placeholder="Описание продукта"
      v-model:value="descriptionThreeField"
      @clearInput="descriptionThreeField = null"
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
const descriptionOneField = ref(cakesStore.cake[0].description_one);
const descriptionTwoField = ref(cakesStore.cake[0].description_two);
const descriptionThreeField = ref(cakesStore.cake[0].description_three);

const updateProductDescription = async () => {
  try {
    isLoading.value = true;

    const formData = {
      description_one: descriptionOneField.value
        ? descriptionOneField.value.trim()
        : null,
      description_two: descriptionTwoField.value
        ? descriptionTwoField.value.trim()
        : null,
      description_three: descriptionThreeField.value
        ? descriptionThreeField.value.trim()
        : null,
    };

    const result = await cakesStore.updateCakeDescription(formData);

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

<!-- <style lang="scss" scoped>
.formAddingProduct {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style> -->
