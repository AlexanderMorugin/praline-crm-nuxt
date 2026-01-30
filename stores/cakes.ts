import { defineStore } from "pinia";

export interface ICake {
  id?: any;
  slug?: string;
  title?: string;
  description_short?: string;
  description_one?: string;
  description_two?: string;
  description_three?: string;

  image_1_small?: string;
  image_1_big?: string;
  image_2_small?: string;
  image_2_big?: string;
  image_3_small?: string;
  image_3_big?: string;
  image_4_small?: string;
  image_4_big?: string;
  image_5_small?: string;
  image_5_big?: string;
  image_6_small?: string;
  image_6_big?: string;

  meta_title?: string;
  meta_description?: string;
  meta_сanonical_url?: string;

  weight?: number;
  width?: number;
  height?: number;

  price?: number;
  discount?: number;
  discount_price?: number;

  ingredients?: string;
  protein?: string;
  fat?: string;
  carbohydrates?: string;
  calories?: string;

  visibility: boolean;

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

  const createCakeTitle = async (productData: ICake) => {
    const result = await useFetch("/api/cakes/create-title", {
      method: "POST",
      body: {
        slug: productData.slug,
        title: productData.title,
        description_short: productData.description_short,
        meta_сanonical_url: `http://localhost:3000/cakes/${productData.slug}`,
      },
    });

    return result;
  };

  const updateCakeTitle = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-title", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        title: formData.title,
        description_short: formData.description_short,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              title: formData.title,
              description_short: formData.description_short,
            }
          : item,
      );
    }

    return result;
  };

  const updateCakeDescription = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-description", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        description_one: formData.description_one,
        description_two: formData.description_two,
        description_three: formData.description_three,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              title: formData.title,
              description_short: formData.description_short,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductImages = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-images", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        // image_list_card: formData.image_list_card,
        image_1_small: formData.image_1_small,
        image_1_big: formData.image_1_big,
        image_2_small: formData.image_2_small,
        image_2_big: formData.image_2_big,
        image_3_small: formData.image_3_small,
        image_3_big: formData.image_3_big,
        image_4_small: formData.image_4_small,
        image_4_big: formData.image_4_big,
        image_5_small: formData.image_5_small,
        image_5_big: formData.image_5_big,
        image_6_small: formData.image_6_small,
        image_6_big: formData.image_6_big,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              price: formData.price,
              discount: formData.discount,
              discount_price: formData.discount_price,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductMeta = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-meta", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              meta_title: formData.meta_title,
              meta_description: formData.meta_description,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductSizes = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-sizes", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        weight: formData.weight,
        width: formData.width,
        height: formData.height,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              weight: formData.weight,
              width: formData.width,
              height: formData.height,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductPrice = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-price", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        price: formData.price,
        discount: formData.discount,
        discount_price: formData.discount_price,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              price: formData.price,
              discount: formData.discount,
              discount_price: formData.discount_price,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductIngredients = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-ingredients", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        ingredients: formData.ingredients,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              ingredients: formData.ingredients,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductNutritional = async (formData: ICake) => {
    const result = await useFetch("/api/cakes/update-nutritional", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        calories: formData.calories,
        protein: formData.protein,
        fat: formData.fat,
        carbohydrates: formData.carbohydrates,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              calories: formData.calories,
              protein: formData.protein,
              fat: formData.fat,
              carbohydrates: formData.carbohydrates,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductRating = async (rating: number) => {
    const result = await useFetch("/api/cakes/update-rating", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        rating: rating,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              rating: rating,
            }
          : item,
      );
    }

    return result;
  };

  const updateProductVisibility = async (visibility: boolean) => {
    const result = await useFetch("/api/cakes/update-visibility", {
      method: "PATCH",
      body: {
        id: cake.value[0].id,
        visibility: visibility,
      },
    });

    if (result.status.value === "success") {
      cakes.value = cakes.value.map((item: ICake) =>
        item.id === cake.value[0].id
          ? {
              ...item,
              visibility: visibility,
            }
          : item,
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
    updateCakeDescription,
    updateProductImages,
    updateProductMeta,
    updateProductSizes,
    updateProductPrice,
    updateProductIngredients,
    updateProductNutritional,
    updateProductRating,
    updateProductVisibility,
    deleteCake,
  };
});
