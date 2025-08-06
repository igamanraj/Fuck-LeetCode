export interface MousePosition {
  x: number;
  y: number;
}

export interface FloatingElement {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}