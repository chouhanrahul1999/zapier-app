"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const db_1 = require("../db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const router = (0, express_1.Router)();
router.post("/signup", async (req, res) => {
    const parsedData = types_1.SignupSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect input",
        });
    }
    const userExist = await db_1.prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        },
    });
    if (userExist) {
        return res.status(403).json({
            message: "User already exist",
        });
    }
    const hash = bcrypt_1.default.hashSync(parsedData.data.password, 5);
    await db_1.prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: hash,
            name: parsedData.data.name,
        },
    });
    res.json({
        message: "Please verify your account by checking your email",
    });
});
router.post("/signin", async (req, res) => {
    const parsedData = types_1.SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect input",
        });
    }
    const user = await db_1.prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        },
    });
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    const isPasswordValid = bcrypt_1.default.compareSync(parsedData.data.password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Incorrect password",
        });
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
    }, config_1.JWT_PASSWORD);
    res.status(200).json({
        token,
        message: "signin completed",
    });
});
router.get("/user", middleware_1.authMiddleware, async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const user = await db_1.prismaClient.user.findFirst({
        where: {
            id,
        },
        select: {
            name: true,
            email: true,
        },
    });
    res.status(200).json({
        user,
    });
});
exports.userRouter = router;
//# sourceMappingURL=userRoute.js.map