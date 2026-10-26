# Ahmed Ben Aissa — Portfolio

A static, single-page portfolio built with **React + TypeScript + Vite** and plain CSS.
No backend, no database, no API calls. All content lives in `src/data/portfolio.ts`.

## Project structure

```text
src/
  components/   Header, SectionHeading, ProjectCard, SkillGroup, ActivityTimeline, Footer
  sections/     Hero, About, Skills, Projects, Activity, Contact
  data/         portfolio.ts  ← single source of truth for all content
  styles/       global.css    ← design tokens + all styles
  App.tsx
  main.tsx
```

## Install and run locally

```bash
npm install
npm run dev        # dev server with hot reload (http://localhost:5173)
```

## Build and preview production output

```bash
npm run build      # type-checks, then writes static files to dist/
npm run preview    # serves dist/ locally (http://localhost:4173)
```

## Editing content

- Update text, skills, projects and the activity log in `src/data/portfolio.ts`.
- To add a project link, add `links: [{ label: 'Repository', url: '...' }]` to that project. Nothing renders until a link is provided.
- Activity entries are sorted newest first automatically.

## Deploy to AWS EC2 with Nginx

1. **Build locally** (or on the server):

   ```bash
   npm ci && npm run build
   ```

2. **Install Nginx on the instance** (Ubuntu example):

   ```bash
   sudo apt update && sudo apt install -y nginx
   ```

3. **Upload the contents of `dist/`** to the web root:

   ```bash
   # from your machine
   rsync -avz --delete dist/ ubuntu@<EC2_PUBLIC_IP>:/tmp/portfolio/
   # on the server
   sudo mkdir -p /var/www/portfolio
   sudo rsync -a --delete /tmp/portfolio/ /var/www/portfolio/
   ```

4. **Create `/etc/nginx/sites-available/portfolio`**:

   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name your-domain.com www.your-domain.com;   # or _ to match any host

       root /var/www/portfolio;
       index index.html;

       gzip on;
       gzip_types text/css application/javascript image/svg+xml;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Vite fingerprints files in /assets, so they can be cached for a long time.
       location /assets/ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       add_header X-Content-Type-Options nosniff;
       add_header Referrer-Policy strict-origin-when-cross-origin;
   }
   ```

5. **Enable and reload**:

   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

6. **Network**: in the EC2 security group, allow inbound TCP **80** (and **443** if you add HTTPS).
   For HTTPS, run `sudo apt install certbot python3-certbot-nginx && sudo certbot --nginx`.
