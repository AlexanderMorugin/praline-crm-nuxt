<template>
  <header class="header">
    <HeaderLogo />
    HEADER
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  // position: sticky;
  // top: 0;
  display: flex;
  // align-items: center;
  // width: 100%;
  height: 80px;

  // animation: filter 3s ease;
  // backdrop-filter: blur(15px) grayscale(50%);
  border-bottom: 1px solid var(--border-primary);
  // padding-left: 8px;
  // padding-right: 8px;
  // z-index: 3;

  // border: 1px solid red;

  @media (max-width: 767px) {
    height: 60px;
  }
}
</style>
