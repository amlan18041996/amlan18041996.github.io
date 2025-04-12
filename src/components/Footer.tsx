import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Amlan Sengupta. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
