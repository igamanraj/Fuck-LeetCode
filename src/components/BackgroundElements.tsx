import React from 'react';
import { type FloatingElement, type MousePosition } from '../../types';
import { getBackgroundGradient, gridPattern, getFloatingElementStyle, keyframes } from '../../styles';

interface BackgroundElementsProps {
  floatingElements: FloatingElement[];
  mousePosition: MousePosition;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({ 
  floatingElements, 
  mousePosition 
}) => {
  return (
    <>
      {/* Floating animated elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
          style={getFloatingElementStyle(element)}
        />
      ))}

      {/* Custom keyframes style */}
      <style    >{keyframes}</style>

      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={getBackgroundGradient(mousePosition)}
      />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={gridPattern}
      />
      
      {/* Additional tile pattern for more depth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.2) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(147, 51, 234, 0.2) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(147, 51, 234, 0.2) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.2) 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      />
    </>
  );
};

export default BackgroundElements;