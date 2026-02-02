<template>
  <div>
    <CommentCard :comment="commentsStore.comment[0]" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});
const route = useRoute();

const commentsStore = useCommentsStore();
const cakesStore = useCakesStore();
await commentsStore.getComment(route.params.id);
await cakesStore.loadCakes();
</script>
