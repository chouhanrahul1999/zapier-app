import express from "express";
import { userRouter } from "./routes/userRoute";
import { zapRouter } from "./routes/zapRouter";
import  cors  from "cors";
import { actionRouter } from "./routes/actionRouter";
import { triggerRouter } from "./routes/triggerRouter";

const app = express();
app.use(cors())

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);
app.use("/api/v1/trigger", triggerRouter);
app.use("/api/v1/action", actionRouter);

app.listen(3000)

