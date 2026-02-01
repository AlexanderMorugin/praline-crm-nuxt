<template>
  <ul v-if="cakesStore.cakes.length" class="cakeList">
    <li v-for="cake in cakesStore.cakes" :key="cake.id" class="cakeList__cake">
      <NuxtLink :to="`/cakes/${cake.slug}`" class="cakeList__link">
        <span> {{ cake.id }}</span>
        <span> {{ cake.title }}</span>
        <span> {{ cake.slug }}</span>
        <!-- <span> {{ cake.meta_title }}</span> -->
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.cakeList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 20px;

  &__cake {
    background: var(--deep-blue-fourthly);
    border-radius: var(--border-radius-xs);
    padding: 20px;
    transition: 0.2s ease;

    &:hover {
      background: var(--deep-blue-thirdly);
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    color: white;
  }
}
</style>
