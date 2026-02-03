<template>
  <ul class="productRating">
    <li v-for="i in maxStars" :key="i" class="productRating__starBox">
      <IconStar
        :class="[
          'productRating__star',
          i <= rating ? 'productRating__star_active' : '',
        ]"
      />
    </li>
  </ul>
</template>

<script setup>
const { rating, maxStars } = defineProps(["rating", "maxStars"]);
</script>

<style lang="scss" scoped>
.productRating {
  display: flex;
  align-items: center;
  gap: 1px;
  height: 20px;

  @media (max-width: 767px) {
    gap: 0;
    height: 18px;
  }

  &__starBox {
    width: 20px;

    @media (max-width: 767px) {
      width: 12px;
    }
  }

  &__star {
    width: 20px;
    height: 20px;
    color: var(--mask-black-secondary);

    @media (max-width: 767px) {
      width: 12px;
      height: 12px;
    }

    &_active {
      color: var(--mask-black-secondary);
      fill: var(--orange-primary);
    }
  }
}
</style>
