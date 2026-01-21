<template>
  <aside class="sidebar page-padding-x">
    <div class="sidebar__content">sideBar</div>
    <div>counter</div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 81px);
  border-right: 1px solid var(--border-primary);

  &__content {
    // border: 1px solid red;
  }
}
</style>
