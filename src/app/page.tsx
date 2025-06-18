// Trigger redeploy: dummy change
 // Test sync issue
"use client";

import { Navigation } from '@/components/Navigation';
import AnimatedCodeBlock from '@/components/AnimatedCodeBlock';
import { AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

const projects = [
  {
    title: 'BidMe',
    description: 'A platform for posting business requests and receiving competitive offers from verified suppliers. Built with Next.js, TypeScript, and PostgreSQL.',
    imageUrl: '/projects/bidme-hero.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    liveUrl: 'https://bidme-ecru.vercel.app/',
    codeUrl: 'https://github.com/hectorestrada911/bidme',
  },
  {
    title: 'BudgetWise (In Progress)',
    description: 'A personal finance and budgeting app to help users track expenses, set savings goals, and visualize spending. Built with Next.js, TypeScript, and MongoDB. (Coming soon!)',
    imageUrl: '/projects/budgetwise.jpg',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#',
  },
];

const techColors: Record<string, string> = {
  'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Next.js': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
  'Node.js': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'PostgreSQL': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  'MongoDB': 'bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-200',
  'Prisma': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Vercel': 'bg-black text-white dark:bg-white dark:text-black',
  'Stripe': 'bg-indigo-200 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-200',
  'React': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  'WebSocket': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'Python': 'bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-200',
  'Flask': 'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200',
  'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'OpenWeather API': 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-700"
          style={{ background: "var(--background)" }}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-16 sm:mt-24 md:mt-0">
            {/* Left: Intro */}
            <div className="flex-1 text-center md:text-left md:pr-8 animate-hero-fade-in">
              <div className="transition-all duration-700 opacity-0 animate-fade-in-slide-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 md:ml-4">
                  Hector <span className="text-blue-600">Estrada</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 md:ml-4 max-w-xl md:max-w-2xl mx-auto md:mx-0">
                  Computer Science student at SDSU specializing in software engineering, scalable systems, and full-stack apps.<br />
                  Actively seeking software engineering internships — eager to build, learn, and ship great products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start md:ml-4">
                  <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 hover:scale-105">View Projects</a>
                  <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 transition-transform duration-200 hover:scale-105">Contact Me</a>
                  <a href="/hector-estrada-portfolio.pdf" download className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-transform duration-200 hover:scale-105">Download Resume</a>
                </div>
                <div className="flex justify-center items-center gap-4 mt-12">
                  <a href="https://github.com/hectorestrada911" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-2xl text-gray-700 hover:text-blue-600 transition-transform duration-200 hover:scale-110 focus:outline-none" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/hector-estrada-5b1351213/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-2xl text-blue-700 hover:text-blue-800 transition-transform duration-200 hover:scale-110 focus:outline-none" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Right: Animated Code Block */}
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto mt-12 md:mt-0">
              <AnimatedCodeBlock />
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 md:mt-20 animate-pulse-slow">
            <span className="inline-block text-gray-400 text-3xl">↓</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center">About Me</h2>
            <p className="text-base text-gray-500 mb-8 text-center">A quick snapshot of my journey, skills, and goals.</p>
            <div className="text-center mb-12 flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-lg w-full max-w-2xl mx-auto">
                <p className="text-lg text-gray-900 font-medium">
                  I love building software — from intuitive interfaces to scalable backend systems. My goal is to become a <span className="font-semibold text-blue-600">full-stack engineer</span> with a strong foundation in <span className="font-semibold text-blue-600">systems</span>, <span className="font-semibold text-blue-600">problem solving</span>, and modern tools.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-100 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col gap-2 transition hover:shadow-lg hover:border-blue-400">
                <div className="flex items-center gap-2 mb-2">
                  <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Background</h3>
                </div>
                <p className="text-gray-700">
                  Computer Science student at SDSU with a passion for solving real problems through code. I enjoy working on <span className="font-semibold text-blue-600">full-stack applications</span>, building APIs, and learning new technologies that help me deliver clean, efficient software.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col gap-2 transition hover:shadow-lg hover:border-blue-400">
                <div className="flex items-center gap-2 mb-2">
                  <RocketLaunchIcon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Goals</h3>
                </div>
                <p className="text-gray-700">
                  Seeking <span className="font-semibold text-blue-600">internship opportunities</span> where I can grow as a software engineer. Long-term, I aim to become a <span className="font-semibold text-blue-600">full-stack developer</span> capable of designing robust systems and contributing across the stack — from frontend logic to backend performance.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 font-medium">
                Want to know more about my journey? <span className="text-blue-600 font-semibold">Let&apos;s connect.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Projects</h2>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, backend programming, and full-stack integration.
            </p>
            <div className="flex justify-center mb-8">
              <Image src="/projects/bidme-hero.jpg" alt="BidMe Hero" width={600} height={300} className="rounded-lg shadow-lg max-h-64 w-auto h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                idx === 0 ? (
                  <div
                    key={project.title}
                    className="relative rounded-3xl overflow-hidden border border-gray-700 shadow-lg bg-[#181c24] flex flex-col group transform transition-all duration-300 hover:shadow-2xl"
                  >
                    {/* Image with overlay, title, and badge */}
                    <div className="relative h-56 w-full overflow-hidden">
        <Image
                        src={project.imageUrl || '/window.svg'}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        fill
        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute left-0 bottom-0 p-4 flex flex-col gap-2 w-full">
                        <div className="flex items-center gap-2">
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                            Featured
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent" />
                    {/* Content area */}
                    <div className="p-6 flex-1 flex flex-col bg-[#181c24]">
                      <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl && project.codeUrl && (
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                          <a
                            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition gap-2 shadow-sm"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            View Live
          </a>
          <a
                            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-500 transition gap-2 shadow-sm"
          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16v-8m8 8v-8M3 20h18" /></svg>
                            View Code
          </a>
        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    key={project.title}
                    className="bg-[#181c24] rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative"
                  >
                    <div className="h-48 w-full relative">
          <Image
                        src={project.imageUrl || '/window.svg'}
                        alt={project.title}
                        className="object-cover w-full h-full rounded-t-2xl shadow-md"
                        fill
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${techColors[tag] || 'bg-primary-100 text-primary-800'} transition-colors duration-200`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl && project.codeUrl && (
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                          <a
                            href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded bg-primary-600 text-white hover:bg-primary-700 transition gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            View Live
        </a>
        <a
                            href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded border border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-500 transition gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16v-8m8 8v-8M3 20h18" /></svg>
                            View Code
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactForm />
          </div>
        </section>
    </div>
    </>
  );
}
