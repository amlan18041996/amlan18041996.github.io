import React from 'react';
import { ArrowRight, Award, Briefcase, GraduationCap, Target, Rocket, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { getThemeColors, useThemeStore } from '../store/themeStore';
import cover_page from '../assets/story_cover_page.jpeg';

interface ExperienceItem {
  year: string;
  title: string;
  company?: string;
  description: string;
  details: string[];
}

function Story() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const jobExperience: ExperienceItem[] = [
    {
      year: 'Oct 2022 — Present',
      title: 'Technical Lead',
      company: 'GSPANN Technologies, Gurgaon',
      description: 'Leading AEM and frontend architecture for enterprise clients',
      details: [
        'Architected frontend flows using Vue JS, Pinia & AEM for Lifesciences Danaher',
        'Migrated AEM 6.5 projects to AEM Edge Delivery Services across multiple brands',
        'Integrated COVEO search engine via Atomic, Headless, and API approaches',
        'Implemented website internationalization for English, Mandarin, and Japanese regions',
      ]
    },
    {
      year: 'Apr 2021 — Sep 2022',
      title: 'Software Engineer',
      company: 'TIC Retail Accessories India Pvt Ltd, Gurgaon',
      description: 'Built customer-facing eCommerce support platforms',
      details: [
        'Built Customer Portal frontend on React JS with Auth, Authorization, and 2FA',
        'Created Field-Component Design module with drag-and-drop using Core JS',
        'Migrated legacy Symfony & Angular project to Lumen & React JS',
      ]
    },
    {
      year: 'Jul 2017 — Mar 2021',
      title: 'Full Stack Developer',
      company: 'UG INFO SYSTEMS PVT. LTD, New Delhi',
      description: 'Built full-stack applications spanning banking, education, and web tools',
      details: [
        'Built banking dashboard with WhatsApp/WeChat integration and real-time chat via Socket.io',
        'Developed education platform with Stripe payments and Zoom video integration',
        'Created web crawling tool with Python/Flask and PDF/DOC export',
      ]
    }
  ];

  const academics: ExperienceItem[] = [
    {
      year: 'Apr 2017 — Apr 2019',
      title: 'Masters in Computer Applications',
      company: 'Himalayan University',
      description: 'IT',
      details: []
    },
    {
      year: 'Jul 2014 — Jul 2017',
      title: 'Bachelor of Computer Applications',
      company: 'Himalayan University',
      description: 'IT',
      details: []
    }
  ];

  const awards: ExperienceItem[] = [
    {
      year: 'Mar 2025',
      title: 'Apex Inspiration',
      description: 'Recognized for outstanding contribution and inspiration',
      details: []
    },
    {
      year: 'Mar 2024',
      title: 'Orion Award',
      description: 'Recognized for excellence in performance',
      details: []
    },
    {
      year: 'Mar 2024',
      title: 'Jupiter Award',
      description: 'Recognized for exceptional contribution',
      details: []
    }
  ];

  const certifications: ExperienceItem[] = [
    {
      year: 'Oct 2025',
      title: 'Oracle AI Foundations',
      description: 'Oracle',
      details: []
    },
    {
      year: 'Nov 2025',
      title: 'Oracle Foundations Associate',
      description: 'Oracle',
      details: []
    },
    {
      year: 'Aug 2024 — Mar 2025',
      title: 'AWS Cloud Practitioner',
      description: 'Udemy',
      details: []
    },
    {
      year: 'Jan 2024 — Mar 2024',
      title: 'Python',
      description: 'Udemy',
      details: []
    },
    {
      year: 'Jun 2022 — Aug 2023',
      title: 'React JS',
      description: 'Udemy',
      details: []
    }
  ];

  const principles = [
    {
      title: 'Vision',
      icon: <Target size={32} />,
      description: 'To revolutionize digital experiences through innovative technology solutions',
      points: [
        'Push the boundaries of web technology',
        'Create seamless user experiences',
        'Drive digital transformation',
        'Set new industry standards'
      ]
    },
    {
      title: 'Mission',
      icon: <Rocket size={32} />,
      description: 'Delivering exceptional digital solutions that empower businesses and delight users',
      points: [
        'Build scalable, maintainable applications',
        'Foster innovation and creativity',
        'Provide mentorship and knowledge sharing',
        'Exceed client expectations'
      ]
    },
    {
      title: 'Values',
      icon: <Heart size={32} />,
      description: 'Guided by principles that ensure excellence in every project',
      points: [
        'Integrity in all interactions',
        'Continuous learning and growth',
        'Attention to detail',
        'User-centered approach'
      ]
    }
  ];

  const renderExperienceList = (items: ExperienceItem[], icon: React.ReactNode) => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div
            className={`
              group p-6 rounded-xl transition-all duration-300 cursor-pointer ${theme.contentBackground}
            `}
            onClick={() => setSelectedItem(selectedItem === `${item.title}-${index}` ? null : `${item.title}-${index}`)}
          >
            <div className="flex items-start">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${theme.accent} mr-4`}>
                {icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <ArrowRight 
                    size={20} 
                    className={`
                      transition-all duration-300
                      ${selectedItem === `${item.title}-${index}` 
                        ? 'rotate-90 text-blue-400' 
                        : 'opacity-0 group-hover:opacity-100'
                      }
                    `}
                  />
                </div>
                {item.company && (
                  <p className="text-gray-400 mt-1">{item.company}</p>
                )}
                <p className="text-sm text-blue-400 mt-2">{item.year}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
            
            {selectedItem === `${item.title}-${index}` && (
              <div className="mt-4 pl-14">
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-blue-400 shrink-0"></span>
                      <span className="text-gray-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-16">
      {/* About Section */}
      <section className="py-14 relative">
        <div className={`absolute inset-0 ${theme.background} opacity-30`}></div>
        <div className="container px-4 lg:px-28 2xl:px-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              style={{ backgroundImage: `url('${window.location.origin}${cover_page}')` }}
              className={`relative w-full h-96 md:h-[460px] lg:h-full bg-cover rounded-xl`}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-lg"></div>
              {/* <img 
                src={cover_page} 
                alt="Profile" 
                className="relative rounded-xl w-full h-96 md:h-[460px] lg:h-[560px] object-cover"
              /> */}
            </div>
            <div className="mb-auto">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-gray-300 text-lg mb-8">
                Full Stack Developer with over 9 years of experience adept in providing services for Frontend, Backend and AEM 6.5 technologies. Highly skilled in architectural flow, designing user-interfaces, building micro-services and implementation of functional specifications.
                <br />
                <br />
                Always seeking challenges for which I can study and contribute new ideas. Well acquainted with agile & HR methodologies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${theme.contentBackground}`}>
                  <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
                  <p className="text-gray-400">React, Vue JS, Angular, Next JS, Nuxt JS</p>
                </div>
                <div className={`p-6 rounded-xl ${theme.contentBackground}`}>
                  <h3 className="font-semibold mb-2 text-purple-400">Backend & AEM</h3>
                  <p className="text-gray-400">Node.js, Python, PHP, AEM 6.5, AEM EDS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-14 bg-gradient-to-b ${theme.background}`}>
        <div className="container px-4 lg:px-28 2xl:px-36">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Professional Experience</h2>
                <Link to="/projects" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Know More <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
              {renderExperienceList(jobExperience, <Briefcase size={24} />)}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Academic Background</h2>
              {renderExperienceList(academics, <GraduationCap size={24} />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Awards</h2>
              {renderExperienceList(awards, <Award size={24} />)}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              {renderExperienceList(certifications, <Award size={24} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-14 relative">
        <div className={`absolute inset-0 ${theme.background} opacity-30`}></div>
        <div className="container px-4 lg:px-28 2xl:px-36">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className={`group relative h-full ${theme.contentBackground} p-8 rounded-xl`}>
                <div className={`mb-6 inline-block p-4 rounded-xl bg-gradient-to-r ${theme.accent}`}>
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                <p className="text-gray-300 mb-6">{principle.description}</p>
                <ul className="space-y-3">
                  {principle.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-blue-400"></span>
                      <span className="text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;
