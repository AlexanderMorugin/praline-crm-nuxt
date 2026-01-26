<template>
  <form @submit.prevent="submitCakeTitle" class="form-flex">
    <div class="form-title">Шаг первый</div>
    <FormInput
      label="Адрес на английском без пробелов * "
      type="text"
      name="slugField"
      placeholder="napoleon - например"
      v-model:value="slugField"
      @clearInput="slugField = null"
    />
    <FormInput
      label="Наименование * "
      type="text"
      name="titleField"
      placeholder="Название продукта"
      v-model:value="titleField"
      @clearInput="titleField = null"
    />
    <FormInput
      label="Короткое описание * "
      type="text"
      name="descriptionShortField"
      placeholder="1 или 2 коротких предложения"
      v-model:value="descriptionShortField"
      @clearInput="descriptionShortField = null"
    />

    <FormSubmit
      :isActive="slugField && titleField && descriptionShortField"
      title="Создать"
    />

    <div class="mark">
      * - поля должны быть уникальными и они обязательны для заполнения
    </div>
  </form>
</template>

<script setup>
const cakesStore = useCakesStore();

const isLoading = ref(false);
const slugField = ref("");
const titleField = ref("");
const descriptionShortField = ref("");

const submitCakeTitle = async () => {
  try {
    isLoading.value = true;

    const cakeTitleData = {
      slug: slugField.value.trim(),
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
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
