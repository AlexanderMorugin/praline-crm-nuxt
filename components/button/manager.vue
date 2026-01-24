<template>
  <div>
    <button
      v-if="!status"
      :class="['buttonManager', { buttonManager_delete: name === 'delete' }]"
      @click="emit('handleClick')"
    >
      <span class="buttonManager__title">
        {{
          name === "accept"
            ? "Принять"
            : name === "delivery"
            ? "Доставить"
            : name === "complete"
            ? "Завершить"
            : name === "delete"
            ? "Удалить"
            : ""
        }}</span
      >
    </button>

    <div
      v-if="status && name !== 'delete'"
      class="buttonManager buttonManager_active"
    >
      <button class="buttonManager__undo">
        <IconUndo class="buttonManager__icon" />
      </button>

      <span class="buttonManager__titleActive">{{
        name === "accept"
          ? "Принят"
          : name === "delivery"
          ? "Доставляется"
          : name === "complete"
          ? "Завершен"
          : ""
      }}</span>
      <span class="buttonManager__status">{{
        name === "delete" ? "" : status
      }}</span>
    </div>
  </div>
</template>

<script setup>
const { name, status } = defineProps(["name", "status"]);
const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonManager {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 72px;
  border-radius: var(--border-radius-xs);
  background: var(--green-fourthly);
  padding: 10px;

  &:hover {
    background: var(--green-thirdly);
  }

  &_active {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;
    background: var(--mask-black-primary);

    &:hover {
      background: var(--mask-black-primary);
    }
  }

  &__title {
    font-family: "Inter-Medium", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    text-align: center;
    color: var(--white-primary);
  }

  &__titleActive {
    font-family: "Inter-Regular", sans-serif;
    font-size: 14px;
    text-align: center;
    color: var(--black-primary);
  }

  &__status {
    font-family: "Inter-Regular", sans-serif;
    font-size: 12px;
    text-align: center;
    color: var(--black-primary);
  }

  &_delete {
    background: var(--red-primary);

    &:hover {
      background: var(--red-secondary);
    }
  }

  &__undo {
    position: absolute;
    bottom: 5px;
    right: 5%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--deep-blue-thirdly);
  }

  &__icon {
    width: 16px;
    height: 16px;
    fill: var(--white-primary);
  }
}
</style>
