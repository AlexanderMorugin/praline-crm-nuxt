<template>
  <form
    @submit.prevent="updateProductBadge"
    class="form-flex"
    :class="isFormOpen ? 'form-flex_open' : ''"
  >
    <div class="form-title">Значок</div>

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

    <span class="form-submited-text">Переключатель значка товара на сайте</span>

    <div v-if="isFormEdit" class="form-visibility">
      <div class="form-field-radio">
        <label class="form-label">Новинка</label>
        <input
          type="radio"
          name="badge"
          :checked="badgeField === 'Новинка'"
          class="form-button-radio"
          @click="badgeField = 'Новинка'"
        />
      </div>
      <div class="form-field-radio">
        <label class="form-label">Хит</label>
        <input
          type="radio"
          name="badge"
          :checked="badgeField === 'Хит'"
          class="form-button-radio"
          @click="badgeField = 'Хит'"
        />
      </div>
    </div>
    <div v-if="isFormEdit" class="form-visibility">
      <div class="form-field-radio">
        <label class="form-label">Выкл</label>
        <input
          type="radio"
          name="badge"
          :checked="!badgeField"
          class="form-button-radio"
          @click="badgeField = null"
        />
      </div>
    </div>

    <div v-else class="form-badge-submited">
      <span class="form-input-text-submited"
        >Сейчас {{ badgeField ? `"${badgeField}"` : "выключен" }}</span
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
const badgeField = ref(cakesStore.cake[0].badge);

const updateProductBadge = async () => {
  try {
    isLoading.value = true;

    const result = await cakesStore.updateProductBadge(badgeField.value);

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
