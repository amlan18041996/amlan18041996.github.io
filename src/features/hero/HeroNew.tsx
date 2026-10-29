import { portfolioData } from '../../data/portfolio';
import { Button } from '../../components/ui/Button';
import TypeEffect from '../../components/TypeEffect';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function HeroNew() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <header ref={ref} className={`min-h-[90vh] flex items-center relative reveal ${isVisible ? 'visible' : ''}`}>
      <div className="container px-4 lg:px-28 2xl:px-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{portfolioData.person.name}</span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">
              <TypeEffect
                words={[
                  'Full Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                  'Technical Lead',
                  'Digital Strategist',
                ]}
              />
            </div>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              {portfolioData.person.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={portfolioData.person.resumeUrl} download>
                <Button size="lg">Download Resume</Button>
              </a>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View Projects
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <img
                src={portfolioData.person.avatar}
                alt={portfolioData.person.name}
                className="w-full max-w-md mx-auto rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
