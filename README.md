# Lisa Scct Tattoo Website

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

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages. You can deploy it in two ways:

### Automatic Deployment

The project is set up with GitHub Actions to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

You can also deploy manually using the following command:

```bash
pnpm deploy
```

This will build the project and push it to the `gh-pages` branch, which is configured to serve the website.

## Custom Domain

The website is configured to use the custom domain `lisascct.com`. To set this up:

1. Purchase the domain from a domain registrar
2. Configure the DNS settings to point to GitHub Pages:
   - Add an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Add a CNAME record for `www` pointing to `username.github.io`

3. In the GitHub repository settings, under "Pages", add your custom domain and enable HTTPS

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
  - `CNAME` - Custom domain configuration
  - `404.html` - Custom 404 page for SPA routing
  - `robots.txt` - Instructions for search engine crawlers
  - `sitemap.xml` - Site structure for search engines

## Adding Images

When adding images to the website:

1. Place them in the appropriate subfolder within `src/assets/images/`
2. Optimize images before adding them to maintain fast loading times
3. Use descriptive filenames
4. Consider using WebP format for better performance

## License

This project is licensed under the MIT License. 