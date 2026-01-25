<template>
  <button
    type="submit"
    :class="['formSubmit', { formSubmit_active: isActive }]"
    @click="$emit('handleClick')"
  >
    <LoaderButton v-if="isLoading" />
    <span v-else class="formSubmit__title">{{ title }}</span>
  </button>
</template>

<script setup>
const { title, isActive, isLoading } = defineProps([
  "title",
  "isActive",
  "isLoading",
]);

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formSubmit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: var(--mask-white-primary);
  border-radius: var(--border-radius-xs);
  transition: 0.2s ease;
  cursor: default;

  &_active {
    background: var(--red-primary);
    cursor: pointer;

    &:hover {
      background: var(--red-secondary);
    }
  }

  &__title {
    font-family: "Inter-Medium", sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    color: var(--white-primary);
  }
}
</style>
