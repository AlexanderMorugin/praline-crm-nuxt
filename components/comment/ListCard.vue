<template>
  <NuxtLink
    :to="`/comments/${comment.id}`"
    class="commentListCard"
    :class="comment.visibility ? 'commentListCard_active' : ''"
  >
    <div class="commentListCard__imageBox">
      <img
        :src="comment.product_image"
        :alt="comment.product_title"
        class="commentListCard__image"
      />
    </div>

    <span class="commentListCard__date">{{ comment.date }}</span>

    <span class="commentListCard__user">{{ comment.user_name }}</span>

    <div class="commentListCard__right">
      <ProductRating :rating="comment.user_rating" :maxStars="5" />
    </div>

    <div class="commentListCard__right">
      <IconVisibility v-if="comment.visibility" class="commentListCard__icon" />
      <IconVisibilityOff v-else class="commentListCard__icon" />
    </div>
  </NuxtLink>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.commentListCard {
  display: grid;
  grid-template-columns: 40px auto 1fr auto auto;
  gap: 10px;
  border-radius: var(--border-radius-l);
  border: 1px solid var(--border-primary);
  background: var(--mask-blue-primary);
  padding: 10px;
  transition: 0.2s ease;

  @media (max-width: 767px) {
    padding: 5px;
  }

  &:hover {
    background: var(--white-primary);
  }

  &_active {
    background: var(--green-secondary);

    // &:hover {
    //   background: var(--green-secondary);
    // }
  }

  &__imageBox {
    width: 40px;
    height: 40px;
    border-radius: var(--border-radius-s);
    background: var(--mask-white-primary);
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__user {
    font-family: "Inter-Regular", sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: var(--black-primary);

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__date {
    font-family: "Inter-Regular", sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: var(--black-primary);
  }

  &__right {
    display: flex;
    justify-content: flex-end;
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: var(--black-primary);

    @media (max-width: 767px) {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
