# BOSSO Website

Official website for the Business of Sports Student Organization at the University of Texas at Austin.

## About

BOSSO is UT Austin's premier sports analytics and business student organization. This website serves as our digital hub, showcasing our team, projects, newsletters, and providing information for prospective members and sponsors.

## Live Site

https://txbosso.com

## Recent Updates (January 2026)

### New Features
- **Infinite Logo Carousel**: Seamless JavaScript-powered carousel showcasing partner organizations and alumni placements
- **Recruitment Application Page**: Dedicated `joinus_app.html` with Google Forms integration, calendar, and requirements
- **Partnership Page Enhancements**:
  - Custom pie chart visualizations (academic background and class standing)
  - Responsive chart legends with mobile optimization
  - Member statistics showcase
- **Journey Timeline**: Added milestone timeline to about page showing organizational growth

### UI/UX Improvements
- Enhanced mobile responsiveness across all pages
- Optimized pie chart layouts with proper spacing on mobile devices
- Improved carousel animations with pause-on-hover functionality
- Company logo carousel with 13+ partner organizations
- Seamless infinite scroll implementation using requestAnimationFrame

### Technical Improvements
- Modular JavaScript carousel system
- CSS blend modes for seamless chart integration
- Mobile-first breakpoints for charts and legends
- Updated navigation links to point to application page

## Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **SEO-Optimized**: Structured data, meta tags, and semantic HTML
- **Modular Components**: Reusable header and footer JavaScript components
- **Newsletter Archive**: Searchable archive with filtering capabilities
- **Project Showcase**: Detailed case studies with visual presentations
- **Team Directory**: Faculty advisors and student leadership
- **Contact Forms**: Integrated with Google Apps Script for submissions
- **Embedded Calendar**: Google Calendar integration for event tracking
- **Partner Showcase**: Infinite carousel displaying company logos
- **Data Visualizations**: Custom charts showing member demographics

## Technology Stack

- HTML5 with semantic markup
- Vanilla JavaScript (ES6+)
- CSS3 with Grid, Flexbox, and modern features
- Google Apps Script for form handling
- Google Forms and Calendar integration
- Intersection Observer API for scroll animations
- RequestAnimationFrame for smooth carousel
- Schema.org structured data for SEO
- CSS blend modes for image integration

## Project Structure

```
TSAG/
├── index.html                  # Homepage with logo carousel
├── newsletter.html             # Newsletter hub
├── robots.txt                  # Search engine instructions
├── sitemap.xml                 # SEO sitemap
├── CNAME                       # Custom domain config (txbosso.com)
│
├── assets/
│   ├── images/
│   │   ├── logo.png           # Primary site logo
│   │   ├── logo_inverted.png  # Inverted logo variant
│   │   ├── home.JPG           # Homepage hero image
│   │   ├── group.JPG          # About page hero image
│   │   ├── logos/             # Company/partner logos (13 files)
│   │   │   ├── mckinsey.png
│   │   │   ├── apple.jpg
│   │   │   ├── deloitte.jpg
│   │   │   ├── austinfc.png
│   │   │   ├── spurs.png
│   │   │   ├── goldman sachs.png
│   │   │   ├── texaslonghorns.png
│   │   │   ├── draftkings.png
│   │   │   ├── robinhood.png
│   │   │   ├── circuitoftheamericas.png
│   │   │   ├── usdepartmentofstate.png
│   │   │   ├── villarealcf.png
│   │   │   └── dailytexan.png
│   │   ├── charts/            # Data visualization charts
│   │   │   ├── SchoolChart.png
│   │   │   └── ClassChart.png
│   │   ├── team/              # Team member photos (12 files)
│   │   └── faculty/           # Faculty advisor photos (2 files)
│   ├── js/
│   │   ├── header-component.js  # Modular navigation header
│   │   └── footer-component.js  # Modular footer with newsletter CTA
│   └── css/                   # (Reserved for future stylesheets)
│
├── pages/
│   ├── about.html             # About page with journey timeline
│   ├── contact.html           # Partnership page with demographics
│   ├── projects.html          # Projects listing
│   ├── joinus.html            # Legacy join page
│   ├── joinus_app.html        # Active recruitment application page
│   ├── projects/              # Individual project pages
│   │   ├── project1.html
│   │   ├── project2.html
│   │   ├── project3.html
│   │   ├── project4.html
│   │   ├── project5.html
│   │   └── project6.html
│   └── newsletters/           # Newsletter archive
│       ├── newsletter_issue_1.html
│       ├── newsletter_issue_2.html
│       ├── newsletter_issue_3.html
│       └── newsletter_issue_4.html
│
└── docs/
    ├── README.md              # This file
    └── SEO_IMPROVEMENTS_GUIDE.md  # Comprehensive SEO guide
```

