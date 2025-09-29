import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "zap-events";

const client = new PrismaClient();

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

const main = async () => {
  const producer = kafka.producer();
  await producer.connect();

  while (1) {
    const pendingRows = await client.zapRunsOutbox.findMany({
      where: {},
      take: 10,
    });

    producer.send({
        topic: TOPIC_NAME,
        messages: pendingRows.map(r => ({
            value: r.zapRunId
        }))
    })

    await client.zapRunsOutbox.deleteMany({
        where: {
            id: {
                in: pendingRows.map(r => r.id)
            }
        }
    })
  }
};
main();
