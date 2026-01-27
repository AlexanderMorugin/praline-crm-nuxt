<template>
  <form @submit.prevent="updateProductDescription" class="form-flex">
    <div class="form-title">
      Шаг 2 <span class="form-title form-title_second">(Описание)</span>
    </div>

    <button v-if="!isFormEdit" class="form-top-button form-top-button_right">
      <IconEdit @click="isFormEdit = true" class="form-button-edit" />
    </button>

    <button v-if="isFormEdit" class="form-top-button form-top-button_left">
      <IconUndo @click="isFormEdit = false" class="form-button-edit" />
    </button>

    <FormInput
      label="Описание 1"
      type="text"
      name="descriptionOneField"
      placeholder="Описание продукта"
      v-model:value="descriptionOneField"
      @clearInput="descriptionOneField = null"
      :isFormEdit="isFormEdit"
    />
    <FormInput
      label="Описание 2"
      type="text"
      name="descriptionTwoField"
      placeholder="Описание продукта"
      v-model:value="descriptionTwoField"
      @clearInput="descriptionTwoField = null"
      :isFormEdit="isFormEdit"
    />
    <FormInput
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

const isFormEdit = ref(false);
const isLoading = ref(false);
const descriptionOneField = ref(cakesStore.cake[0].description_one);
const descriptionTwoField = ref(cakesStore.cake[0].description_two);
const descriptionThreeField = ref(cakesStore.cake[0].description_three);

const updateProductDescription = async () => {
  try {
    isLoading.value = true;

    const productData = {
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

    const result = await cakesStore.updateCakeDescription(productData);

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
