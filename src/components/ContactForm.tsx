import { useState } from 'react';
import { UserIcon, EnvelopeIcon, PencilIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

/**
 * Reusable, animated, validated contact form with connect section.
 * Use in both /contact and homepage.
 */
export default function ContactForm() {
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

  // Validation logic
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
    try {
      const res = await fetch('https://formspree.io/f/xkgbrldj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2500);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    } catch (err) {
      alert('There was an error sending your message. Please try again later.');
    }
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
    <div className="backdrop-blur-md bg-white/20 dark:bg-gray-900/40 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8 sm:p-12 mb-12 transition-all duration-300">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
      {/* Success animation */}
      {success && (
        <div className="flex items-center justify-center mb-6 animate-bounce-in">
          <CheckCircleIcon className="w-10 h-10 text-green-500 mr-2" />
          <span className="text-green-500 font-semibold text-lg">Message sent!</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-label="Contact form"
      >
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <div className="relative">
            <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.name && !isFieldValid(formData.name)}
              aria-describedby="name-error"
              className={`pl-10 pr-4 py-2 block w-full rounded-lg border transition-all duration-200 bg-white/70 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none
                ${touched.name && !isFieldValid(formData.name) ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                ${touched.name && isFieldValid(formData.name) ? 'border-green-500' : ''}
                hover:shadow-md focus:shadow-lg`}
            />
          </div>
          {touched.name && !isFieldValid(formData.name) && (
            <span id="name-error" className="text-red-500 text-xs mt-1">Name is required.</span>
          )}
        </div>
        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.email && !isEmailValid(formData.email)}
              aria-describedby="email-error"
              className={`pl-10 pr-4 py-2 block w-full rounded-lg border transition-all duration-200 bg-white/70 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none
                ${touched.email && !isEmailValid(formData.email) ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                ${touched.email && isEmailValid(formData.email) ? 'border-green-500' : ''}
                hover:shadow-md focus:shadow-lg`}
            />
          </div>
          {touched.email && !isEmailValid(formData.email) && (
            <span id="email-error" className="text-red-500 text-xs mt-1">Please enter a valid email.</span>
          )}
        </div>
        {/* Subject Field */}
        <div className="relative">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <div className="relative">
            <PencilIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.subject && !isFieldValid(formData.subject)}
              aria-describedby="subject-error"
              className={`pl-10 pr-4 py-2 block w-full rounded-lg border transition-all duration-200 bg-white/70 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none
                ${touched.subject && !isFieldValid(formData.subject) ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                ${touched.subject && isFieldValid(formData.subject) ? 'border-green-500' : ''}
                hover:shadow-md focus:shadow-lg`}
            />
          </div>
          {touched.subject && !isFieldValid(formData.subject) && (
            <span id="subject-error" className="text-red-500 text-xs mt-1">Subject is required.</span>
          )}
        </div>
        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <div className="relative">
            <ChatBubbleLeftRightIcon className="w-5 h-5 absolute left-3 top-4 text-gray-400 pointer-events-none" />
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.message && !isFieldValid(formData.message)}
              aria-describedby="message-error"
              className={`pl-10 pr-4 py-2 block w-full rounded-lg border transition-all duration-200 bg-white/70 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none
                ${touched.message && !isFieldValid(formData.message) ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                ${touched.message && isFieldValid(formData.message) ? 'border-green-500' : ''}
                hover:shadow-md focus:shadow-lg`}
            />
          </div>
          {touched.message && !isFieldValid(formData.message) && (
            <span id="message-error" className="text-red-500 text-xs mt-1">Message is required.</span>
          )}
        </div>
        {/* Send Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
            aria-label="Send Message"
            disabled={success}
          >
            {success ? (
              <CheckCircleIcon className="w-6 h-6 text-green-400 animate-ping-slow" />
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
      {/* Other Ways to Connect Section */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Other Ways to Connect
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          <a
            href="https://github.com/hectorestrada911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition hover:scale-110 focus:outline-none"
            aria-label="GitHub"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" /></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hector-estrada-5b1351213/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-primary-600 dark:hover:text-primary-400 transition hover:scale-110 focus:outline-none"
            aria-label="LinkedIn"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" /></svg>
            LinkedIn
          </a>
          <a
            href="mailto:hestradarojas5095@sdsu.edu"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition hover:scale-110 focus:outline-none"
            aria-label="Email"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0V8a4 4 0 1 0-8 0v4" /></svg>
            hestradarojas5095@sdsu.edu
          </a>
        </div>
      </div>
    </div>
  );
} 