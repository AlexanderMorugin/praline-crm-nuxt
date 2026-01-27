<template>
  <form @submit.prevent="updateProductDescription" class="form-flex">
    <div class="form-title">
      Шаг 4 <span class="form-title form-title_second">(Размеры)</span>
    </div>

    <button v-if="!isFormEdit" class="form-top-button form-top-button_right">
      <IconEdit @click="isFormEdit = true" class="form-button-edit" />
    </button>

    <button v-if="isFormEdit" class="form-top-button form-top-button_left">
      <IconUndo @click="isFormEdit = false" class="form-button-edit" />
    </button>

    <div class="form-grid">
      <FormInput
        label="Вес (гр)"
        type="number"
        name="weightField"
        placeholder="Цифры"
        v-model:value="weightField"
        :isFormEdit="isFormEdit"
      />
      <FormInput
        label="W (см)"
        type="number"
        name="widthField"
        placeholder="Цифры"
        v-model:value="widthField"
        :isFormEdit="isFormEdit"
      />
      <FormInput
        label="H (см)"
        type="number"
        name="heightField"
        placeholder="Цифры"
        v-model:value="heightField"
        :isFormEdit="isFormEdit"
      />
    </div>

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
const weightField = ref(cakesStore.cake[0].weight);
const widthField = ref(cakesStore.cake[0].width);
const heightField = ref(cakesStore.cake[0].height);

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
