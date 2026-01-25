<template>
  <form @submit.prevent="submitCakeTitle" class="form-flex">
    <div class="form-title">Заголовки и описание торта</div>
    <FormInput
      label="Главный Title"
      type="text"
      name="titleField"
      placeholder="Title продукта"
      v-model:value="titleField"
      @clearInput="titleField = null"
    />
    <FormInput
      label="Slug"
      type="text"
      name="slugField"
      placeholder="Slug продукта"
      v-model:value="slugField"
      @clearInput="slugField = null"
    />

    <FormSubmit :isActive="titleField && slugField" title="Сохранить" />
  </form>
</template>

<script setup>
const cakesStore = useCakesStore();

const isLoading = ref(false);
const titleField = ref("");
const slugField = ref("");

const submitCakeTitle = async () => {
  try {
    isLoading.value = true;

    const cakeTitleData = {
      title: titleField.value.trim(),
      slug: slugField.value.trim(),
    };

    const result = await cakesStore.createCakeTitle(cakeTitleData);
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
