ALTER TABLE "cakes" ADD COLUMN "status" text;--> statement-breakpoint
ALTER TABLE "cakes" ADD COLUMN "rating" integer;--> statement-breakpoint
ALTER TABLE "cakes" ADD COLUMN "visibility" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "cakes" DROP COLUMN "image_list_card";--> statement-breakpoint
ALTER TABLE "cakes" DROP COLUMN "expiration_date";--> statement-breakpoint
ALTER TABLE "cakes" DROP COLUMN "temperature";