import express from "express";
import { userRouter } from "./routes/userRoute";
import { zapRouter } from "./routes/zapRouter";
import  cors  from "cors";

const app = express();
app.use(cors())

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);

app.listen(3000)

