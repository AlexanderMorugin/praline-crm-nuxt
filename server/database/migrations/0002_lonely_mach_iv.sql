CREATE TABLE "comments" (
	"id" integer NOT NULL,
	"date" text,
	"user_name" text,
	"user_rating" integer,
	"user_comment" text,
	"visibility" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
