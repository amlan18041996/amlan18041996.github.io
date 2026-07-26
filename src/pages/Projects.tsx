import { Briefcase, Code } from 'lucide-react';
import { getThemeColors, useThemeStore } from '../store/themeStore';

function Projects() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const workProjects = [
    {
      title: 'Lifesciences Danaher, Leica Microsystems, Phenomenex, Aldevron',
      company: 'GSPANN Technologies',
      role: 'Technical Lead',
      period: 'Oct 2022 — Present',
      desc: 'Migration of AEM 6.5 projects to AEM Edge Delivery Services (EDS) for reduced development costs and enhanced page speed. Integrated COVEO search engine via Atomic, Headless, and API approaches. Implemented website internationalization for English, Mandarin, and Japanese regions.',
      tags: ['TypeScript', 'COVEO', 'AEM EDS', 'Vite', 'Cypress'],
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      title: 'Lifesciences Danaher',
      company: 'GSPANN Technologies',
      role: 'Technical Lead',
      period: 'Oct 2022 — Present',
      desc: 'Scientific electronic parts/components management application for healthcare and pharmaceuticals. Created the full architectural flow of frontend using Vue JS, VueUse & Pinia with content managed via AEM 6.5. Developed custom libraries including data-table, carousel, and toast using Core JS.',
      tags: ['Vue JS 3', 'Pinia', 'AEM 6.5', 'Tailwind CSS', 'REST APIs'],
      gradient: 'from-blue-600 to-cyan-500',
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

  const personalProjects = [
    {
      title: 'APAN Store',
      period: 'Jul 2026 — Present',
      desc: 'Full-featured e-commerce storefront with Shopify Storefront API integration and Stripe payments. Implemented self-hosted Typesense search with autocomplete, trending searches, and faceted filtering. Built complete user auth, multi-step checkout, and admin dashboard with real-time sales analytics.',
      tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Shopify', 'Typesense', 'Stripe', 'Docker'],
      gradient: 'from-sky-600 to-blue-500',
    },
    {
      title: 'Vanilla Forge',
      period: 'Mar 2024 — Jun 2026',
      desc: '13 self-contained projects across JavaScript, TypeScript, and Libraries categories. Custom SPA architecture with hash-based router, lazy-loaded demos, and interactive in-browser examples covering 45+ core JS/TS concepts. Zero runtime dependencies with production-ready code-splitting.',
      tags: ['JavaScript', 'TypeScript', 'Vite', 'Tailwind CSS', 'ES Modules'],
      gradient: 'from-rose-600 to-pink-500',
    },
    {
      title: 'Docu-Craft',
      period: 'May 2026 — Jul 2026',
      desc: 'Data management tool with drag-and-drop CSV upload, schema-driven CSV creation, and LLM-based synthetic data generation via Ollama. Features interactive data editor, SQL query runner on in-memory SQLite, change tracking, and CSV/PDF export with batch operations.',
      tags: ['React 19', 'Python', 'Flask', 'Ollama', 'SQLite', 'Docker'],
      gradient: 'from-teal-600 to-green-500',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-28 2xl:px-36">
          <h2 className="text-4xl font-bold text-center mb-20">Work Experience</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {workProjects.map((project, index) => (
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

      <section className="py-20">
        <div className="container px-4 lg:px-28 2xl:px-36">
          <h2 className="text-4xl font-bold text-center mb-20">Personal Projects</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div key={index} className={`group relative ${theme.contentBackground} rounded-xl overflow-hidden`}>
                <div className={`w-full h-[300px] bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <Code size={64} className="text-white/30" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">{project.period}</p>
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
