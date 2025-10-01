"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapCreateSchema = exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = require("zod");
exports.SignupSchema = zod_1.z.object({
    username: zod_1.z.string().min(6).max(30),
    password: zod_1.z.string().min(6).max(20),
    name: zod_1.z.string().min(3),
});
exports.SigninSchema = zod_1.z.object({
    username: zod_1.z.string().min(6).max(30),
    password: (0, zod_1.string)().min(6).max(20),
});
exports.ZapCreateSchema = zod_1.z.object({
    availableTriggerId: zod_1.z.string(),
    triggerMetaData: zod_1.z.any().optional(),
    actions: zod_1.z.array(zod_1.z.object({
        AvailableActionId: zod_1.z.string(),
        actionMetadata: zod_1.z.any().optional(),
    })),
});
//# sourceMappingURL=index.js.map