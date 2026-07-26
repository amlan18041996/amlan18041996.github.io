import { Link } from "react-router";
import { Code, Palette, Lightbulb, ArrowRight, Circle } from "lucide-react";
import TypeEffect from "../components/TypeEffect";
import { getThemeColors, useThemeStore } from "../store/themeStore";
import user_profile_cover from "../assets/main_cover_page.jpeg";

function Home() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description: [
        "React, Vue JS, Angular, Next JS, Nuxt JS, Svelte",
        "TypeScript, JavaScript (ES6+)",
        "Responsive UI with Tailwind CSS & Bootstrap",
      ],
    },
    {
      icon: <Palette size={32} />,
      title: "Backend Development",
      description: [
        "Node JS, Python, PHP with Express, Flask, Django",
        "Laravel, Symfony, CodeIgniter",
        "REST APIs, GraphQL, Microservices",
      ],
    },
    {
      icon: <Lightbulb size={32} />,
      title: "AEM & CMS",
      description: [
        "AEM 6.5, AEM Edge Delivery Services",
        "AEM Franklin/Helix, HTL, Dialogs, Forms",
        "Content migration & component development",
      ],
    },
    {
      icon: <Code size={32} />,
      title: "Full Stack Solutions",
      description: [
        "End-to-end application architecture",
        "Payment integration (Stripe, PayPal)",
        "Real-time features with Socket.io",
      ],
    },
    {
      icon: <Palette size={32} />,
      title: "Databases & Search",
      description: [
        "MySQL, MongoDB, PostgreSQL, Redis",
        "SQLite, MariaDB",
        "COVEO search integration",
      ],
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Cloud & DevOps",
      description: [
        "Docker, CI/CD pipelines",
        "AWS EC2/S3, Oracle OCI, Heroku",
        "GitHub Pages, Netlify deployment",
      ],
    },
  ];

  const featuredProjects = [
    {
      title: "Lifesciences Danaher",
      company: "GSPANN Technologies",
      description:
        "AEM Edge Delivery Services migration for multiple brands with COVEO search integration and internationalization.",
      tags: ["Vue JS", "AEM EDS", "TypeScript", "COVEO"],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "Solvup",
      company: "TIC Retail Accessories",
      description:
        "Customer Support eCommerce platform with React JS portal, 2FA authentication, and drag-and-drop component builder.",
      tags: ["React JS", "Symfony", "MongoDB", "Docker"],
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "APAN Store",
      company: "Personal Project",
      description:
        "Full-featured e-commerce storefront with Shopify, Typesense search, Stripe payments, and admin dashboard.",
      tags: ["Nuxt 4", "Shopify", "Typesense", "Stripe"],
      gradient: "from-sky-600 to-blue-500",
    },
  ];

  return (
    <>
      <header className="min-h-screen relative flex items-center">
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
              <a
                href="/amlan-sengupta-full-stack.pdf"
                download
                className={`text-lg tracking-wider ${theme.accent} bg-gradient-to-r px-8 py-3 rounded-full font-medium transition-colors`}
              >
                Get in touch
              </a>
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
                className={`group relative ${theme.contentBackground} rounded-2xl overflow-hidden`}
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{project.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-white/10">
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

    </>
  );
}

export default Home;
