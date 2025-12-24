import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

<<<<<<< HEAD
  // Dynamic base path: GitHub Pages uses /repo-name/, Vercel uses /
  base: process.env.GITHUB_PAGES === 'true' ? '/blue-dream-journeys/' : '/',
=======
  // REQUIRED FOR GITHUB PAGES
  base: "/blue-dream-journeys/",
>>>>>>> 412442f016f681bf27d035d82928e1469acf284c

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));