import { string, z } from "zod";

export const SignupSchema = z.object({
  username: z.string().min(6).max(30),
  password: z.string().min(6).max(20),
  name: z.string().min(3),
});

export const SigninSchema = z.object({
  username: z.string().min(6).max(30),
  password: string().min(6).max(20),
});

export const ZapCreateSchema = z.object({
  availableTriggerId: z.string(),
  triggerMetaData: z.any().optional(),
  actions: z.array(
    z.object({
      AvailableActionId: z.string(),
      actionMetadata: z.any().optional(),
    })
  ),
});
