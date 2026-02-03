<template>
  <NuxtLink :to="`/comments/${comment.id}`" class="commentListCard">
    <div class="commentListCard__imageBox">
      <img
        :src="comment.product_image"
        :alt="comment.product_title"
        class="commentListCard__image"
      />
    </div>
    <span class="commentListCard__date">{{ comment.date }}</span>
    <span class="commentListCard__user">{{ comment.user_name }}</span>

    <span class="commentListCard__item">{{ comment.user_rating }}</span>
    <span class="commentListCard__item">{{ comment.visibility }}</span>
  </NuxtLink>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.commentListCard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  border-radius: var(--border-radius-l);
  border: 1px solid var(--border-primary);
  background: var(--mask-blue-primary);
  padding: 10px;
  transition: 0.2s ease;

  &:hover {
    background: var(--white-primary);
  }

  &__imageBox {
    width: 100px;
    height: 78px;
    border-radius: var(--border-radius-s);
    background: var(--mask-white-primary);
    overflow: hidden;

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__date {
    font-size: 12px;
    line-height: 18px;
    color: var(--black-primary);
  }
  &__user {
    font-size: 16px;
    color: var(--black-primary);
  }
}
</style>
