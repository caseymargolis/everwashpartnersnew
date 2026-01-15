# EverWash Landing Page

## Overview
This is a landing page for EverWash, a car wash membership platform. The site is built using Eleventy (11ty), a static site generator, and features a modern, responsive design with Bootstrap 5, jQuery, and Swiper.js for interactive components.

**Current State:** The site is fully set up and running in the Replit environment. The development server is configured to run on port 5000 and is accessible through the Replit webview.

## Recent Changes (October 9, 2025)
- Initial setup from GitHub import
- Configured Eleventy to serve on port 5000 with host 0.0.0.0 for Replit compatibility
- Set up development workflow to run `npm run dev`
- Configured deployment settings for autoscale deployment

## Project Architecture

### Tech Stack
- **Static Site Generator:** Eleventy (11ty) v3.1.2
- **Template Engine:** Nunjucks (.njk files)
- **CSS Framework:** Bootstrap 5.3.2
- **JavaScript Libraries:** 
  - jQuery 3.7.1
  - Swiper.js (for carousels/sliders)
- **Build System:** npm scripts

### Project Structure
```
├── src/
│   ├── _includes/          # Nunjucks templates
│   │   ├── base.njk       # Main layout template
│   │   ├── header.njk     # Header component
│   │   └── footer.njk     # Footer component
│   ├── assets/
│   │   ├── css/           # Custom CSS
│   │   ├── js/            # Custom JavaScript
│   │   ├── images/        # Image assets
│   │   └── videos/        # Video assets
│   └── index.njk          # Homepage template
├── public/                 # Build output directory (generated)
├── .eleventy.js           # Eleventy configuration
└── package.json           # Dependencies and scripts
```

### Key Configuration
- **Input Directory:** `src/`
- **Output Directory:** `public/`
- **Server Configuration:** 
  - Port: 5000
  - Host: 0.0.0.0 (required for Replit proxy)
  - showAllHosts: true

### Features
- Responsive hero section with social media links
- Video testimonials carousel
- Features showcase with Swiper sliders
- Proof/statistics section (desktop and mobile versions)
- Custom video player functionality

## Development

### Available Scripts
- `npm run build` - Build the static site
- `npm run start` - Start the development server
- `npm run dev` - Start server with watch mode (used by workflow)

### Workflow
The project has one workflow configured:
- **Server** - Runs `npm run dev` on port 5000

## Deployment
The project is configured for autoscale deployment with:
- Build command: `npm run build`
- Run command: `npx eleventy --serve --port=5000 --host=0.0.0.0`

## Notes
- All assets are copied from `src/assets/` to `public/assets/` during build
- The site uses CDN links for Bootstrap, jQuery, Font Awesome, and Swiper.js
- Custom styling is in `src/assets/css/main.css`
- Custom JavaScript (including Swiper initialization) is in `src/assets/js/main.js`
