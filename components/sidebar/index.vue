<template>
  <aside class="sidebar">
    <div>sideBar</div>
    <div>counter</div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: calc(100vh - 81px);
  border-right: 1px solid var(--border-primary);
  // border: 1px solid red;

  // @media (max-width: 1024px) {
  //   max-width: 100%;
  //   border-right: none;
  // }

  // &__content {
  //   height: 100%;
  //   border-right: 1px solid var(--border-primary);
  // }
}
</style>
