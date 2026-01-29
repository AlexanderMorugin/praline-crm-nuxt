<template>
  <form
    @submit.prevent="updateProductVisibility"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">Видимость</div>

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

    <span class="form-submited-text"
      >Переключатель видимости товара на сайте</span
    >

    <div v-if="isFormEdit" class="form-visibility">
      <div class="form-field-radio">
        <label class="form-label">Вкл</label>
        <input
          type="radio"
          name="visibility"
          :checked="visibilityField"
          class="form-button-radio"
          @click="visibilityField = true"
        />
      </div>
      <div class="form-field-radio">
        <label class="form-label">Выкл</label>
        <input
          type="radio"
          name="visibility"
          :checked="!visibilityField"
          class="form-button-radio"
          @click="visibilityField = false"
        />
      </div>
    </div>

    <div v-else class="form-input-submited">
      <span class="form-input-text-submited"
        >Сейчас {{ visibilityField ? "виден" : "не виден" }}</span
      >
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
const visibilityField = ref(cakesStore.cake[0].visibility);

const updateProductVisibility = async () => {
  try {
    isLoading.value = true;

    const result = await cakesStore.updateProductVisibility(
      visibilityField.value,
    );

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
