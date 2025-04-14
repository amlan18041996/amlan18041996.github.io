import React from 'react';
import { ArrowRight, Award, Briefcase, GraduationCap, Target, Rocket, Heart } from 'lucide-react';
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
      year: '2022 — Present',
      title: 'Technical Lead',
      company: 'GSPANN Technologies',
      description: 'Leading development teams and architecting scalable solutions',
      details: [
        'Created the whole architectural flow of frontend based on Vue JS, VueUse & Pinia while content was added via AEM',
        'Responsible for creating user-management-profile page',
        'Responsible for creating home-page for client ( confidential )',
        'Dialog level design with multiple options for creating and designing the component on AEM 6.5',
        'Developed own custom libraries such as data-table, carousel, toast using Core JS',
        'Building AEM-Franklin`s/Helix multi level blocks & templates for the UI differentiated among multi opcos/brands. Responsible for creating PoCs of integrating COVEO search-engine via COVEO-Atomic | COVEO-Headless | COVEO-API',
        'Integrated COVEO Search-Engine on different projects under same client using Coveo Atomic component ( feature rich with a collection of reusable components )',
        'Integrated COVEO Search-Engine on different projects under same client using Coveo Headless ( a middle-layer library for developing coveo-powered UI components )',
        'Integrated COVEO Search-Engine on different projects under same client using Coveo API ( raw APIs )',
      ]
    },
    {
      year: '2021 — 2022',
      title: 'Software Engineer',
      company: 'TIC Retail Accessories India Pvt Ltd',
      description: 'Building end-to-end applications and mentoring junior developers',
      details: [
        'Made Customer Portal frontend for users who can check their product status for Repair or Replace case [ Built on React JS ] along with handling multiple cases such as Authentication, Authorization, 2 Factor Authentication using either email or sms. Participated in creating some of the microservices using symfony',
        'Responsible for Field-Component Design module where CX team can create and manage their components directly from the UI. It`s UI was built on top of React JS but Core JS was utilized for the Drag & Drop functionality',
        'Migrating a antiquated project built on ( Symfony & Angular ) to ( Lumen & React JS )',
        'Created technical documentation and API specifications'
      ]
    },
    {
      year: '2017 - 2021',
      title: 'Full Stack Developer',
      company: 'UG INFO SYSTEMS PVT. LTD',
      description: 'Building end-to-end applications',
      details: [
        'Created an extension for social media platform for WhatsApp and WeChat with the objective of capturing and monitoring messages between Relationship-Managers & their appointed clients to enhance the client experience',
        'User management application with multiple roles like Managers, Clients, Relationship Managers, Admin, Developer with specific authorized features ( Built on top of Angular 2 )',
        'Responsible for building the architecture & user-interface for creating the flow for the interaction between coaches/trainees & their appointed pupils. Payment Integration system like Stripe & video sharing/capturing features like Zoom were used in this platform',
        'Webcrawling extension with the objective of capturing certain text or images or videos and exporting it as PDF/DOC using python with Core JS',
        'Created a chat application as Bespoke with including features like,',
        '- Integrated WeChat & WhatsApp( via Twilio ) & Line API`s onto the chat where clients can message with their day-day social chat platforms as well',
        '- Integrated Socket.io to transmit & receive runtime messages',
        '- Integrated a custom AI bot to resolve some basic queries of clients with the help of Botman, DialogFlow'
      ]
    }
  ];

  const academics: ExperienceItem[] = [
    {
      year: '2017 - 2019',
      title: 'Master of Computer Applications',
      company: 'Himalayan University',
      description: 'Specialized in Artificial Intelligence and Machine Learning',
      details: [
        'GPA: 6.9/10.0',
        'Research focus on Natural Language Processing',
        'Teaching Assistant for Data Structures course'
      ]
    },
    {
      year: '2014 - 2017',
      title: 'Bachelor of Computer Applications',
      company: 'Himalayan University',
      description: 'Graduated with honors',
      details: [
        'First Class Honors',
        'President of Computer Science Society',
        'Completed 1 industry internships'
      ]
    }
  ];

  const awards: ExperienceItem[] = [
    {
      year: '2023',
      title: 'Best Tech Innovation Award',
      description: 'Recognized for developing an AI-powered code review system',
      details: [
        'Automated code review process',
        'Reduced review time by 70%',
        'Implemented machine learning algorithms',
        'Open-sourced the solution'
      ]
    }
  ];

  const certifications: ExperienceItem[] = [
    {
      year: '2023',
      title: 'AWS Solutions Architect',
      description: 'Professional certification for AWS cloud architecture',
      details: [
        'Cloud architecture design',
        'Security best practices',
        'Cost optimization',
        'High availability patterns'
      ]
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
                Full Stack Developer with over 7.6 years of experience adept in working with providing services for both Frontend & Backend technologies. Highly skilled in architectural flow, designing user-interfaces, build micro-services and implementation of functional specifications.
                <br />
                <br />
                Always seeking challenges for which I can study and contribute new ideas. I am always flexible to work for my company in order to achieve the task no matter the cost. Well acquainted with agile & HR methodologies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${theme.contentBackground}`}>
                  <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
                  <p className="text-gray-400">React, TypeScript, Next.js</p>
                </div>
                <div className={`p-6 rounded-xl ${theme.contentBackground}`}>
                  <h3 className="font-semibold mb-2 text-purple-400">Backend</h3>
                  <p className="text-gray-400">Node.js, Python, PostgreSQL</p>
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
              <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
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
