# The Dutch Queen - Official Website

A stunning, modern website for The Dutch Queen, the premier Queen tribute band from the Netherlands. This project showcases their unique dual performance capability with an innovative Compare component that demonstrates the difference between their Full Band and Acoustic performances.

## 🎵 Project Overview

**Band**: The Dutch Queen  
**Genre**: Queen tribute band (Best of Queen covers)  
**Key Feature**: Interactive Compare component showcasing two performance types  
**Technology**: Next.js 15 with TypeScript, Tailwind CSS, and Framer Motion

## ✨ Key Features

### 🎭 Dual Performance Showcase
- **Compare Component**: Interactive hover/slide comparison between Full Band and Acoustic setups
- **Full Band Experience**: Complete Queen experience with theatrical staging and stadium energy
- **Acoustic Sessions**: Intimate, stripped-down versions with close audience interaction

### 🎨 Modern Design Elements
- Stunning gradients and animations using Framer Motion
- Mobile-first responsive design
- Queen-inspired color scheme (black, gold, red)
- Professional booking interface

### 📱 Responsive Sections
- **Hero**: Features the Compare component as centerpiece
- **About**: Band story and mission
- **Performances**: Detailed breakdown of both performance types
- **Shows**: Upcoming events calendar with booking status
- **Contact**: Comprehensive booking forms and contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   │   └── compare.tsx    # Custom Compare component
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section with Compare
│   │   ├── about.tsx      # About section
│   │   ├── performances.tsx # Performance types
│   │   ├── shows.tsx      # Upcoming shows
│   │   └── contact.tsx    # Contact & booking
│   └── navigation.tsx     # Main navigation
└── lib/
    └── utils.ts           # Utility functions
```

## 🎯 Performance Types

### Full Band Experience
- Complete Queen experience with all instruments
- Theatrical staging and costume changes
- Stadium-level energy and production
- Perfect for: Festivals, large venues, corporate events
- Pricing: €7,500 - €15,000

### Acoustic Sessions
- Intimate, stripped-down arrangements
- Close audience interaction
- Emotional connection and storytelling
- Perfect for: Private events, acoustic venues, special occasions
- Pricing: €2,500 - €5,000

## 📞 Contact & Booking

- **Email**: booking@thedutchqueen.com
- **Phone**: +31 6 1234 5678
- **Location**: Based in Amsterdam, performing throughout Netherlands & Europe

## 🔧 Development

### Adding New Components
```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]
```

### Environment Variables
Create a `.env.local` file for any environment-specific configuration.

### Deployment
This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel --prod
```

## 📈 Future Enhancements

- File upload system for band content management
- Integration with booking/calendar systems
- Audio/video sample players
- Multi-language support (Dutch/English)
- SEO optimization and analytics

## 🎨 Design Inspiration

- **Color Palette**: Queen-inspired black, gold, and red
- **Typography**: Bold, theatrical fonts
- **Layout**: Inspired by professional band websites like Kensington
- **User Experience**: Focus on showcasing dual performance capability

## 📄 License

This project is proprietary and created specifically for The Dutch Queen band.

---

*Built with passion for Queen's legendary music* 🎵
