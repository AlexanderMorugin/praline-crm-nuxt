<template>
  <header class="header">
    <HeaderLogo v-if="!isScreenMedium" />

    <div class="header__content page-padding-x">
      <ButtonWithIcon v-if="isScreenMedium" name="menu" />
      <span>HEADER</span>
      <ButtonWithIcon name="back" />
    </div>
  </header>
</template>

<script setup>
const { isScreenMedium } = useResizeMedium();
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 320px 1fr;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid var(--border-primary);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    height: 60px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
