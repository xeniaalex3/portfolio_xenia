import { z } from 'zod'

export const formSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .nonempty('The email is mandatory'),
  name: z.string().min(2).max(50),
  message: z.string().nonempty('The message is mandatory.').min(2)
})