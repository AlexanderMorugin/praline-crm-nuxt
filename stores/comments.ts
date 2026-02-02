import { defineStore } from "pinia";

export interface IComment {
  id?: number;
  product_id?: number;
  date?: string;
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

    // console.log(result.data.value);

    if (result.status.value === "success") {
      comment.value = result.data.value;
    }

    return result;
  };

  return {
    comments,
    comment,
    loadComments,
    getComment,
  };
});
