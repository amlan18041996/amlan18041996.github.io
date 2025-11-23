import React from "react";
import { Link } from "react-router";
import { Code, Palette, Lightbulb, ArrowRight, Circle } from "lucide-react";
import ContactModal from "../components/ContactModal";
import TypeEffect from "../components/TypeEffect";
import { getThemeColors, useThemeStore } from "../store/themeStore";
import user_profile_cover from "../assets/main_cover_page.jpeg";

function Home() {
  const [showContact, setShowContact] = React.useState(false);
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: [
        "Modern, responsive web applications",
        "Performance optimization",
        "SEO-friendly architecture",
      ],
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: [
        "Intuitive user interfaces",
        "User-centered design approach",
        "Interactive prototypes",
      ],
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Digital Strategy",
      description: [
        "Strategic planning",
        "Digital transformation",
        "Technical consultation",
      ],
    },
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with real-time inventory management.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with AI-powered insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <>
      <header className="min-h-screen relative flex items-center">
        <div
          className={`absolute inset-0 ${theme.background} opacity-30`}
        ></div>
        <div className="container px-4 lg:px-28 2xl:px-36">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <img
                src={user_profile_cover}
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/10"
              />
              <div className="absolute -right-4 top-0 bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl">
                <Code size={32} />
              </div>
              <div className="absolute -left-4 bottom-0 bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl">
                <Palette size={32} />
              </div>
              <div className="absolute right-0 bottom-8 bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl">
                <Lightbulb size={32} />
              </div>
            </div>

            <div className="text-sm font-mono mb-4 text-blue-400">
              Hello, I'm Amlan Sengupta
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <TypeEffect
                className="text-primary font-semibold"
                words={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Digital Strategist",
                ]}
              ></TypeEffect>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Crafting digital experiences through elegant code and innovative
              solutions. Full-stack developer specializing in modern web
              technologies.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => {
                  setShowContact(true);
                }}
                className={`text-lg tracking-wider ${theme.accent} bg-gradient-to-r px-8 py-3 rounded-full font-medium transition-colors`}
              >
                Get in touch
              </button>
              <Link
                to="/projects"
                className="text-lg tracking-wider border border-white/20 hover:border-white/40 px-8 py-3 rounded-full font-medium transition-colors"
              >
                View my work
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className={`py-14 bg-gradient-to-b`}>
        <div className="container px-4 lg:px-28 2xl:px-36">
          <h2 className="text-4xl font-bold text-center mb-20">Services</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className={`group relative ${theme.contentBackground} p-8 rounded-lg`}
              >
                <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="text-gray-400 space-y-2">
                  {service.description.map((desc) => {
                    return (
                      <li className="flex items-center gap-x-2">
                        <Circle className="size-2 fill-current" />
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-14 relative">
        <div
          className={`absolute inset-0 ${theme.background} opacity-30`}
        ></div>
        <div className="relative container px-4 lg:px-28 2xl:px-36">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link
              to="/projects"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All Projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className={`group relative flex lg:block ${theme.contentBackground} p-2 lg:p-0 rounded-2xl overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-44 h-44 lg:w-full lg:h-48 object-cover lg:rounded-none rounded-2xl"
                />
                <div className="pb-2 pl-4 lg:p-6">
                  <h3 className="text-xl font-bold mb-0 lg:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </>
  );
}

export default Home;
