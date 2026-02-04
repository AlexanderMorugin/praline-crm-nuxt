<template>
  <NuxtLink
    :to="`/${product.type}/${product.slug}`"
    class="productListCard"
    :class="product.visibility ? 'productListCard_active' : ''"
  >
    <ProductImage :src="product.image_1_small" :alt="product.title" />
    <span class="productListCard__title"> {{ product.title }}</span>

    <IconVisibility v-if="product.visibility" class="productListCard__icon" />
    <IconVisibilityOff v-else class="productListCard__icon" />
  </NuxtLink>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.productListCard {
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  height: 100%;
  background: var(--deep-blue-fourthly);
  border-radius: var(--border-radius-l);
  padding: 20px;
  transition: 0.2s ease;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  &:hover {
    background: var(--deep-blue-thirdly);
  }

  &_active {
    background: var(--mask-blue-secondary);
  }

  &__title {
    font-family: "Inter-Medium", sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: var(--white-primary);
    padding-right: 60px;

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
      padding-right: 0;
    }
  }

  &__icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    fill: var(--white-primary);

    @media (max-width: 767px) {
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
