import { Briefcase } from 'lucide-react';
import { getThemeColors, useThemeStore } from '../store/themeStore';

function Projects() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const projects = [
    {
      title: 'LSD',
      company: 'GSPANN Technologies',
      role: 'Technical Lead',
      period: 'Oct 2022 — Present',
      desc: 'Scientific electronic parts/components management application for healthcare and pharmaceuticals. Created the full architectural flow of frontend using Vue JS, VueUse & Pinia with content managed via AEM 6.5. Developed custom libraries including data-table, carousel, and toast using Core JS.',
      tags: ['Vue JS 2/3', 'Pinia', 'AEM 6.5', 'Tailwind CSS', 'REST APIs'],
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'LSD, Optimus, LMS, PHX',
      company: 'GSPANN Technologies',
      role: 'Technical Lead',
      period: 'Oct 2022 — Present',
      desc: 'Migration of AEM 6.5 projects to AEM Edge Delivery Services (EDS) for reduced development costs and enhanced page speed. Integrated COVEO search engine via Atomic, Headless, and API approaches. Implemented website internationalization for English, Mandarin, and Japanese regions.',
      tags: ['TypeScript', 'COVEO', 'AEM EDS', 'Vite', 'Cypress'],
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      title: 'Solvup',
      company: 'TIC Retail Accessories',
      role: 'Software Engineer',
      period: 'Apr 2021 — Sep 2022',
      desc: 'Customer Support eCommerce platform for product ticketing, returns, and tracking. Built the Customer Portal frontend on React JS with Authentication, Authorization, and 2FA. Created a Field-Component Design module with drag-and-drop functionality using Core JS.',
      tags: ['React JS', 'Angular 12', 'Symfony', 'MongoDB', 'Docker'],
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      title: 'Mediator',
      company: 'UG INFO SYSTEMS',
      role: 'Full Stack Developer',
      period: 'Jul 2017 — Mar 2021',
      desc: 'Banking employee dashboard for client relationship management. Created WhatsApp and WeChat extensions for monitoring RM-client conversations. Built a real-time chat application with Socket.io, integrated Twilio for WhatsApp, and deployed a custom AI bot using DialogFlow.',
      tags: ['Angular 2', 'Java', 'Socket.io', 'MySQL', 'DialogFlow'],
      gradient: 'from-orange-600 to-red-500',
    },
    {
      title: 'LearnCurvv',
      company: 'UG INFO SYSTEMS',
      role: 'Full Stack Developer',
      period: 'Jul 2017 — Mar 2021',
      desc: 'Education platform connecting students with courses, mentors, and learning modes including individual sessions, group sessions, and recorded content. Built the architecture and UI with Stripe payment integration and Zoom video sharing/capturing features.',
      tags: ['React JS', 'Stripe', 'Zoom', 'Laravel', 'MongoDB'],
      gradient: 'from-violet-600 to-indigo-500',
    },
    {
      title: 'Crawler',
      company: 'UG INFO SYSTEMS',
      role: 'Full Stack Developer',
      period: 'Jul 2017 — Mar 2021',
      desc: 'Web crawling tool that captures text, images, and videos from given URLs with export options in PDF/DOC format. Built with Python and Flask backend using BeautifulSoup for parsing, with filter options for selective content extraction.',
      tags: ['Python', 'Flask', 'BeautifulSoup', 'Core JS'],
      gradient: 'from-amber-600 to-yellow-500',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-28 2xl:px-36">
          <h2 className="text-4xl font-bold text-center mb-20">Featured Work</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group relative ${theme.contentBackground} rounded-xl overflow-hidden`}>
                <div className={`w-full h-[300px] bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <Briefcase size={64} className="text-white/30" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{project.company}</p>
                  <p className="text-xs text-gray-500 mb-4">{project.role} · {project.period}</p>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 text-sm rounded-full bg-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
