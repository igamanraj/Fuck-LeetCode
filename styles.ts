import { type MousePosition } from './types';

export const keyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
`;

export const getBackgroundGradient = (mousePosition: MousePosition) => ({
  background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`
});

export const gridPattern = {
  backgroundImage: `
    linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px), 
    linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px),
    linear-gradient(rgba(147, 51, 234, 0.1) 0.5px, transparent 0.5px), 
    linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0.5px, transparent 0.5px)
  `,
  backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
  backgroundPosition: '0 0, 0 0, 0 0, 0 0'
};

export const getFloatingElementStyle = (element: { x: number; y: number; delay: number }) => ({
  left: `${element.x}%`,
  top: `${element.y}%`,
  animation: `float ${3 + element.delay}s ease-in-out infinite`,
  animationDelay: `${element.delay}s`
});

export const getAnimationDelay = (index: number, baseDelay: number = 900) => 
  `${baseDelay + index * 100}ms`;

export const getDifficultyBadgeStyle = (difficulty: string) => {
  const styles = {
    'Beginner': 'bg-green-500/20 text-green-300',
    'Intermediate': 'bg-yellow-500/20 text-yellow-300',
    'Advanced': 'bg-red-500/20 text-red-300'
  };
  return styles[difficulty as keyof typeof styles] || styles.Beginner;
};