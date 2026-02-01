<template>
  <ul class="commentList">
    <li v-for="comment in commentsStore.comments" :key="comment.id">
      <CommentListCard :comment="comment" />
    </li>
  </ul>
</template>

<script setup>
const commentsStore = useCommentsStore();
</script>

<style lang="scss" scoped>
.commentList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
