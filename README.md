# NodeNest Web Platform

A modern, responsive web platform for NodeNest - free server hosting for Minecraft servers, Discord bots, and Telegram bots.

## Features

- ✨ Modern React + TypeScript application
- 🎨 Beautiful UI with Tailwind CSS
- 🌓 Dark mode support with persistent preferences
- 📱 Fully responsive design
- 🚀 Optimized for performance
- 📦 Easy deployment to GitHub Pages

## Dark Mode

The site now includes a dark mode toggle that:
- Switches between light and dark themes
- Saves user preference in localStorage
- Provides a smooth transition between modes
- Uses system color preferences as default

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type check
npm run typecheck
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. Go to your repository settings
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to the `main` branch to trigger deployment

The site will be automatically deployed to: `https://jaggu762.github.io/nodenest-2/`

### How it Works

- The `.github/workflows/deploy.yml` workflow runs on every push to `main`
- It builds the application and deploys the `dist` folder to GitHub Pages
- The base path is configured in `vite.config.ts` to match the repository name

## Project Structure

```
src/
├── components/
│   ├── Header.tsx    # Navigation with dark mode toggle
│   ├── Hero.tsx      # Hero section
│   ├── Features.tsx  # Features grid
│   ├── CTA.tsx       # Call-to-action section
│   └── Footer.tsx    # Footer
├── App.tsx           # Main app component
├── index.css         # Global styles
└── main.tsx          # Entry point
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

© 2024 NodeNest. All rights reserved.
