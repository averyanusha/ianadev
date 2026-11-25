import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error (
    'Missing resend_api_key environment variable'
  )
}

export const resend = new Resend(process.env.RESEND_API_KEY);