import { createEnv } from "@t3-oss/env-nextjs"; // or core package
import * as z from "zod";

export const env = createEnv({
  server: {
    BACKEND_URL: z.url(),
    FRONTEND_URL: z.url(),
    APP_URL: z.url(),
    AUTH_URL: z.url(),
  }, 
  //   client: {},
  runtimeEnv: {
    BACKEND_URL: process.env.BACKEND_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    APP_URL: process.env.APP_URL,
    AUTH_URL: process.env.AUTH_URL,
  },
});
