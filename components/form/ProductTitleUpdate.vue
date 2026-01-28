<template>
  <form @submit.prevent="updateProductTitle" class="form-flex">
    <div class="form-title">
      Шаг 1 <span class="form-title form-title_second">(Название)</span>
    </div>

    <button v-if="!isFormEdit" class="form-top-button form-top-button_right">
      <IconEdit @click="isFormEdit = true" class="form-button-edit" />
    </button>

    <button v-if="isFormEdit" class="form-top-button form-top-button_left">
      <IconUndo @click="isFormEdit = false" class="form-button-edit" />
    </button>

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
      :isLoading="isLoading"
      :isActive="titleField && descriptionShortField"
      place="product"
    />

    <div class="mark">* - поля обязательны для заполнения</div>
  </form>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();

const isFormEdit = ref(false);
const isLoading = ref(false);
const titleField = ref(cakesStore.cake[0].title);
const descriptionShortField = ref(cakesStore.cake[0].description_short);

const updateProductTitle = async () => {
  try {
    isLoading.value = true;

    const formData = {
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
    };

    const result = await cakesStore.updateCakeTitle(formData);

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
