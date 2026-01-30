<template>
  <form
    @submit.prevent="updateProductPrice"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">Цена</div>

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
      <FormInput
        label="Цена со скидкой (₽)"
        name="discountPriceField"
        v-model:value="discountPriceField"
        :isFormEdit="false"
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
const priceField = ref(cakesStore.cake[0].price);
const discountField = ref(cakesStore.cake[0].discount);
const discountPriceField = computed(() =>
  discountField.value
    ? Math.round(
        priceField.value - (priceField.value * discountField.value) / 100,
      )
    : priceField.value,
);

const updateProductPrice = async () => {
  try {
    isLoading.value = true;

    const formData = {
      price: priceField.value ? priceField.value : 0,
      discount: discountField.value ? discountField.value : 0,
      discount_price: discountPriceField.value,
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

<!-- <style lang="scss" scoped>
.formAddingProduct {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style> -->
