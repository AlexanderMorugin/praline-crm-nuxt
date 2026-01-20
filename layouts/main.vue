<template>
  <div class="mainLayout">
    <Header />
    <div class="mainLayout__content">
      <Sidebar />
      <main class="mainLayout__main">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

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
    display: flex;
  }

  &__main {
    width: 100%;
    // height: 100%;
    height: calc(100vh - 81px);
    background: var(--gradient-primary);
    // border: 1px solid red;
  }
}
</style>
