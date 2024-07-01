CREATE TABLE IF NOT EXISTS "DownloadVerification" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"productName" varchar,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"expiresAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Orders" (
	"id" serial NOT NULL,
	"priceInCents" integer DEFAULT 0 NOT NULL,
	"userId" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	CONSTRAINT "Orders_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Products" (
	"name" varchar(255) PRIMARY KEY NOT NULL,
	"priceInCents" integer DEFAULT 0 NOT NULL,
	"filepath" varchar(255),
	"description" text,
	"isAvailableForPurchase" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Users" (
	"name" varchar(255) NOT NULL,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp NOT NULL,
	CONSTRAINT "Users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "DownloadVerification" ADD CONSTRAINT "DownloadVerification_productName_Products_name_fk" FOREIGN KEY ("productName") REFERENCES "public"."Products"("name") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
