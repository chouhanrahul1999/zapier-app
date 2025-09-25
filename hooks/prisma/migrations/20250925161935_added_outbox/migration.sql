-- CreateTable
CREATE TABLE "public"."ZapRunsOutbox" (
    "id" TEXT NOT NULL,
    "zapRunId" TEXT NOT NULL,

    CONSTRAINT "ZapRunsOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZapRunsOutbox_zapRunId_key" ON "public"."ZapRunsOutbox"("zapRunId");

-- AddForeignKey
ALTER TABLE "public"."ZapRunsOutbox" ADD CONSTRAINT "ZapRunsOutbox_zapRunId_fkey" FOREIGN KEY ("zapRunId") REFERENCES "public"."ZapRuns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
