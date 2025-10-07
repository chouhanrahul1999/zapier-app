"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.post("/", middleware_1.authMiddleware, async (req, res) => {
    const parseData = types_1.ZapCreateSchema.safeParse(req.body);
    //@ts-ignore
    const id = req.id;
    if (!parseData.success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }
    const zapId = await db_1.prismaClient.$transaction(async (tx) => {
        const zap = await db_1.prismaClient.zap.create({
            data: {
                userId: parseInt(id),
                triggerid: "",
                action: {
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
router.get("/", middleware_1.authMiddleware, async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const zaps = await db_1.prismaClient.zap.findMany({
        where: {
            userId: id,
        },
        include: {
            action: {
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
router.get("/:zapId", middleware_1.authMiddleware, async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const zapId = req.params.zapId;
    const zap = await db_1.prismaClient.zap.findFirst({
        where: {
            id: zapId,
            userId: id,
        },
        include: {
            action: {
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
exports.zapRouter = router;
//# sourceMappingURL=zapRouter.js.map