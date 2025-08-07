import { Code, Zap, Target, Users } from 'lucide-react';
import { type Feature, type Testimonial,type Project } from './src/types/types';

export const features: Feature[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Real-World Projects",
    description: "Build actual applications instead of solving puzzle problems that don't exist in production."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Practical Skills",
    description: "Learn frameworks, databases, and tools you'll actually use in your day job."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Portfolio Ready",
    description: "Create projects that showcase your abilities to real employers, not algorithm memorization."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Driven",
    description: "Join developers who believe in learning through building, not grinding outdated problems."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Full Stack Developer at Meta",
    content: "I wasted 6 months on LeetCode and got nowhere. Built 3 real projects here and landed my dream job in 2 months.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Engineer at Spotify",
    content: "LeetCode taught me how to reverse a binary tree. This platform taught me how to build scalable applications.",
    rating: 5
  },
  {
    name: "Alex Kumar",
    role: "Tech Lead at Shopify",
    content: "Finally, a platform that focuses on what actually matters - building real software that real people use.",
    rating: 5
  }
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    description: "Build a full-featured online store with payments, inventory management, and analytics.",
    difficulty: "Intermediate",
    duration: "2-3 weeks"
  },
  {
    title: "Real-time Chat App",
    tech: ["Socket.io", "Express", "Redis", "React"],
    description: "Create a Slack-like messaging platform with channels, direct messages, and file sharing.",
    difficulty: "Advanced",
    duration: "3-4 weeks"
  },
  {
    title: "Task Management System",
    tech: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    description: "Build a Trello-inspired project management tool with teams, boards, and automation.",
    difficulty: "Beginner",
    duration: "1-2 weeks"
  }
];

export const leetcodeProblems: string[] = [
  "Two Sum",
  "Reverse Linked List",
  "Binary Tree Inorder Traversal",
  "Valid Parentheses",
  "Merge Two Sorted Lists"
];

export const realWorldSkills: string[] = [
  "API Design & Integration",
  "Database Optimization", 
  "User Authentication",
  "Payment Processing",
  "Cloud Deployment"
];