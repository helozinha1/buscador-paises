import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Esse código transforma o Vite em um Servidor Local que simula a API original!
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-restcountries-api',
      configureServer(server) {
        server.middlewares.use('/api/v3_countries', (req, res, next) => {
          const dbPath = path.resolve(__dirname, 'public/countries.json');
          const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
          let result = data;
          
          const endpoint = req.originalUrl.replace('/api/v3_countries', '').split('?')[0];
          
          if (endpoint.startsWith('/region/')) {
            const region = endpoint.split('/region/')[1].toLowerCase();
            result = data.filter(c => c.region && c.region.toLowerCase() === region);
          } else if (endpoint.startsWith('/alpha/')) {
            const code = endpoint.split('/alpha/')[1].toLowerCase();
            result = data.filter(c => c.cca3 && c.cca3.toLowerCase() === code);
          }

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(result));
        });
      }
    }
  ]
})