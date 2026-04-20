# The Dubai Mall — Interactive Sales Deck

## Project Overview
A highly immersive, cinematic interactive sales presentation designed to attract global investors, flagship retail partners, and top-tier event sponsors to The Dubai Mall.

## Live Demo
[Insert Live URL]

## Tech Stack
- Frontend: React 18, Vite
- Styling: Tailwind CSS 4, luxury-focused custom themeing
- Animation & Parallax: motion/react (Framer Motion)
- Typography: Playfair Display & Inter
- Icons: Lucide React

## Setup Instructions
```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Design Decisions
- **Luxury Aesthetic**: The interface employs a deep black (`#0a0a0a`), warm cream (`#f5f0eb`), and gold accent (`#c9a84c`) color palette, mirroring the digital presence of high-end fashion houses and premium technology brands (e.g., Apple, Tesla).
- **Non-Linear Navigation**: B2B sales decks must respect the user's time. The fixed right-hand dot navigation allows stakeholders to freely jump between the specific modules (Retail, Luxury, Events, Sponsorship) aligned with their core interests.
- **Background Video Integration**: Moving away from static imagery to full-screen looping and muted YouTube videos creates an immediate, visceral emotional reaction, demonstrating the massive scale and energy of the property.

## AI Tools Used
- Google AI Studio Build system for code iteration and generation.
- DALL-E / external AI platforms for generating high-quality placeholder visuals demonstrating luxury dining and retail activations.

## What I'd Improve With More Time
- **Dynamic Content CMS**: Connect the site to a headless CMS (like Sanity or Strapi) so sales teams can instantly swap videos, layout text, and stats for personalized client pitches.
- **Advanced 3D WebGL**: Implement a 3D interactive model of the mall using Three.js / React Three Fiber, allowing prospects to physically explore available units.
- **Personalized URL Generation**: Create unique, trackable links for different stakeholders featuring dynamic data tailored specifically for that meeting.
