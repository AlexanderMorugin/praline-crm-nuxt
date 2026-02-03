ALTER TABLE "comments" ADD COLUMN "product_image" text;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "product_title" text;--> statement-breakpoint
ALTER TABLE "comments" DROP COLUMN "product_id";