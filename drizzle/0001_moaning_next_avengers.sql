ALTER TABLE "feeds" RENAME COLUMN "uri" TO "url";--> statement-breakpoint
ALTER TABLE "links" ALTER COLUMN "url" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "links" DROP COLUMN IF EXISTS "uri";