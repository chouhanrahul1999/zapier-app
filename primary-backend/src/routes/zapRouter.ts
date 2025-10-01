import { Router } from "express";
import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";
import { prismaClient } from "../db";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  const parseData = ZapCreateSchema.safeParse(req.body);
  //@ts-ignore
  const id: string = req.id;

  if (!parseData.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const zapId = await prismaClient.$transaction(async (tx) => {
    const zap = await prismaClient.zap.create({
      data: {
        userId: parseInt(id),
        triggerid: "",
        Action: {
          create: parseData.data.actions.map((x, index) => ({
            actionId: x.AvailableActionId,
            sortingId: index,
          })),
        },
      },
    });

    const trigger = await tx.trigger.create({
      data: {
        triggerid: parseData.data.availableTriggerId,
        zapId: zap.id,
      },
    });

    await tx.zap.update({
      where: {
        id: zap.id,
      },
      data: {
        triggerid: trigger.id,
      },
    });
    return zap.id;
  });
  return res.json({
    zapId,
  });
});

router.get("/", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const zaps = await prismaClient.zap.findMany({
    where: {
      userId: id,
    },
    include: {
      Action: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });
  res.status(200).json({
    zaps,
    message: "zap recived",
  });
});

router.get("/:zapId", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const zapId: string = req.params.zapId as unknown as string

  const zap = await prismaClient.zap.findFirst({
    where: {
      id: zapId,
      userId: id,
    },
    include: {
      Action: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });
  res.status(200).json({
    zap,
    message: "zap recived",
  });
});

export const zapRouter = router;
