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
      <button
        v-if="undoStatus"
        class="buttonManager__undo"
        @click="emit('handleUndo')"
      >
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
const { name, status, undoStatus } = defineProps([
  "name",
  "status",
  "undoStatus",
]);
const emit = defineEmits(["handleClick", "handleUndo"]);
</script>

<style lang="scss" scoped>
.buttonManager {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  border-radius: var(--border-radius-xs);
  background: var(--green-fourthly);
  padding: 10px;

  @media (max-width: 767px) {
    min-height: 80px;
  }

  &:hover {
    background: var(--green-thirdly);
  }

  &_active {
    position: relative;
    flex-direction: column;
    gap: 6px;
    background: var(--mask-black-primary);

    &:hover {
      background: var(--mask-black-primary);
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
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
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
