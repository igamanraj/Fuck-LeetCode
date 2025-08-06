import React from 'react';
import { Play } from 'lucide-react';
import { Project } from '../types';
import { getDifficultyBadgeStyle } from '../styles';

interface ProjectsShowcaseProps {
  projects: Project[];
  isVisible: boolean;
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects, isVisible }) => {
  return (
    <div className={`mt-20 transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-4xl font-black text-center mb-12 text-white">
        Build <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real Projects</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1"
            style={{
              animation: `fadeInUp 0.6s ease-out ${1.6 + index * 0.2}s both`
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <Play className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
            </div>
            
            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between text-sm">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyBadgeStyle(project.difficulty)}`}>
                {project.difficulty}
              </span>
              <span className="text-gray-500">{project.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;