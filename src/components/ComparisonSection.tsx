import React from 'react';
import { Trash2, Award, CheckCircle } from 'lucide-react';

interface ComparisonSectionProps {
  leetcodeProblems: string[];
  realWorldSkills: string[];
  isVisible: boolean;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ 
  leetcodeProblems, 
  realWorldSkills, 
  isVisible 
}) => {
  return (
    <div className={`mt-20 transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-4xl font-black text-center mb-12 text-white">
        <span className="text-red-400">LeetCode</span> vs <span className="text-green-400">Real World</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* LeetCode Column */}
        <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
            <Trash2 className="w-6 h-6 mr-3" />
            LeetCode Bullshit
          </h3>
          <div className="space-y-4">
            {leetcodeProblems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-center text-gray-300 opacity-50 line-through"
                style={{
                  animation: `fadeIn 0.5s ease-out ${1.5 + index * 0.2}s both`
                }}
              >
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse" />
                {problem}
              </div>
            ))}
          </div>
          <p className="text-red-300/70 mt-6 text-sm italic">
            "When will you ever need to reverse a binary tree at your job?" - Literally every developer
          </p>
        </div>

        {/* Real World Column */}
        <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3" />
            Real World Skills
          </h3>
          <div className="space-y-4">
            {realWorldSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center text-green-300"
                style={{
                  animation: `slideInRight 0.5s ease-out ${1.5 + index * 0.2}s both`
                }}
              >
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                {skill}
              </div>
            ))}
          </div>
          <p className="text-green-300/70 mt-6 text-sm italic">
            "These are the skills that actually get you hired and promoted." - Every hiring manager
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;