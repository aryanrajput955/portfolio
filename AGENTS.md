## Project Summary
A creative portfolio website cloned from the design and color theme of `mindmarket.com`. The site is a single-page landing experience focused on a clean, modern aesthetic with smooth scrolling and interactive elements.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, Lenis (Smooth Scroll)
- **Icons**: Lucide React

## Architecture
- `src/components/`: Modular UI components for each section (Hero, About, WhatIDo, Projects, Contact, Footer).
- `src/components/SmoothScroll.tsx`: Lenis wrapper for global smooth scrolling.
- `src/components/MovingLine.tsx`: Scroll-progress-linked vertical line indicator.
- `src/app/layout.tsx`: Root layout integrating navigation and scroll behavior.
- `src/app/page.tsx`: Main landing page assembly.

## User Preferences
- **Scroll Behavior**: Smooth scrolling using Lenis.
- **Visual Style**: Based on `mindmarket.com` (off-white background, primary green accents, rounded cards).
- **Interactions**: Micro-interactions on buttons and scroll-triggered animations.

## Project Guidelines
- Use functional components with `use client` where necessary for animations.
- Maintain a cohesive color palette: Background (#F5F3E7), Primary (#739B51), Secondary (#E9E12E), Accent (#F27059).
- Ensure high accessibility and responsive design.

## Common Patterns
- Section IDs for smooth scroll navigation.
- Framer Motion's `whileInView` for scroll-triggered entry animations.
- Relative positioning for decorative background elements.
