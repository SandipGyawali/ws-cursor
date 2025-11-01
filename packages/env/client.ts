import z from "zod";

const ENV_SCHEMA = z.object({
  VITE_WS_URL: z.string().default("ws://localhost"),
});

const CLIENT_ENV = ENV_SCHEMA.parse(import.meta.env);

export { CLIENT_ENV };
