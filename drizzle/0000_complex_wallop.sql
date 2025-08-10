CREATE TABLE IF NOT EXISTS "aiOutput" (
	"id" serial PRIMARY KEY NOT NULL,
	"formdata" varchar NOT NULL,
	"aiResponse" text,
	"templateSlug" varchar NOT NULL,
	"createdBy" varchar NOT NULL,
	"createdAt" varchar
);
