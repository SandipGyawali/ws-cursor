import z from "zod";

const ENV_SCHEMA = z.object({
  PORT: z.string(),
});

const ENV = ENV_SCHEMA.parse(process.env);
export { ENV };
