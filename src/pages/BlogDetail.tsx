import React from 'react';
import { Calendar, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { getThemeColors, useThemeStore } from '../store/themeStore';

function BlogDetail() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);
  const [activeSection, setActiveSection] = React.useState('');

  // This would typically come from an API
  const blog = {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2025',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2025, several key trends are shaping the future of how we build and deploy web applications.</p>

      <h2 id="ai-driven-development">1. AI-Driven Development</h2>
      <p>Artificial Intelligence is revolutionizing how we write and debug code. AI-powered development tools are becoming increasingly sophisticated, offering features like:</p>
      <ul>
        <li>Automated code generation</li>
        <li>Intelligent code completion</li>
        <li>Bug prediction and prevention</li>
        <li>Performance optimization suggestions</li>
      </ul>

      <h2 id="webassembly-evolution">2. WebAssembly Evolution</h2>
      <p>WebAssembly continues to gain traction, enabling high-performance web applications that were previously only possible in native environments. This technology is particularly impactful in areas such as:</p>
      <ul>
        <li>Browser-based gaming</li>
        <li>Complex data visualization</li>
        <li>Real-time video processing</li>
        <li>Scientific computing</li>
      </ul>
    `
  };

  const sections = [
    { id: 'ai-driven-development', title: '1. AI-Driven Development' },
    { id: 'webassembly-evolution', title: '2. WebAssembly Evolution' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2');
      const scrollPosition = window.scrollY + 100;

      headings.forEach((heading) => {
        const section = heading.getAttribute('id');
        const offset = heading.offsetTop;

        if (scrollPosition >= offset) {
          setActiveSection(section || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-16">
      {/* Featured Image */}
      <div className="relative">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="relative w-full h-[400px] object-cover"
          style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' }}
        />
      </div>
      <article className="container px-4 lg:px-40 py-14 -mt-20">
        {/* Header */}
        <div className="mb-16">
          <div className="w-full flex justify-between mb-4">
            <div className="flex items-center text-gray-400 gap-x-6">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" alt="Author" className="rounded-full size-12 object-cover" />
              <span className=" font-semibold">by Amlan Sengupta</span>
              <div className="flex items-center">
                <Calendar size={20} className="mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            {/* Social Share */}
            <div className="ml-auto z-20">
              <div className="flex flex-row items-center space-x-4">
                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Share2 size={20} />
                </button>
                <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <BookmarkPlus size={20} />
                </button>
              </div>
            </div>
          </div>
          <h1 className="w-full lg:w-4/5 text-5xl font-bold mb-6">{blog.title}</h1>
        </div>
        <div className="grid grid-cols-9 gap-8">
          {/* Content */}
          <div className="relative col-span-7">
            <div 
              className={`max-w-none text-lg ${theme.text} space-y-2 tracking-wide`}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          <div className="col-span-2">
            {/* Table of Contents */}
            <div className="">
              <div className="sticky top-32">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`
                          block py-2 px-4 rounded-lg transition-colors
                          ${activeSection === section.id 
                            ? 'bg-white/10 text-blue-400' 
                            : 'hover:bg-white/5'
                          }
                        `}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogDetail;
