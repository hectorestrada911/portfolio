'use client';

import ContactForm from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';

export default function Contact() {
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