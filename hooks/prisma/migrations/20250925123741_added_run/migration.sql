-- CreateTable
CREATE TABLE "public"."ZapRuns" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,

    CONSTRAINT "ZapRuns_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ZapRuns" ADD CONSTRAINT "ZapRuns_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "public"."Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
