# Portfolio

Personal portfolio site for **Suresh Branjana**, built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.  
It showcases experience, tech stack, speciality areas, and featured projects in a single-page layout.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, custom utility classes
- **Animation & Icons**: `motion` (Framer Motion-compatible) and `lucide-react`

## Getting Started

**Prerequisites**

- **Node.js** 18+ (recommended LTS)
- **npm** (comes with Node)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The app will usually be available at `http://localhost:3000`.

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Scripts

- `npm run dev`: Start the Vite dev server on port 3000.
- `npm run build`: Build the app for production into the `dist` folder.
- `npm run preview`: Preview the production build locally.
- `npm run clean`: Remove the `dist` folder (may require a POSIX shell on Windows).
- `npm run lint`: Type-check the project with TypeScript.

## Environment Variables

The current portfolio UI does **not** require any environment variables to run.  
If you later integrate APIs (for example, using `@google/genai`), you can:

- Create a `.env` (or `.env.local`) file in the project root.
- Add the required keys (e.g. `GEMINI_API_KEY=...`).
- Access them via `import.meta.env` or the `define` configuration in `vite.config.ts`.

## Project Structure

High-level layout:

```text
Portfolio/
  src/
    main.tsx       # React entry point
    App.tsx        # Main portfolio page
    index.css      # Global styles / Tailwind
  index.html       # Root HTML
  vite.config.ts   # Vite + Tailwind + env config
  tsconfig.json    # TypeScript configuration
  package.json     # Dependencies & scripts
  README.md        # Project documentation
```

## Deployment

Any static hosting provider that supports Vite builds will work:

- Build the project: `npm run build`
- Upload the contents of the `dist` folder to your hosting provider (e.g. Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## License

This is a personal portfolio project. You can reuse the structure or ideas, but please replace personal content (name, bio, images, etc.) with your own.
