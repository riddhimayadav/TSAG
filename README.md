# BOSSO - Business of Sports Student Organization Website

A modern, responsive website for the University of Texas at Austin's premier sports business and analytics student organization.

## Overview

This website serves as the digital hub for BOSSO, featuring information about the organization, team members, recruitment process, and project showcases. Built with vanilla HTML, CSS, and JavaScript, the site emphasizes clean design, smooth interactions, and mobile-first responsiveness.

## Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all device sizes
- **Modular Architecture**: Reusable header and footer components for maintainable code
- **Interactive Navigation**: Smart hamburger menu with touch/hover detection
- **Form Integration**: Google Apps Script backend for contact form submissions
- **Smooth Animations**: Intersection Observer API for scroll-triggered fade-in effects
- **Calendar Integration**: Embedded Google Calendar for event management
- **Modern UI/UX**: Clean typography, strategic color usage, and intuitive user flows

## File Structure

```
├── index.html              # Homepage with mission and pillars
├── about.html              # Team information and bios
├── joinus.html            # Recruitment process and requirements
├── contact.html           # Sponsorship contact form
├── projects.html          # Project portfolio (coming soon)
├── project1.html          # Sample
├── project2.html          # Sample
├── project3.html          # Sample
├── header-component.js    # Reusable navigation header
├── footer-component.js    # Reusable footer with CTA
└── assets/
    ├── logo.png          # Organization logo
    ├── home.JPG          # Hero banner image
    ├── kirk.jpeg         # Faculty advisor photo
    ├── o1.jpg - o10.png  # Officer headshots
    └── pm1.jpg - pm6.png # Project manager photos
```

## Technical Implementation

### JavaScript Components

**Header Component** (`header-component.js`)
- Dynamic navigation with hamburger menu
- Device detection for touch vs hover interactions
- Smooth menu animations and state management

**Footer Component** (`footer-component.js`)
- Consistent footer across all pages
- Call-to-action sections with scroll functionality
- Social media and contact links

### Form Handling

Contact forms use Google Apps Script for backend processing:
- Form data submitted via URL parameters to avoid CORS issues
- Hidden iframe technique for seamless submission
- Success/error state management with user feedback

### Responsive Design

- CSS Grid and Flexbox for flexible layouts
- Mobile-first media queries (768px, 600px, 480px breakpoints)
- Fluid typography and spacing systems
- Touch-optimized interactive elements

## Performance Features

- Optimized image loading
- Minimal external dependencies
- Efficient event delegation
- Intersection Observer for animation performance

## Maintenance

The modular component system allows for easy updates:
- Header/footer changes propagate across all pages automatically
- Individual page styling contained within each file
- Clear separation of content and functionality

---

Built with modern web standards for the Business of Sports Student Organization at The University of Texas at Austin.