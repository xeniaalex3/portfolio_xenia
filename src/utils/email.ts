'use server'

import { formSchema } from "./zodSchema";
import { z } from "zod";
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/ui/EmailTemplate/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // TODO: Add this emailFormData to some database

    const { error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Welcome",
      react: EmailTemplate({ name: emailFormData.name, message: emailFormData.message }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
}