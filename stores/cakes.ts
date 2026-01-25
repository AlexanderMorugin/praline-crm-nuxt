import { defineStore } from "pinia";

export interface ICake {
  id?: any;
  title?: string;
  slug?: string;

  createdAt?: any;
  updatedAt?: any;
}

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref<ICake[] | any>([]);
  const cake = ref<ICake | any>(null);

  const loadCakes = async () => {
    const result = await useFetch("/api/cakes/load-cakes", {
      method: "GET",
    });

    if (result.status.value === "success") {
      cakes.value = result.data.value;
    }

    return result;
  };

  const getCake = async (cakeSlug: string) => {
    const result = await useFetch("/api/cakes/get-cake", {
      method: "POST",
      body: {
        slug: cakeSlug,
      },
    });

    if (result.status.value === "success") {
      cake.value = result.data.value;
    }

    return result;
  };

  const createCakeTitle = async (cakeTitleData: ICake) => {
    // console.log(cakeTitleData);

    const result = await useFetch("/api/cakes/create-title", {
      method: "POST",
      body: {
        title: cakeTitleData.title,
        slug: cakeTitleData.slug,
      },
    });

    console.log(result);

    return result;
  };

  const deleteCake = async () => {
    const result = await useFetch("/api/cakes/delete-cake", {
      method: "DELETE",
      body: {
        id: cake.value[0].id,
      },
    });

    return result;
  };

  return { cakes, cake, loadCakes, getCake, createCakeTitle, deleteCake };
});
