<template>
  <div class="commentCard">
    <div class="commentCard__product">
      <span class="commentCard__user">{{ comment.user_name }}</span>
      <span class="commentCard__date">{{ comment.date }}</span>
    </div>

    <div class="commentCard__product">
      <div class="commentCard__imageBox">
        <img
          :src="cakesStore.findCakeById(comment.product_id).image_1_small"
          :alt="cakesStore.findCakeById(comment.product_id).title"
          class="commentCard__image"
        />
      </div>

      <span class="commentCard__productTitle">{{
        cakesStore.findCakeById(comment.product_id).title
      }}</span>
    </div>

    <ProductRating :rating="comment.user_rating" :maxStars="5" />

    <div>
      <span class="commentCard__title">Отзыв:</span>
      <p class="commentCard__text">{{ comment.user_comment }}</p>
    </div>
  </div>
</template>

<script setup>
const { comment } = defineProps(["comment"]);

const cakesStore = useCakesStore();
</script>

<style lang="scss" scoped>
.commentCard {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__product {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__productTitle {
    font-family: "Inter-Regular", sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: var(--mask-black-thirdly);
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

  &__user {
    font-family: "Inter-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--black-primary);

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
    }
  }

  &__date {
    font-family: "Inter-Regular", sans-serif;
    font-size: 12px;
    color: var(--mask-black-thirdly);
  }

  &__title {
    font-family: "Inter-Regular", sans-serif;
    font-size: 14px;
    color: var(--mask-black-thirdly);
  }

  &__text {
    font-family: "Inter-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--black-primary);
    padding-top: 10px;
  }
}
</style>
