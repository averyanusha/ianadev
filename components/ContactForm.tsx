"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import styles from './ContactForm.module.css'

type FormValue = {
  email: string,
  firstName: string,
  secondName: string,
  message: string
}

export default function ContactForm(){
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>({
    defaultValues: {email: ''}
  });

  const onSubmit: SubmitHandler<FormValue> = data => console.log(data)
  return (
    <div className="section" id="contact">
      <h4 className="section-title">Have a project in mind?</h4>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" className={styles.formInput} placeholder="Name" {...register("firstName", {
          required: "Name is required",
          minLength: { value: 2, message: "Min length is 2"}
        })}/>
        {errors.firstName && <p className="">{errors.firstName.message}</p>}
        <input type="text" className={styles.formInput} placeholder="Surname" {...register("secondName")}/>
        <input type="email" className={styles.formInput} placeholder="Email" {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
        })}/>
        {errors.email && <p>{errors.email.message}</p>}
        <textarea className={styles.formTextarea} id="message" {...register("message", {
          required: "Message is required",
          minLength: {value: 10, message: "Minimum length 10"}
        })}></textarea>
        <button type="submit">Contact me</button>
      </form>
    </div>
  )
}