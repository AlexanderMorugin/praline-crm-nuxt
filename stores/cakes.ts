import { defineStore } from "pinia";

export interface ICake {
  id?: any;
  slug?: string;
  title?: string;
  description_short?: string;
  description_one?: string;
  description_two?: string;
  description_three?: string;

  meta_title?: string;
  meta_description?: string;
  meta_сanonical_url?: string;

  weight?: number;
  width?: number;
  height?: number;

  ingredients?: string;
  protein?: string;
  fat?: string;
  carbohydrates?: string;
  calories?: string;

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
        slug: cakeTitleData.slug,
        title: cakeTitleData.title,
        description_short: cakeTitleData.description_short,

        // description_one: cakeTitleData.description_one,
        // description_two: cakeTitleData.description_two,
        // description_three: cakeTitleData.description_three,

        // meta_title: cakeTitleData.meta_title,
        // meta_description: cakeTitleData.meta_description,
        // meta_сanonical_url: `http://localhost:3000/cakes/${cakeTitleData.slug}`,

        // weight: cakeTitleData.weight,
        // width: cakeTitleData.width,
        // height: cakeTitleData.height,

        // ingredients: cakeTitleData.ingredients,
        // protein: cakeTitleData.protein,
        // fat: cakeTitleData.fat,
        // carbohydrates: cakeTitleData.carbohydrates,
        // calories: cakeTitleData.calories,
      },
    });

    console.log(result);

    return result;
  };

  const updateCakeTitle = async (cakeTitleData: ICake) => {
    const result = await useFetch("/api/cakes/update-title", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        title: cakeTitleData.title,
        description_short: cakeTitleData.description_short,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              title: cakeTitleData.title,
              description_short: cakeTitleData.description_short,
            }
          : item
      );
    }

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

  return {
    cakes,
    cake,
    loadCakes,
    getCake,
    createCakeTitle,
    updateCakeTitle,
    deleteCake,
  };
});
