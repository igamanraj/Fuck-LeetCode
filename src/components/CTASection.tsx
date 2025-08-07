import React from 'react';

interface CTASectionProps {
  isVisible: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ isVisible }) => {
  return (
    <div className={`text-center mt-20 transition-all duration-1000 delay-1700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-4xl font-black mb-6 text-white">
        Ready to build something 
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> actually useful?</span>
      </h2>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Join thousands of developers who chose practical learning over pointless puzzle solving.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          Get Started Free
        </button>
        <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
          View Projects
        </button>
      </div>
      
      {/* Final animated message */}
      <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/30 max-w-2xl mx-auto">
        <p className="text-lg text-purple-200">
          <span className="text-2xl">💡</span> Stop grinding algorithms. Start building your future.
        </p>
      </div>
    </div>
  );
};

export default CTASection;