import { z } from 'zod';

const EnvSchema = z.object({
  FAUNA_SECRET: z.string().min(1, 'FAUNA_SECRET is required'),
  FAUNA_DOMAIN: z.string().default('db.fauna.com'),
  NEXTAUTH_URL: z.string().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
});

export type AppEnv = z.infer<typeof EnvSchema>;

export const env: AppEnv = EnvSchema.parse({
  FAUNA_SECRET: process.env.FAUNA_SECRET,
  FAUNA_DOMAIN: process.env.FAUNA_DOMAIN,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});
