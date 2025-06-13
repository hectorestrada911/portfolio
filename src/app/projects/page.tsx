import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB. Features include user authentication, product management, and payment processing.',
    imageUrl: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
    link: '/projects/ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'A React-based task management application with real-time updates using WebSocket. Includes features like task prioritization, team collaboration, and progress tracking.',
    imageUrl: '/projects/taskmanager.jpg',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    link: '/projects/taskmanager',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data using various APIs. Built with Python Flask and modern JavaScript.',
    imageUrl: '/projects/weather.jpg',
    tags: ['Python', 'Flask', 'JavaScript', 'OpenWeather API'],
    link: '/projects/weather',
  },
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development,
              backend programming, and full-stack integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 