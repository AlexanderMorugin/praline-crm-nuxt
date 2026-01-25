import { db } from "~/server";
import { cakes } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // console.log(body);

  const cakeTitle = {
    title: body.title,
    slug: body.slug.toLowerCase(),
  };

  const result = await db
    .insert(cakes)
    .values({ ...cakeTitle })
    .returning();

  return result;
});
