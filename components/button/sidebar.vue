<template>
  <NuxtLink
    :to="button.path"
    class="buttonSidebar"
    @click="$emit('closeModal')"
    :class="[
      'buttonSidebar',
      { buttonSidebar_active: button.path === route.path },
    ]"
    >{{ button.title }}
  </NuxtLink>
</template>

<script setup>
const route = useRoute();

const { button } = defineProps(["button"]);
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.buttonSidebar {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: var(--border-radius-xs);
  border: 1px solid var(--border-primary);
  font-family: "Inter-SemiBold", sans-serif;
  font-size: 16px;
  color: var(--deep-blue-fourthly);

  padding: 14px 16px;

  &:hover {
    background: var(--gradient-primary);
  }

  &_active {
    background: var(--gradient-primary);
    box-shadow: var(--shadow-thirdly);
    cursor: auto;
  }
}
</style>
