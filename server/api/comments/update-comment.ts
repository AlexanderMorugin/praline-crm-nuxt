import { eq } from "drizzle-orm";
import { db } from "~/server";
import { comments } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // console.log(body);

  const result = await db
    .update(comments)
    .set({ visibility: body.visibility })
    .where(eq(comments.id, body.id))
    .returning();

  // console.log(result);

  return result;
});
