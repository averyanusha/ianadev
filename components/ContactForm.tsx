"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import styles from './ContactForm.module.css'
import { submitContactForm } from "@/lib/actions/contact";
import { ContactSchema, type ContactForm } from "@/lib/contactSchema";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from '@hookform/resolvers/zod'


export default function ContactForm(){
  const t = useTranslations('contact')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema)
  });

  const [ status, setStatus ] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const result = await submitContactForm(data);
    if (result.ok){
      setStatus('success')
      reset();
    } else {
      setStatus('error')
    }
  }
  return (
    <div className="section" id="contact">
      <h4 className="section-title">{t('title')}</h4>
      <p className="section-subtitle">{t('intro')}</p>
      <p className="section-subtitle">{t('subintro')}</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" className={styles.formInput} placeholder={t('form.name')} {...register("fullName", {
          required: "Name is required",
          minLength: { value: 2, message: "Min length is 2"}
        })}/>
        {errors.fullName && <p className="">{errors.fullName.message}</p>}
        <input type="email" className={styles.formInput} placeholder={t('form.email')} {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
        })}/>
        <input type="email" className={styles.formInput} placeholder={t('form.company')} {...register("company")}/>
        {errors.email && <p>{errors.email.message}</p>}
        <textarea className={styles.formTextarea} id="message" placeholder={t('form.message')} {...register("message", {
          required: "Message is required",
          minLength: {value: 10, message: "Minimum length 10"}
        })}></textarea>
        <button type="submit" className="ctaButton">
          { isSubmitting ? t('form.sending') : t('form.submit') }
        </button>
        <p className={status === 'idle' ? 'error' : 'error-visible'}>
          { status === 'success' ? t('form.success') : t('form.error') }
        </p>
      </form>
    </div>
  )
}