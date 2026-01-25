CREATE TABLE "cakes" (
	"cake_id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "status_accept" text;--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "status_confirm";