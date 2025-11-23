import { Database, Layout, Terminal, Cloud, Shield, Brain } from "lucide-react";
import { getThemeColors, useThemeStore } from "../store/themeStore";

function Skills() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
      level: 90,
    },
    {
      title: "Backend Development",
      icon: <Terminal size={24} />,
      skills: [
        "Node.js",
        "Python",
        "Express",
        "Flask",
        "Django",
        "FastAPI",
        "GraphQL",
      ],
      level: 85,
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
      level: 80,
    },
    {
      title: "DevOps",
      icon: <Cloud size={24} />,
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux"],
      level: 75,
    },
    {
      title: "Security",
      icon: <Shield size={24} />,
      skills: ["OAuth", "JWT", "HTTPS", "Security Headers", "Auth0"],
      level: 70,
    },
    {
      title: "AI & ML",
      icon: <Brain size={24} />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "NLP",
        "Computer Vision",
      ],
      level: 65,
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-28 2xl:px-36">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">Technical Skills</h1>
            <p className="text-xl text-gray-400">
              A comprehensive overview of my technical expertise and proficiency
              across various domains
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
