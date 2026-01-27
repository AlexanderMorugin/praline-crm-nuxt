<template>
  <form @submit.prevent="updateProductTitle" class="form-flex">
    <IconEdit
      v-if="!isFormEdit"
      @click="isFormEdit = true"
      class="form-button-edit"
    />
    <div class="form-submited-text">
      <span class="form-submited-text-noAccent">ID: </span
      >{{ cakesStore.cake[0].id }}
    </div>

    <div class="form-submited-text">
      <span class="form-submited-text-noAccent"
        >Адрес: http://localhost:3020/cakes/</span
      >{{ cakesStore.cake[0].slug }}
    </div>

    <FormInput
      label="Наименование * "
      type="text"
      name="titleField"
      placeholder="Название продукта"
      v-model:value="titleField"
      @clearInput="titleField = null"
      :isFormEdit="isFormEdit"
    />
    <FormInput
      label="Краткое описание * "
      type="text"
      name="descriptionShortField"
      placeholder="1 или 2 коротких предложения"
      v-model:value="descriptionShortField"
      @clearInput="descriptionShortField = null"
      :isFormEdit="isFormEdit"
    />

    <FormSubmit
      v-if="isFormEdit"
      :isActive="slugField && titleField && descriptionShortField"
      title="Сохранить"
    />

    <div v-if="isFormEdit" class="mark">
      * - поля должны быть уникальными и они обязательны для заполнения
    </div>
  </form>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();

const isFormEdit = ref(false);
const isLoading = ref(false);
const slugField = ref(cakesStore.cake[0].slug);
const titleField = ref(cakesStore.cake[0].title);
const descriptionShortField = ref(cakesStore.cake[0].description_short);

const updateProductTitle = async () => {
  try {
    isLoading.value = true;

    const cakeTitleData = {
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
    };

    const result = await cakesStore.updateCakeTitle(cakeTitleData);

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
