import * as z from 'zod';


export const ContactSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.email(),
  company: z.string().max(100).or(z.literal('')).optional(),
  message: z.string().min(10).max(1000).or(z.literal('')).optional()
});

export type ContactForm = z.infer<typeof ContactSchema>;