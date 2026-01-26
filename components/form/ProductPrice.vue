<template>
  <form @submit.prevent="submitCakeTitle" class="form-flex">
    <div class="form-title">Цена, скидка, Рейтинг, скидка, бейдж</div>
    <FormInput
      label="Slug"
      type="text"
      name="slugField"
      placeholder="Slug продукта"
      v-model:value="slugField"
      @clearInput="slugField = null"
    />
    <FormInput
      label="Главный Title"
      type="text"
      name="titleField"
      placeholder="Title продукта"
      v-model:value="titleField"
      @clearInput="titleField = null"
    />
    <FormInput
      label="Короткий Description"
      type="text"
      name="descriptionShortField"
      placeholder="Короткий Description продукта"
      v-model:value="descriptionShortField"
      @clearInput="descriptionShortField = null"
    />
    <FormInput
      label="Первый Description"
      type="text"
      name="descriptionOneField"
      placeholder="Первый Description продукта"
      v-model:value="descriptionOneField"
      @clearInput="descriptionOneField = null"
    />
    <FormInput
      label="Второй Description"
      type="text"
      name="descriptionTwoField"
      placeholder="Второй Description продукта"
      v-model:value="descriptionTwoField"
      @clearInput="descriptionTwoField = null"
    />
    <FormInput
      label="Третий Description"
      type="text"
      name="descriptionThreeField"
      placeholder="Третий Description продукта"
      v-model:value="descriptionThreeField"
      @clearInput="descriptionThreeField = null"
    />
    <FormInput
      label="Meta Title"
      type="text"
      name="metaTitleField"
      placeholder="Meta Title продукта"
      v-model:value="metaTitleField"
      @clearInput="metaTitleField = null"
    />
    <FormInput
      label="Meta Description"
      type="text"
      name="metaDescriptionField"
      placeholder="Meta Description продукта"
      v-model:value="metaDescriptionField"
      @clearInput="metaDescriptionField = null"
    />

    <FormInput
      label="Вес"
      type="number"
      name="weightField"
      placeholder="Вес продукта"
      v-model:value="weightField"
    />
    <FormInput
      label="Ширина"
      type="number"
      name="widthField"
      placeholder="Ширина продукта"
      v-model:value="widthField"
    />
    <FormInput
      label="Высота"
      type="number"
      name="heightField"
      placeholder="Высота продукта"
      v-model:value="heightField"
    />

    <FormInput
      label="Ингредиенты"
      type="text"
      name="ingredientsField"
      placeholder="Ингредиенты продукта"
      v-model:value="ingredientsField"
      @clearInput="ingredientsField = null"
    />
    <FormInput
      label="Белки"
      type="text"
      name="proteinField"
      placeholder="Белки продукта"
      v-model:value="proteinField"
      @clearInput="proteinField = null"
    />
    <FormInput
      label="Жир"
      type="text"
      name="fatField"
      placeholder="Жир продукта"
      v-model:value="fatField"
      @clearInput="fatField = null"
    />
    <FormInput
      label="Углеводы"
      type="text"
      name="carbohydratesField"
      placeholder="Углеводы продукта"
      v-model:value="carbohydratesField"
      @clearInput="carbohydratesField = null"
    />
    <FormInput
      label="Каллории"
      type="text"
      name="caloriesField"
      placeholder="Каллории продукта"
      v-model:value="caloriesField"
      @clearInput="caloriesField = null"
    />

    <FormSubmit :isActive="titleField && slugField" title="Сохранить" />
  </form>
</template>

<script setup>
const cakesStore = useCakesStore();

const isLoading = ref(false);
const slugField = ref("");
const titleField = ref("");
const descriptionShortField = ref("");
const descriptionOneField = ref("");
const descriptionTwoField = ref("");
const descriptionThreeField = ref("");

const metaTitleField = ref("");
const metaDescriptionField = ref("");

const weightField = ref(null);
const widthField = ref(null);
const heightField = ref(null);

const ingredientsField = ref("");
const proteinField = ref("");
const fatField = ref("");
const carbohydratesField = ref("");
const caloriesField = ref("");

const submitCakeTitle = async () => {
  try {
    isLoading.value = true;

    const cakeTitleData = {
      slug: slugField.value.trim(),
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
      description_one: descriptionOneField.value.trim(),
      description_two: descriptionTwoField.value.trim(),
      description_three: descriptionThreeField.value.trim(),

      meta_title: metaTitleField.value.trim(),
      meta_description: metaDescriptionField.value.trim(),

      weight: weightField.value,
      width: widthField.value,
      height: heightField.value,

      ingredients: ingredientsField.value.trim(),
      protein: proteinField.value.trim(),
      fat: fatField.value.trim(),
      carbohydrates: carbohydratesField.value.trim(),
      calories: caloriesField.value.trim(),
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
