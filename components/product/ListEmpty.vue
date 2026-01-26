<template>
  <div class="productListEmpty">{{ title }}</div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.productListEmpty {
  font-family: "Inter-SemiBold", sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: var(--deep-blue-fourthly);
  text-align: center;
  padding: 20px;
}
</style>
