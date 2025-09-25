-- DropForeignKey
ALTER TABLE "public"."Action" DROP CONSTRAINT "Action_actionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Action" DROP CONSTRAINT "Action_availableActionId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "public"."AvailableAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
