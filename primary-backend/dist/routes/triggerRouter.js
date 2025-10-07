"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get("/available", async (req, res) => {
    const AvailableTrigger = await db_1.prismaClient.availableTriggers.findMany({});
    res.json({
        AvailableTrigger
    });
});
exports.triggerRouter = router;
//# sourceMappingURL=triggerRouter.js.map