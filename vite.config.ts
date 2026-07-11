import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // Pobieramy nazwę repozytorium z GitHub Actions (np. "uzytkownik/moje-repo")
  const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/';

  return {
    // Jeśli budujemy na GitHub Actions, automatycznie ustawi "/nazwa-repozytorium/"
    // Lokalnie (gdy GITHUB_REPOSITORY nie istnieje) użyje "/"
    base: process.env.GITHUB_REPOSITORY ? repoName : '/',
    
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
