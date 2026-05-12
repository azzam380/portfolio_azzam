# My Portfolio (Vercel Deployment)

A professional portfolio website built with Vue 3 and Vite, deployed on Vercel. This project features a multi-language system, interactive UI elements, and a responsive design.

## Features
- **Multi-Language Support**: Toggle between Indonesian (ID) and English (EN).
- **Interactive UI**: Hover effects, smooth transitions, and glassmorphism design.
- **Responsive Layout**: Optimized for both desktop and mobile devices.
- **Progressive Web App (PWA)**: Installable and works offline.
- **Dark Theme**: Automatic dark mode detection based on system preferences.

## Tech Stack
- **Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Styling**: CSS (Custom Properties), [GSAP](https://greensock.com/gsap/) for animations
- **Icons**: [Lucide Vue](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio_azzam
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build
To create a production build:
```bash
npm run build
```

The output will be stored in the `dist` folder.

### Preview
To preview the production build locally:
```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment on Vercel.

1. Ensure you are logged in to Vercel:
   ```bash
   npx vercel login
   ```

2. Deploy the project:
   ```bash
   npx vercel --prod
   ```

## Project Structure

```
portfolio_azzam/
├── public/               # Static assets
├── src/
│   ├── components/       # Vue components
│   ├── assets/           # Images, styles
│   ├── composables/      # Reusable composables
│   ├── router/           # Router configuration
│   ├── views/            # Page views
│   ├── App.vue           # Main app component
│   └── main.js           # Entry point
├── vercel.json           # Vercel configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
