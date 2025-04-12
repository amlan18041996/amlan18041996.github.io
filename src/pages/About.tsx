import { Terminal, Globe, Cpu, Palette } from 'lucide-react';
import cover_page from '../assets/story_cover_page.jpeg';

function About() {
  return (
    <div className="pt-16">
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={cover_page} 
                alt="Profile" 
                className="relative rounded-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-gray-300 text-lg mb-8">
                With over 5 years of experience in software development, I've had the privilege of working
                on diverse projects that challenge the status quo and push technological boundaries.
                My approach combines technical expertise with creative problem-solving to deliver
                exceptional digital solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
                  <p className="text-gray-400">React, TypeScript, Next.js</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h3 className="font-semibold mb-2 text-purple-400">Backend</h3>
                  <p className="text-gray-400">Node.js, Python, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-black via-blue-950 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">Expertise</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Terminal size={32} />, title: 'Development', desc: 'Writing clean, efficient, and maintainable code' },
              { icon: <Globe size={32} />, title: 'Web Apps', desc: 'Building scalable web applications' },
              { icon: <Cpu size={32} />, title: 'Architecture', desc: 'Designing robust system architectures' },
              { icon: <Palette size={32} />, title: 'Design', desc: 'Creating intuitive user interfaces' },
            ].map((skill, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;