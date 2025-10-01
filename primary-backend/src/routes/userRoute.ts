import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
  const parsedData = SignupSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect input",
    });
  }

  const userExist = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
    },
  });

  if (userExist) {
    return res.status(403).json({
      message: "User already exist",
    });
  }

  const hash = bcrypt.hashSync(parsedData.data.password, 5);

  await prismaClient.user.create({
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
  const parsedData = SigninSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Incorrect input",
    });
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
    },
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordValid = bcrypt.compareSync(
    parsedData.data.password,
    user.password
  );

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Incorrect password",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_PASSWORD
  );

  res.status(200).json({
    token,
    message: "signin completed",
  });
});

router.get("/user", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const user = await prismaClient.user.findFirst({
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

export const userRouter = router;
