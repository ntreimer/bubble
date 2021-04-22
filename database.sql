
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


-- user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- activity table
CREATE TABLE "activity" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER,
	"description" VARCHAR (2000) NOT NULL,
	"type" varchar (30),
	"participants" VARCHAR (6),
	"free" BOOLEAN,
	"link" VARCHAR (2048),
	"notes" VARCHAR (2000)
);

-- calendar table
-- date is format YYYY-MM-DD
CREATE TABLE "calendar" (
	"id" SERIAL PRIMARY KEY,
	"activity_id" INTEGER,
	"date" DATE
);