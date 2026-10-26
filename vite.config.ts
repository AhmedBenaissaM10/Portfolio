import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static build: output goes to dist/. `base: './'` keeps asset URLs relative
// so the site also works if it is served from a sub-path.
export default defineConfig({
  plugins: [react()],
  base: './',
});
