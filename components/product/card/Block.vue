<template>
  <div class="productBlock">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.productBlock {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: var(--deep-blue-fourthly);
  border-radius: var(--border-radius-l);
  font-family: "Inter-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--white-primary);
  padding: 20px;

  @media (max-width: 767px) {
    padding: 20px 10px;
  }
}
</style>
