import { ExternalLink } from 'lucide-react';
import { getThemeColors, useThemeStore } from '../store/themeStore';

function Projects() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);
  const projects = [
    {
      title: 'AI-Powered Analytics',
      desc: 'Data visualization platform with machine learning insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      tags: ['React', 'Python', 'TensorFlow'],
    },
    {
      title: 'Cloud Infrastructure',
      desc: 'Scalable cloud-native application architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      tags: ['AWS', 'Docker', 'Kubernetes'],
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[300px] object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 text-sm rounded-full bg-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
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
