import {
  serial,
  pgTable,
  text,
  json,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial("order_id").primaryKey(),
  order_number: text("order_number"),
  order_date: text("order_date"),
  delivery_type: text("delivery_type"),
  total_cart_count: integer("total_cart_count"),
  total_cart_sum: integer("total_cart_sum"),
  cart_samovyvoz_bonus: integer("cart_samovyvoz_bonus"),
  total_order_sum: integer("total_order_sum"),
  delivery_sum: integer("delivery_sum"),

  user_bonus: integer("user_bonus"),
  user_name: text("user_name"),
  user_phone: text("user_phone"),
  user_city: text("user_city"),
  user_street: text("user_street"),
  user_building: text("user_building"),
  user_entrance: text("user_entrance"),
  user_flat: text("user_flat"),
  user_floor: text("user_floor"),
  user_comment: text("user_comment"),

  cart_list: json("cart_list"),

  status_accept: text("status_accept"),
  status_delivery: text("status_delivery"),
  status_complete: text("status_complete"),

  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});
