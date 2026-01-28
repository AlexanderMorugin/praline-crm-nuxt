<template>
  <form @submit.prevent="updateProductPrice" class="form-flex">
    <div class="form-title">
      Шаг 5 <span class="form-title form-title_second">(Цена)</span>
    </div>

    <button v-if="!isFormEdit" class="form-top-button form-top-button_right">
      <IconEdit @click="isFormEdit = true" class="form-button-edit" />
    </button>

    <button v-if="isFormEdit" class="form-top-button form-top-button_left">
      <IconUndo @click="isFormEdit = false" class="form-button-edit" />
    </button>

    <div class="form-weight">
      <FormInput
        label="Цена (₽)"
        type="number"
        name="priceField"
        placeholder="Цифры"
        v-model:value="priceField"
        :isFormEdit="isFormEdit"
      />
      <FormInput
        label="Скидка (%)"
        type="number"
        name="discountField"
        placeholder="Цифры"
        v-model:value="discountField"
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
const priceField = ref(cakesStore.cake[0].price);
const discountField = ref(cakesStore.cake[0].discount);

const updateProductPrice = async () => {
  try {
    isLoading.value = true;

    const formData = {
      price: priceField.value ? priceField.value : null,
      discount: discountField.value ? discountField.value : null,
    };

    const result = await cakesStore.updateProductPrice(formData);

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
