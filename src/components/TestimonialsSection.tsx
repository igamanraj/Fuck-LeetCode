import React from 'react';
import { Star } from 'lucide-react';
import { type Testimonial } from '../types/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  currentTestimonial: number;
  onTestimonialChange: (index: number) => void;
  isVisible: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  testimonials, 
  currentTestimonial, 
  onTestimonialChange, 
  isVisible 
}) => {
  return (
    <div className={`mt-20 transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-4xl font-black text-center mb-12 text-white">
        What <span className="text-purple-400">Real Developers</span> Say
      </h2>
      
      <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-xl text-gray-300 mb-6 italic min-h-[3rem]">
            "{testimonials[currentTestimonial].content}"
          </p>
          
          <div className="text-white font-semibold">
            {testimonials[currentTestimonial].name}
          </div>
          <div className="text-purple-400 text-sm">
            {testimonials[currentTestimonial].role}
          </div>
          
          {/* Testimonial dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-purple-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => onTestimonialChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;