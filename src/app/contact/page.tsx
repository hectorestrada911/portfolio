'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [success, setSuccess] = useState(false);

  const isEmailValid = (email: string) => /.+@.+\..+/.test(email);
  const isFieldValid = (field: string) => field.trim().length > 0;
  const isFormValid =
    isFieldValid(formData.name) &&
    isEmailValid(formData.email) &&
    isFieldValid(formData.subject) &&
    isFieldValid(formData.message);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTouched({ name: false, email: false, subject: false, message: false });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] dark:from-[#1e293b] dark:to-[#0f172a]">
        <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </section>
      </div>
    </>
  );
} 