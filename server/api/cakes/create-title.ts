import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // console.log(body);

  const cakeTitle = {
    slug: body.slug.toLowerCase(),
    title: body.title,
    description_short: body.description_short,
    description_one: body.description_one,
    description_two: body.description_two,
    description_three: body.description_three,

    meta_title: body.meta_title,
    meta_description: body.meta_description,
    meta_сanonical_url: body.meta_сanonical_url.toLowerCase(),

    weight: body.weight,
    width: body.width,
    height: body.height,

    ingredients: body.ingredients,
    protein: body.protein,
    fat: body.fat,
    carbohydrates: body.carbohydrates,
    calories: body.calories,
  };

  const result = await db
    .insert(cakes)
    .values({ ...cakeTitle })
    .returning();

  return result;
});
