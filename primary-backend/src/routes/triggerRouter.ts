import { Router } from "express";
import { prismaClient } from "../db";


const router = Router();

router.get("/available", async (req, res) => {
     const AvailableTrigger = await prismaClient.availableTriggers.findMany({});
        res.json({
            AvailableTrigger
        })
})


export const triggerRouter = router;