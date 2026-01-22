<template>
  <header class="header">
    <HeaderLogo v-if="!isScreenMedium" />

    <div class="header__content page-padding-x">
      <ButtonWithIcon
        v-if="isScreenMedium"
        name="menu"
        @handleClick="isMenuModalOpen = true"
      />

      <HeaderTitle />
      <ButtonWithIcon
        v-if="route.path === `/orders/${route.params.id}`"
        name="back"
        @handleClick="router.go(-1)"
      />
    </div>

    <!-- Сайдбар для мобилки -->
    <Teleport to="#teleports">
      <Transition name="left">
        <ModalHeader
          v-if="isMenuModalOpen"
          :isModalOpen="isMenuModalOpen"
          place="left"
          title="Меню"
          @closeModal="isMenuModalOpen = false"
        />
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { isScreenMedium } = useResizeMedium();

const isMenuModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 320px 1fr;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid var(--border-primary);

  @media (max-width: 1024px) {
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