## Component System

### Header Component
The header navigation is modularized in `assets/js/header-component.js` and automatically loads on all pages. Features include:
- Responsive hamburger menu with smooth animations
- Touch and hover detection for optimal UX
- Consistent navigation across all pages
- Links to application page (`/pages/joinus_app.html`)
- Mobile-optimized menu with proper sizing

### Footer Component
The footer is modularized in `assets/js/footer-component.js` and includes:
- Quick links to all major pages
- Social media integration (Instagram, LinkedIn, HornsLink, LinkTree, Podcast)
- Newsletter subscription CTA
- Contact information (external@txbosso.com)
- Rounded section design with gradient background

### Logo Carousel
JavaScript-powered infinite carousel on homepage:
- Seamless loop using requestAnimationFrame
- Automatic cloning for continuous scroll
- Pause on hover functionality
- 13 company/partner logos
- Mobile-responsive with optimized spacing

## Page Details

### Homepage (index.html)
- Hero section with call-to-action
- Mission statement and organizational pillars
- "Where We Work" carousel with partner logos
- Smooth scroll animations with Intersection Observer
- Preloader for enhanced initial load experience

### About Page (pages/about.html)
- Team member showcase with photos and bios
- Faculty advisor section
- Organizational journey timeline with milestones
- Mobile-responsive grid layouts
- Hero image with organization photo

### Partnership Page (pages/contact.html)
- Why partner with BOSSO section
- Member statistics (130+ members, 35+ majors)
- Demographic breakdown with pie charts
  - Academic background by school (8 categories)
  - Class standing distribution (4 categories)
- Custom chart legends with color-coded items
- Partnership inquiry form
- Mobile-optimized chart layouts with proper spacing

### Recruitment Page (pages/joinus_app.html)
- Spring 2026 recruitment information
- Application requirements and timeline
- Coffee chat encouragement
- Embedded Google Calendar for events
- Application status messaging
- Contact information (board@txbosso.com)

### Newsletter Hub (newsletter.html)
- Newsletter archive with filtering
- Individual issue pages
- Responsive grid layout
- Direct links to Google Forms

### Projects (pages/projects.html)
- Portfolio of consulting and research projects
- Individual project detail pages
- Case study format with visuals

## SEO Optimization

The website includes comprehensive SEO features:

### Meta Tags
- Unique title and description tags on all pages
- Keyword optimization for sports analytics, UT Austin
- Author and canonical URL tags
- Theme color for browser UI

### Social Media
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card support with large image preview
- Custom OG images for better social presence

### Structured Data
- Schema.org Organization markup
- AboutPage schema on about.html
- CollectionPage schema for archives
- Local business information
- Parent organization linking (UT Austin, McCombs)

### Technical SEO
- XML sitemap (`sitemap.xml`) with all pages and lastmod dates
- Robots.txt for proper crawler instructions
- Semantic HTML5 markup throughout
- Descriptive alt text on all images
- Mobile-first responsive design
- Fast load times with optimized assets

## Development

### Adding New Content

**New Team Member:**
1. Add photo to `assets/images/team/firstname.JPG`
2. Update `pages/about.html` with team member card
3. Use relative path: `../assets/images/team/firstname.JPG`
4. Ensure photo is compressed (< 500KB recommended)

**New Project:**
1. Create `pages/projects/project#.html`
2. Add to `pages/projects.html` listing
3. Update `sitemap.xml` with new URL and lastmod date
4. Use asset paths: `../../assets/`
5. Include project title, description, and visuals

**New Newsletter:**
1. Create `pages/newsletters/newsletter_issue_#.html`
2. Add to `newsletter.html` hub with appropriate metadata
3. Update `sitemap.xml`
4. Use asset paths: `../../assets/`
5. Include issue number and publication date

**New Partner Logo:**
1. Add logo to `assets/images/logos/`
2. Update `index.html` carousel section
3. Add logo twice (in original set and duplicate set for seamless loop)
4. Maintain consistent sizing (200px width recommended)
5. Use appropriate image format (PNG for transparency, JPG for photos)

**New Chart/Visualization:**
1. Add chart to `assets/images/charts/`
2. Update corresponding HTML file with chart reference
3. Create custom legend HTML if needed
4. Use `mix-blend-mode: multiply` for seamless white background removal
5. Ensure mobile responsiveness with media queries

### File Path Reference

