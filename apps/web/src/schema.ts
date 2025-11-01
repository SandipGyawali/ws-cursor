import * as z from 'zod'

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username is required with minimum length of 3')
    .default(''),
})

export type ZLoginSchema = z.infer<typeof loginSchema>
