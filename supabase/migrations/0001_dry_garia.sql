ALTER TABLE "Products" ALTER COLUMN "createdAt" SET DATA TYPE timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "Products" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "Products" ADD COLUMN "imagePath" varchar(255);