<template>
  <button class="buttonWithIcon" @click="emit('handleClick')">
    <IconMenu v-if="name === 'menu'" class="icon" />
    <IconArrowBack v-if="name === 'back'" class="icon" />
    <IconClose v-if="name === 'close'" class="icon" />
  </button>
</template>

<script setup>
const { name } = defineProps(["name"]);

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonWithIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: var(--border-radius-s);
  transition: 0.25s ease;

  &:hover {
    border: 1px solid var(--border-primary);
  }
}

.icon {
  width: 24px;
  height: 24px;
  fill: var(--black-primary);
}
.buttonWithIcon:hover .icon {
  animation: scale 0.3s ease-in-out;
}

@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
