import React from 'react';
import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { getThemeColors, useThemeStore } from '../store/themeStore';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  categories: string[];
}

function Blogs() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const categories = [
    'Web Development',
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'DevOps',
    'Cloud',
    'Security',
    'UI/UX',
    'Performance'
  ];

  const blogs: Blog[] = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2025',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development...',
      date: '2024-03-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      categories: ['Web Development', 'JavaScript', 'React']
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Advanced Tips and Tricks',
      excerpt: 'Deep dive into TypeScript features that will level up your development game...',
      date: '2024-03-10',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
      categories: ['TypeScript', 'JavaScript']
    },
    {
      id: 3,
      title: 'Building Scalable Applications with Microservices',
      excerpt: 'A comprehensive guide to designing and implementing microservices architecture...',
      date: '2024-03-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      categories: ['DevOps', 'Cloud', 'Node.js']
    },
    {
      id: 4,
      title: 'Optimizing React Performance: A Deep Dive',
      excerpt: 'Learn advanced techniques to optimize your React applications for better performance...',
      date: '2024-03-01',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
      categories: ['React', 'Performance', 'JavaScript']
    },
    {
      id: 5,
      title: 'Modern UI/UX Principles for Web Applications',
      excerpt: 'Essential design principles for creating intuitive and engaging user interfaces...',
      date: '2024-02-28',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80',
      categories: ['UI/UX', 'Web Development']
    },
    {
      id: 6,
      title: 'Securing Your Web Applications: Best Practices',
      excerpt: 'Comprehensive guide to implementing security measures in modern web applications...',
      date: '2024-02-25',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      categories: ['Security', 'Web Development']
    },
    {
      id: 7,
      title: 'Cloud-Native Development with Kubernetes',
      excerpt: 'Learn how to build and deploy applications using Kubernetes and cloud services...',
      date: '2024-02-20',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      categories: ['Cloud', 'DevOps']
    },
    {
      id: 8,
      title: 'State Management in React: A Complete Guide',
      excerpt: 'Comparing different state management solutions and their use cases in React...',
      date: '2024-02-15',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
      categories: ['React', 'JavaScript']
    }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || blog.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      <section className="py-32">
        <div className="container px-4 lg:px-28 2xl:px-36">
          <h1 className="text-5xl font-bold mb-20 text-center">Latest Articles</h1>

          {/* Search and Categories */}
          <div className="mb-12">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-12 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`
                    flex items-center px-4 py-2 rounded-full transition-colors
                    ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }
                  `}
                >
                  <Tag size={14} className="mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link 
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className={`group relative ${theme.contentBackground} backdrop-blur-sm rounded-xl overflow-hidden block`}
              >
                <article className="">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{blog.date}</span>
                      <Clock size={16} className="ml-4 mr-2" />
                      <span>{blog.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.categories.map((category, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
