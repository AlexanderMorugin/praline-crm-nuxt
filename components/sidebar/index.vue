<template>
  <aside :class="['sidebar', { 'page-padding-x': place === 'desktop' }]">
    <div class="sidebar__content">
      <SidebarMenu @closeModal="$emit('closeModal')" />
    </div>
    <div>counter</div>
  </aside>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const { place } = defineProps(["place"]);
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 81px);
  border-right: 1px solid var(--border-primary);
  padding-top: 20px;

  @media (max-width: 1024px) {
    border-right: none;
  }

  &__content {
    // border: 1px solid red;
  }
}
</style>
