<template>
  <form
    @submit.prevent="updateProductMeta"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">Мета данные</div>

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

    <!-- <div class="form-submited-text">
      <span class="form-submited-text-noAccent">Canonical URL: </span
      >{{ cakesStore.cake[0].meta_сanonical_url }}
    </div> -->

    <FormInput
      label="Meta Title"
      type="text"
      name="metaTitleField"
      placeholder="Meta Title продукта"
      v-model:value="metaTitleField"
      @clearInput="metaTitleField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextarea
      label="Meta Description"
      type="text"
      name="metaDescriptionField"
      placeholder="Meta Description продукта"
      v-model:value="metaDescriptionField"
      @clearInput="metaDescriptionField = null"
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
const metaTitleField = ref(cakesStore.cake[0].meta_title);
const metaDescriptionField = ref(cakesStore.cake[0].meta_description);

const updateProductMeta = async () => {
  try {
    isLoading.value = true;

    const formData = {
      meta_title: metaTitleField.value ? metaTitleField.value.trim() : null,
      meta_description: metaDescriptionField.value
        ? metaDescriptionField.value.trim()
        : null,
    };

    const result = await cakesStore.updateProductMeta(formData);

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
