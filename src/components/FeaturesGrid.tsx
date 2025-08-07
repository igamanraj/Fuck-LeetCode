import React from 'react';
import { type Feature } from '../types/types';
import { getAnimationDelay } from '../../styles';

interface FeaturesGridProps {
  features: Feature[];
  isVisible: boolean;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, isVisible }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: getAnimationDelay(index) }}
        >
          <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-300">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;