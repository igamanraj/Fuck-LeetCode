# Fuck LeetCode Landing Page

A modern, animated landing page built with React and TypeScript that promotes practical software development over algorithmic puzzle solving.

## Features

- 🎨 **Modern Design**: Dark theme with gradient animations and glassmorphism effects
- ⚡ **Smooth Animations**: CSS-in-JS animations with staggered delays for enhanced UX
- 📱 **Responsive Layout**: Fully responsive design that works on all devices  
- 🎯 **Interactive Elements**: Mouse tracking, hover effects, and animated testimonials
- 🧩 **Component Architecture**: Well-structured, reusable React components
- 🔧 **TypeScript**: Fully typed for better development experience

## Project Structure

```
src/
├── components/
│   ├── BackgroundElements.tsx    # Floating elements and background effects
│   ├── ComparisonSection.tsx     # LeetCode vs Real World comparison
│   ├── CTASection.tsx           # Call-to-action section
│   ├── FeaturesGrid.tsx         # Features showcase grid
│   ├── Footer.tsx               # Page footer
│   ├── HeroSection.tsx          # Main hero section
│   ├── Navigation.tsx           # Top navigation bar
│   ├── ProjectsShowcase.tsx     # Real-world projects showcase
│   ├── StatsSection.tsx         # Statistics display
│   ├── TestimonialsSection.tsx  # User testimonials carousel
│   ├── FuckLeetCodeLanding.tsx  # Main component
│   └── index.tsx               # Component exports
├── data.tsx                    # Static data and content
├── hooks.ts                    # Custom React hooks
├── styles.ts                   # CSS-in-JS styles and utilities
└── types.ts                    # TypeScript type definitions
```

## Components Overview

### Core Components
- **FuckLeetCodeLanding**: Main container component that orchestrates all sections
- **Navigation**: Top navigation with social links and branding
- **HeroSection**: Main headline and call-to-action
- **BackgroundElements**: Animated floating elements and gradient backgrounds

### Content Sections
- **FeaturesGrid**: Displays key platform features in a responsive grid
- **StatsSection**: Shows impressive statistics about the platform
- **ComparisonSection**: Side-by-side comparison of LeetCode vs real-world skills
- **ProjectsShowcase**: Gallery of real-world projects users can build
- **TestimonialsSection**: Rotating testimonials from satisfied developers
- **CTASection**: Final call-to-action with signup buttons

### Utilities
- **hooks.ts**: Custom hooks for mouse tracking, animations, and state management
- **styles.ts**: CSS-in-JS utilities and style generators
- **data.tsx**: Static content including features, testimonials, and projects
- **types.ts**: TypeScript interfaces for type safety

## Key Features

### Animations
- Staggered entrance animations for all sections
- Mouse-tracking gradient backgrounds
- Floating particle effects
- Hover animations on interactive elements
- Auto-rotating testimonials

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions

### Performance
- Component-based architecture for optimal re-rendering
- Custom hooks for efficient state management
- CSS-in-JS for dynamic styling
- TypeScript for development-time optimizations

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fuck-leetcode-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Customizing Content
Edit the `data.tsx` file to modify:
- Features list
- Testimonials
- Project showcases
- LeetCode problems list
- Real-world skills list

### Styling
Modify styles in `styles.ts` or add new Tailwind classes directly in components.

### Adding New Sections
1. Create a new component in the `components/` directory
2. Add it to the main `FuckLeetCodeLanding.tsx` component
3. Update types in `types.ts` if needed
4. Add any static data to `data.tsx`

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Next.js**: React framework (optional, can be adapted for other setups)

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern developer tools and platforms
- Design influenced by contemporary dark-mode aesthetics
- Built for developers who value practical skills over algorithmic puzzles