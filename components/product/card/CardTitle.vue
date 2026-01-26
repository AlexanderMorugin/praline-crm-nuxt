<template>
  <ProductCardBlock>
    <div>
      <span class="cardTitle__noAccent">ID: </span>{{ cakesStore.cake[0].id }}
    </div>
    <div>
      <span class="cardTitle__noAccent">Наименование: </span>
      <span class="cardTitle__accent">{{ cakesStore.cake[0].title }}</span>
    </div>

    <div>
      <span class="cardTitle__noAccent"
        >Адрес: http://localhost:3000/cakes/</span
      >{{ cakesStore.cake[0].slug }}
    </div>
    <div>
      <span class="cardTitle__noAccent">Краткое описание: </span>

      {{ cakesStore.cake[0].description_short }}
    </div>
  </ProductCardBlock>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.cardTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &__left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__accent {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    color: var(--white-primary);
  }

  &__noAccent {
    font-family: "Inter-Regular", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: var(--mask-white-primary);
  }
}
</style>
