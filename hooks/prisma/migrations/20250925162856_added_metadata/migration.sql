/*
  Warnings:

  - Added the required column `mataData` to the `ZapRuns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ZapRuns" ADD COLUMN     "mataData" JSONB NOT NULL;
