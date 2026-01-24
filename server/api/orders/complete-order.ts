import { eq } from "drizzle-orm";
import { db } from "~/server";
import { orders } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { id, status } = await readBody(event);

  const result = await db
    .update(orders)
    .set({ status_complete: status })
    .where(eq(orders.id, id));

  return result;
});
