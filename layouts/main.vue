<template>
  <div class="mainLayout">
    <Header />
    <div class="mainLayout__content">
      <ClientOnly>
        <Sidebar v-if="!isScreenMedium" />
      </ClientOnly>
      <main class="mainLayout__main page-padding-x">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
const { isScreenMedium } = useResizeMedium();
</script>

<style lang="scss" scoped>
.mainLayout {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--screen-xxl);
  min-height: 100vh;
  border-left: 1px solid var(--border-primary);
  border-right: 1px solid var(--border-primary);
  margin: 0 auto;

  &__content {
    display: grid;
    grid-template-columns: 320px 1fr;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__main {
    width: 100%;
    height: calc(100vh - 81px);
    background: var(--gradient-primary);

    @media (max-width: 767px) {
      height: calc(100vh - 61px);
    }
  }
}
</style>
