<template>
  <div
    :class="[
      'modalHeader page-padding-x',
      { modalHeader_left: place === 'left' },
      { modalHeader_right: place === 'right' },
    ]"
    click.stop
  >
    <div class="modalHeader__container">
      <div class="modalHeader__top">
        <ButtonWithIcon name="back" @click="$emit('closeModal')" />
        <span class="modalHeader__topTitle">{{ title }}</span>
      </div>

      <Sidebar @closeModal="$emit('closeModal')" />
    </div>
  </div>
</template>

<script setup>
const { isModalOpen, place, title } = defineProps([
  "isModalOpen",
  "place",
  "title",
]);
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalHeader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--white-primary);
  padding-top: 10px;
  padding-bottom: 10px;
  overflow-y: auto;
  z-index: 1;

  &_left {
    left: 0;
  }

  &_right {
    right: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 100%;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__topTitle {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
