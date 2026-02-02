<template>
  <div class="commentCard">
    <div class="commentCard__top">
      <div class="commentCard__product">
        <span class="commentCard__user">{{ comment.user_name }}</span>
        <span class="commentCard__date">{{ comment.date }}</span>
      </div>
      <div class="commentCard__visibilityBlock">
        <div class="commentCard__iconBox">
          <span class="commentCard__date">сейчас</span>
          <IconVisibility v-if="comment.visibility" class="commentCard__icon" />
          <IconVisibilityOff v-else class="commentCard__icon" />
        </div>
        <button class="commentCard__visibilityButton" @click="updateVisibility">
          <span class="commentCard__visibilityText">{{
            comment.visibility ? "скрыть" : "активировать"
          }}</span>
        </button>
      </div>
    </div>

    <!-- <div class="commentCard__product">
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
    </div> -->

    <ProductRating :rating="comment.user_rating" :maxStars="5" />

    <div>
      <span class="commentCard__title">Отзыв:</span>
      <p class="commentCard__text">
        {{ comment.user_comment }}
      </p>
    </div>

    <!-- Модалка подтверждения -->
    <!-- <Teleport to="#teleports">
      <Transition name="top">
        <ModalConfirm
          v-if="isConfirmModalOpen"
          :isModalOpen="isConfirmModalOpen"
          title="Подтвердить видимость"
          :isLoading="isLoading"
          @yesClick="updateVisibility"
          @noClick="isConfirmModalOpen = false"
        />
      </Transition>
    </Teleport> -->
  </div>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
const toast = useToast();
const commentsStore = useCommentsStore();

const isLoading = ref(false);
const isConfirmModalOpen = ref(false);
// const vision = ref(comment.visibility);

// const cakesStore = useCakesStore();
// const product = computed(() =>
//   cakesStore.findCakeById(commentsStore.comment[0].product_id),
// );

const updateVisibility = async () => {
  try {
    isLoading.value = true;

    const result = await commentsStore.updateVisibility();

    // console.log(result);

    // if (result.status.value === "error") {
    //   toast.error({
    //     title: "Ошибка!",
    //     message: "Изменения выполнить не удалось.",
    //   });
    // }
    // if (result.status.value === "success") {
    //   toast.success({
    //     title: "Успешно!",
    //     message: "Отзыв виден на клиентском сайте.",
    //   });
    //   isConfirmModalOpen.value = false;
    // }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.commentCard {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    // border: 1px solid red;
  }

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

  &__visibilityBlock {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__visibilityText {
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 12px;
    color: var(--white-primary);
    text-transform: uppercase;
    // transition: 0.2s ease;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__visibilityButton {
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 40px;
    height: 40px;
    background: var(--mask-blue-thirdly);
    border-radius: var(--border-radius-xs);
    padding: 5px 10px;
    transition: 0.2s ease;

    &:hover {
      background: var(--red-secondary);
    }

    // border-bottom: 1px dashed var(--deep-blue-thirdly);
    // padding-bottom: 5px;
    // transition: 0.2s ease;

    // &:hover {
    //   border-bottom: 1px dashed var(--red-primary);
    // }
  }

  &__iconBox {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--black-primary);
  }
}

// .commentCard__visibilityButton:hover .commentCard__visibilityText {
//   color: var(--red-primary);
// }
</style>