**From root files (index.html, newsletter.html):**
```html
<img src="assets/images/logo.png">
<img src="assets/images/logos/mckinsey.png">
<script src="assets/js/header-component.js"></script>
```

**From pages/ directory:**
```html
<img src="../assets/images/logo.png">
<img src="../assets/images/charts/SchoolChart.png">
<script src="../assets/js/header-component.js"></script>
```

**From nested directories (pages/projects/, pages/newsletters/):**
```html
<img src="../../assets/images/logo.png">
<script src="../../assets/js/header-component.js"></script>
```

## Performance Optimization

### Images
- All company logos optimized and properly sized
- Chart images use CSS blend modes for background transparency
- Lazy loading for below-the-fold images
- Compressed JPG/PNG files

### JavaScript
- Modular component system reduces code duplication
- RequestAnimationFrame for smooth 60fps carousel
- Efficient event delegation
- Minimal external dependencies (vanilla JS only)
- Intersection Observer for scroll animations

### CSS
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Media queries for breakpoints (900px, 600px, 480px)
- Minimal CSS with no frameworks
- CSS animations for smooth transitions

### Loading
- Preloader for initial page load
- Async component loading
- Optimized form embeds
- Efficient DOM manipulation

## Mobile Responsiveness

### Breakpoints
- **900px**: Tablet/small desktop adjustments
- **600px**: Mobile landscape
- **480px**: Mobile portrait (small phones)

### Mobile Optimizations
- Hamburger menu for navigation
- Touch-optimized carousel controls
- Responsive chart layouts with increased spacing
- Stacked grid layouts on small screens
- Optimized image sizes for mobile
- Font size adjustments for readability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest - including iOS)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled for full functionality

## Form Integration

### Google Forms
- Newsletter signup: Footer call-to-action
- Contact form: Partnership inquiries on `contact.html`

### Google Calendar
- Events calendar embedded on `joinus_app.html`
- Calendar account: external@txbosso.com
- Timezone: America/Chicago (CST/CDT)

## Contributing

### Team Members
When updating team information:
1. Ensure photos are compressed and optimized (< 500KB)
2. Follow naming conventions (firstname.JPG)
3. Update photo and bio information consistently
4. Test responsiveness on mobile devices
5. Maintain alphabetical or organizational order

### Content Updates
1. Maintain consistent formatting and styling
2. Update `sitemap.xml` when adding new pages
3. Include appropriate meta tags and SEO data
4. Test all links and images before committing
5. Validate HTML (https://validator.w3.org/)
6. Check mobile responsiveness

### Code Standards
- Use semantic HTML5 elements
- Comment complex JavaScript logic
- Follow existing naming conventions
- Test cross-browser compatibility
- Optimize images before adding
- Use relative paths for all assets

## Documentation

Detailed documentation is available in the `docs/` folder:
- **README.md** - This file, project overview and guidelines
- **SEO_IMPROVEMENTS_GUIDE.md** - Complete SEO strategy and implementation guide

## Deployment

The website is hosted on GitHub Pages with a custom domain (txbosso.com). Changes pushed to the main branch are automatically deployed.

### Deployment Checklist
- [ ] Test all pages locally
- [ ] Verify all images load correctly with new paths
- [ ] Check responsive design on multiple devices
- [ ] Validate HTML and CSS
- [ ] Test form submissions
- [ ] Test carousel functionality
- [ ] Update sitemap if structure changed
- [ ] Clear browser cache after deployment
- [ ] Verify mobile layouts (especially charts)
- [ ] Test navigation links

### Pre-Push Checklist
- [ ] All asset paths updated (logos, charts)
- [ ] No broken links
- [ ] Forms functional
- [ ] Calendar loads correctly
- [ ] Carousel scrolls smoothly
- [ ] Mobile charts display without overlap
- [ ] SEO meta tags present on new pages

## Maintenance

### Regular Updates
- Update recruitment information each semester
- Add new newsletter issues as published
- Update team photos and bios
- Add new partner logos as relationships develop
- Update event calendar regularly
- Refresh statistics and charts annually

### Analytics Review
- Monitor Google Search Console for SEO performance
- Track page performance metrics
- Review form submission rates
- Check mobile vs desktop traffic
- Analyze bounce rates and engagement

## Contact

For technical questions or issues:
- Technical Director: Riddhima Yadav
- General Inquiries: external@txbosso.com
- Recruitment: board@txbosso.com
- Website: https://txbosso.com

## License

Copyright 2025 Business of Sports Student Organization. All rights reserved.

---

Built and maintained by BOSSO Technical Team
University of Texas at Austin | McCombs School of Business
Last Updated: January 2026
