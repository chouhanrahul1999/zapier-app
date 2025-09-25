/*
  Warnings:

  - You are about to drop the column `mataData` on the `ZapRuns` table. All the data in the column will be lost.
  - Added the required column `metaData` to the `ZapRuns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ZapRuns" DROP COLUMN "mataData",
ADD COLUMN     "metaData" JSONB NOT NULL;
