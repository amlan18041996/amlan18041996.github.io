import {
  Code,
  Layers,
  GitBranch,
  Server,
  Database,
  LayoutTemplate,
  Wrench,
  Cloud,
} from "lucide-react";
import { getThemeColors, useThemeStore } from "../store/themeStore";

function Skills() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);
  const skillCategories = [
    {
      title: "Web Technologies",
      icon: <Code size={24} />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Sass",
        "Tailwind CSS",
        "Bootstrap",
      ],
      level: 95,
    },
    {
      title: "JS Libraries & Frameworks",
      icon: <Layers size={24} />,
      skills: [
        "React JS",
        "Vue JS",
        "Angular 2/4/13",
        "Next JS",
        "Nuxt JS",
        "Svelte",
        "Svelte Kit",
        "jQuery",
        "Lodash",
        "Moment",
        "Tensorflow",
      ],
      level: 90,
    },
    {
      title: "State Management",
      icon: <GitBranch size={24} />,
      skills: ["Pinia", "Redux with Thunk", "TanStack"],
      level: 85,
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        "Python",
        "PHP",
        "Node JS",
        "Flask",
        "Django",
        "Express JS",
        "Laravel",
        "Symfony",
        "CodeIgniter",
        "Lumen",
        "Livewire",
      ],
      level: 85,
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        "MySQL",
        "MongoDB",
        "MariaDB",
        "SQLite",
        "Redis",
        "PostgreSQL",
      ],
      level: 80,
    },
    {
      title: "CMS & AEM",
      icon: <LayoutTemplate size={24} />,
      skills: [
        "Wordpress",
        "AEM UI",
        "AEM Franklin",
        "HTL",
        "OSGIM Cloud",
        "JCR/CRX",
        "Artifactory",
      ],
      level: 80,
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={24} />,
      skills: [
        "Docker",
        "GraphQL",
        "JWT",
        "DialogFlow",
        "Social Media Integrations",
        "Zoom Integration",
      ],
      level: 75,
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud size={24} />,
      skills: [
        "AWS EC2/S3",
        "Heroku",
        "GitHub Pages",
        "Netlify",
        "Oracle OCI",
      ],
      level: 75,
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-28 2xl:px-36">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">Technical Skills</h1>
            <p className="text-xl text-gray-400">
              Full Stack Developer with 9+ years of experience across Frontend,
              Backend, and AEM technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`relative group ${theme.contentBackground} p-8 rounded-2xl`}
              >
                {/* <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur group-hover:opacity-30 transition-opacity"></div> */}
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="mb-6">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${category.level}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
