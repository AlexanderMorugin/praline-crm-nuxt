import { defineStore } from "pinia";

export interface IComment {
  id?: number;
  date?: string;

  product_id?: number;
  product_image?: string;
  product_title?: string;

  user_name?: string;
  user_rating?: number;
  user_comment?: string;

  visibility?: boolean;

  createdAt?: any;
  updatedAt?: any;
}

export const useCommentsStore = defineStore("commentsStore", () => {
  const comments = ref<IComment[] | any>([]);
  const comment = ref<IComment | any>(null);

  const loadComments = async () => {
    const result = await useFetch("/api/comments/load-comments", {
      method: "GET",
    });

    if (result.status.value === "success") {
      comments.value = result.data.value;
    }

    return result;
  };

  const getComment = async (commentId: number) => {
    const result = await useFetch("/api/comments/get-comment", {
      method: "POST",
      body: {
        id: commentId,
      },
    });

    if (result.status.value === "success") {
      comment.value = result.data.value;
    }

    return result;
  };

  const updateVisibility = async () => {
    const result = await $fetch("/api/comments/update-comment", {
      method: "PATCH",
      body: {
        id: comment.value[0].id,
        visibility: !comment.value[0].visibility,
      },
    });

    if (result) {
      comment.value[0].visibility = !comment.value[0].visibility;
    }

    return result;
  };

  const deleteComment = async () => {
    const result = await useFetch("/api/comments/delete-comment", {
      method: "DELETE",
      body: {
        id: comment.value[0].id,
      },
    });

    if (result.status.value === "success") {
      comments.value = comments.value.filter(
        (item: IComment) => item.id !== comment.value[0].id,
      );
    }

    return result;
  };

  return {
    comments,
    comment,
    loadComments,
    getComment,
    updateVisibility,
    deleteComment,
  };
});
