import { type ContactForm } from "@/lib/contactSchema";

export function EmailTemplate( data: ContactForm) {
  return (
    <div className="">
      <h1>Hi, you have been contacted by {data.fullName} from {data.company}</h1>
      <p>Their contact info is {data.email}</p>
    </div>
  )
}