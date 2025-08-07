import React from 'react';

interface StatsSectionProps {
  isVisible: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ isVisible }) => {
  return (
    <div className={`text-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-4xl font-black text-purple-400 mb-2">10,000+</div>
          <div className="text-gray-400">Developers Building Real Shit</div>
        </div>
        <div>
          <div className="text-4xl font-black text-pink-400 mb-2">500+</div>
          <div className="text-gray-400">Production-Ready Projects</div>
        </div>
        <div>
          <div className="text-4xl font-black text-red-400 mb-2">Zero</div>
          <div className="text-gray-400">Useless Algorithm Problems</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;