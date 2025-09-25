import { PrismaClient } from "@prisma/client";
import express from "express";


const client = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const body = req.body
 
  await client.$transaction(async (tx) => {
    const run = await client.zapRuns.create({
        data: {
            zapId: zapId,
            metaData: body
        }
    })

    await client.zapRunsOutbox.create({
        data: {
            zapRunId: run.id
        }
    })
    res.json({
        message: 'webhook redcived'
    })
  })
});


app.listen(3000)