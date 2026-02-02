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

      // comments.value = comments.value.map((item: IComment) =>
      //   item.id === comment.value[0].id
      //     ? { ...item, visibility: !comment.value[0].visibility }
      //     : item,
      // );
    }

    // if (result.status.value === "success") {
    //   comment.value[0].visibility = !comment.value[0].visibility;

    //   //   comments.value = comments.value.map((item: IComment) =>
    //   //     item.id === comment.value.id
    //   //       ? { ...item, visibility: !comment.value.visibility }
    //   //       : item,
    //   //   );
    // }

    // console.log(comment.value[0].visibility);
    console.log("comments.value", comments.value);

    return result;
  };

  return {
    comments,
    comment,
    loadComments,
    getComment,
    updateVisibility,
  };
});
