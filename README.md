# Lisa Tattoo Website

A modern, responsive website for a tattoo artist based in Frankfurt, Germany. The website showcases the artist's portfolio, services, and provides contact information for potential clients.

## Technologies Used

- **Vue.js 3** - Progressive JavaScript framework for building user interfaces
- **Vue Router** - Official router for Vue.js
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling

## Features

- Responsive design that works on all devices
- Portfolio gallery to showcase tattoo work
- Detailed services and FAQ section
- Contact information with Instagram and email links
- Information about art collaborations
- About section with artist information
- Impressum page for legal requirements

## Project Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Folder Structure

- `src/` - Source files
  - `assets/` - CSS and other assets
    - `images/` - Website images
      - `portfolio/` - Tattoo portfolio images
      - `backgrounds/` - Background images
      - `icons/` - Custom icons
      - `about/` - Images for the About page
  - `components/` - Vue components
  - `views/` - Vue views/pages
  - `router/` - Vue Router configuration
- `public/` - Static files

## Adding Images

When adding images to the website:

1. Place them in the appropriate subfolder within `src/assets/images/`
2. Optimize images before adding them to maintain fast loading times
3. Use descriptive filenames
4. Consider using WebP format for better performance

## License

This project is licensed under the MIT License. 