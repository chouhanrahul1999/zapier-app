"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get("/available", async (req, res) => {
    const AvailableActions = await db_1.prismaClient.availableAction.findMany({});
    res.json({
        AvailableActions
    });
});
exports.actionRouter = router;
//# sourceMappingURL=actionRouter.js.map