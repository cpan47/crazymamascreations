# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Crazy Mama's Creations" - a clothing company showcasing handmade and custom clothing items. The site is built using vanilla HTML, CSS, and JavaScript for maximum compatibility and fast loading.

## Repository Structure

```
/
├── index.html          # Main website homepage
├── styles.css          # Main stylesheet
└── Photos/            # Product images directory (80+ product photos)
```

## Development Workflow

This is a static website project that can be developed and tested locally:

### Local Development
```bash
# Serve locally using Python's built-in server
python3 -m http.server 8000

# Or using Node.js if available
npx serve .

# Or simply open index.html in a web browser
open index.html
```

### File Management
- **index.html**: Main entry point with complete website structure
- **styles.css**: All styling including responsive design, product gallery, and animations
- **Photos/**: Contains product photography (JPEG format) - do not modify or delete

## Design Requirements

### Target Audience
- Customers looking for handmade/custom clothing
- Parents seeking children's clothing
- Adults interested in unique fashion pieces

### Key Features Needed
- Responsive product gallery showcasing Photos/ directory
- Professional branding for "Crazy Mama's Creations"
- Contact information and ordering process
- Mobile-first responsive design
- Fast loading times (optimize image display)

### Technical Considerations
- No build process required - direct HTML/CSS/JS
- Images should be lazy-loaded or optimized for web viewing
- Ensure cross-browser compatibility
- SEO-friendly markup structure

## Content Structure

Based on available photos, the site should include:
- Hero section with brand introduction
- Product gallery with categorization
- About section for the business
- Contact/ordering information
- Social media links (if applicable)

## Deployment

This static site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the HTML, CSS, and Photos directory to the hosting platform.