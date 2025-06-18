import { Navigation } from '@/components/Navigation';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'WebSocket', 'GraphQL'],
  },
];

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I&apos;m a Computer Science student at San Diego State University with a passion for
                building innovative web applications and exploring new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Background
                </h2>
                <p className="text-gray-300 mb-4">
                  Currently pursuing my degree in Computer Science at SDSU, I&apos;m actively seeking
                  opportunities to apply my skills in real-world projects. My focus areas include
                  web development, backend programming, and system design.
                </p>
                <p className="text-gray-300">
                  I&apos;m particularly interested in building scalable applications and learning
                  new technologies that can help solve complex problems.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Goals
                </h2>
                <p className="text-gray-300 mb-4">
                  I&apos;m looking for internship opportunities where I can contribute to meaningful
                  projects while continuing to grow as a developer. My goal is to work in an
                  environment that encourages learning and innovation.
                </p>
                <p className="text-gray-300">
                  In the long term, I aspire to become a full-stack developer and eventually
                  explore entrepreneurship opportunities in the tech industry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-8 text-center">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="bg-white rounded-lg p-6 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="text-gray-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 