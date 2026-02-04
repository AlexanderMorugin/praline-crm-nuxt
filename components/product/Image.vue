<template>
  <div class="productImage">
    <img :src="src" :alt="alt" class="productImage__pic" />
  </div>
</template>

<script setup>
const { src, alt } = defineProps(["src", "alt"]);
</script>

<style lang="scss" scoped>
.productImage {
  width: 100px;
  height: 78px;
  border-radius: var(--border-radius-s);
  background: var(--mask-white-primary);
  overflow: hidden;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }

  &__pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
