<template>
  <form @submit.prevent="createProductTitle" class="form-flex">
    <div class="form-title">
      Шаг 1 <span class="form-title form-title_second">(Название)</span>
    </div>
    <FormInput
      label="Адрес на английском без пробелов * "
      type="text"
      name="slugField"
      placeholder="napoleon - например"
      v-model:value="slugField"
      @clearInput="slugField = null"
      isFormEdit="true"
    />
    <FormInput
      label="Наименование * "
      type="text"
      name="titleField"
      placeholder="Название продукта"
      v-model:value="titleField"
      @clearInput="titleField = null"
      isFormEdit="true"
    />
    <FormInput
      label="Краткое описание * "
      type="text"
      name="descriptionShortField"
      placeholder="1 или 2 коротких предложения"
      v-model:value="descriptionShortField"
      @clearInput="descriptionShortField = null"
      isFormEdit="true"
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
const toast = useToast();
const cakesStore = useCakesStore();

const isLoading = ref(false);
const slugField = ref("");
const titleField = ref("");
const descriptionShortField = ref("");

const createProductTitle = async () => {
  try {
    isLoading.value = true;

    const formData = {
      slug: slugField.value.trim(),
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
    };

    const result = await cakesStore.createCakeTitle(formData);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Создать продукт не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Продукт создан.",
      });

      return navigateTo(`/cakes/${slugField.value.toLowerCase().trim()}`);
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>
