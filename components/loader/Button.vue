<template>
  <div class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  width: 20px;
  height: 20px;
  border: 2px dotted var(--white-primary);
  border-radius: var(--border-radius-full);
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
