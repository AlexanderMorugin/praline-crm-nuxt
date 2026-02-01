ALTER TABLE "comments" ADD COLUMN "order_id" serial PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "id";