import { Router } from "express";
import { prismaClient } from "../db";


const router = Router();

router.get("/available", async (req, res) => {
    const AvailableActions = await prismaClient.availableAction.findMany({});
    res.json({
        AvailableActions
    })
})


export const actionRouter = router;