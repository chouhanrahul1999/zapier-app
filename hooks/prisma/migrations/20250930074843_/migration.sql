/*
  Warnings:

  - You are about to drop the column `sortingId` on the `Zap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Action" ADD COLUMN     "sortingId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."Zap" DROP COLUMN "sortingId";
