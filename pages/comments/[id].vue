<template>
  <div class="commentPage">
    {{ route.params.id }}
    <!-- <OrderCard :order="orderStore.order" />
    <OrderManager /> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});
const route = useRoute();
const commentsStore = useCommentsStore();
await commentsStore.getComment(route.params.id);
</script>

<style lang="scss" scoped>
.commentPage {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
