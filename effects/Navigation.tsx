import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

interface NavigationProps {
  isVisible: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isVisible }) => {
  return (
    <nav className="relative z-50 px-6 py-6 flex justify-between items-center">
      <div className={`text-2xl font-black transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <span className="text-white">fuck</span>
        <span className="text-purple-400">leetcode</span>
      </div>
      
      <div className={`flex space-x-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <Github className="w-6 h-6 hover:text-purple-400 transition-colors cursor-pointer" />
        <Twitter className="w-6 h-6 hover:text-purple-400 transition-colors cursor-pointer" />
        <Mail className="w-6 h-6 hover:text-purple-400 transition-colors cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navigation;