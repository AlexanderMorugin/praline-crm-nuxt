<template>
  <form
    @submit.prevent="updateProductSizes"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">Размеры</div>

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

    <div class="form-weight">
      <FormInput
        label="Вес (гр)"
        type="number"
        name="weightField"
        placeholder="Цифры"
        v-model:value="weightField"
        :isFormEdit="isFormEdit"
      />
      <FormInput
        label="Шир. (см)"
        type="number"
        name="widthField"
        placeholder="Цифры"
        v-model:value="widthField"
        :isFormEdit="isFormEdit"
      />
      <FormInput
        label="Выс. (см)"
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

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const weightField = ref(cakesStore.cake[0].weight);
const widthField = ref(cakesStore.cake[0].width);
const heightField = ref(cakesStore.cake[0].height);

const updateProductSizes = async () => {
  try {
    isLoading.value = true;

    const formData = {
      weight: weightField.value ? weightField.value : null,
      width: widthField.value ? widthField.value : null,
      height: heightField.value ? heightField.value : null,
    };

    const result = await cakesStore.updateProductSizes(formData);

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
