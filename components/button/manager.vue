<template>
  <div>
    <!-- <div
      v-if="status === 'pending' || status === 'done'"
      class="buttonManager buttonManager_done"
    >
      {{ title }}
    </div>
    <button
      v-if="
        status === 'cofirm' ||
        status === 'deliver' ||
        status === 'complete' ||
        status === 'delete'
      "
      :class="['buttonManager', { buttonManager_delete: status === 'delete' }]"
      @click="emit('handleClick')"
    >
      {{ title }}
    </button> -->

    <button
      :class="['buttonManager', { buttonManager_delete: status === 'delete' }]"
      @click="emit('handleClick')"
    >
      {{ title }}
    </button>
  </div>
</template>

<script setup>
const { title, status } = defineProps(["title", "status"]);
const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonManager {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: var(--border-radius-xs);
  // border: 1px solid var(--border-primary);
  background: var(--green-fourthly);
  font-family: "Inter-Medium", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  color: var(--white-primary);
  padding: 10px;

  &:hover {
    background: var(--green-thirdly);
  }

  &_done {
    background: var(--mask-black-primary);

    &:hover {
      background: var(--mask-black-primary);
    }
  }

  &_delete {
    background: var(--red-primary);

    &:hover {
      background: var(--red-secondary);
    }
  }
}
</style>
