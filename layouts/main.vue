<template>
  <div class="mainLayout">
    <Header />
    <div class="mainLayout__content">
      <!-- Сайдбар для десктопа -->
      <ClientOnly>
        <Sidebar v-if="!isScreenMedium" place="desktop" />
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
    min-height: calc(100vh - 81px);

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      min-height: calc(100vh - 61px);
    }
  }

  &__main {
    width: 100%;
    background: var(--gradient-primary);
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
