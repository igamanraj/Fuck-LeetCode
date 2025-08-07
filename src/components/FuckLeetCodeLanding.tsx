import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeaturesGrid from './FeaturesGrid';
import StatsSection from './StatsSection';
import ComparisonSection from './ComparisonSection';
import ProjectsShowcase from './ProjectsShowcase';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';
import BackgroundElements from './BackgroundElements';
import { 
  useMousePosition, 
  useFloatingElements, 
  useTestimonialRotation, 
  usePageVisibility 
} from '../../hooks';
import { 
  features, 
  testimonials, 
  projects, 
  leetcodeProblems, 
  realWorldSkills 
} from '../../data';

const FuckLeetCodeLanding: React.FC = () => {
  const mousePosition = useMousePosition();
  const isVisible = usePageVisibility();
  const floatingElements = useFloatingElements();
  const { currentTestimonial, setCurrentTestimonial } = useTestimonialRotation();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundElements 
        floatingElements={floatingElements}
        mousePosition={mousePosition}
      />

      <Navigation isVisible={isVisible} />

      <main className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <HeroSection isVisible={isVisible} />
          
          <FeaturesGrid features={features} isVisible={isVisible} />
          
          <StatsSection isVisible={isVisible} />
          
          <ComparisonSection 
            leetcodeProblems={leetcodeProblems}
            realWorldSkills={realWorldSkills}
            isVisible={isVisible}
          />
          
          <ProjectsShowcase projects={projects} isVisible={isVisible} />
          
          <TestimonialsSection 
            testimonials={testimonials}
            currentTestimonial={currentTestimonial}
            onTestimonialChange={setCurrentTestimonial}
            isVisible={isVisible}
          />
          
          <CTASection isVisible={isVisible} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FuckLeetCodeLanding;