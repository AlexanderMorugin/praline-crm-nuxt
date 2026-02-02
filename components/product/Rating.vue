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
  gap: 5px;

  &__starBox {
    width: 20px;
    height: 34px;
  }

  &__star {
    width: 20px;
    height: 20px;
    color: var(--mask-black-secondary);

    &_active {
      color: var(--mask-black-secondary);
      fill: var(--orange-primary);
    }
  }
}
</style>
