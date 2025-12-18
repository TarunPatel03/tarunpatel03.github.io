# Portfolio Website - Deployment Guide

## ✅ Migration Complete

Your Next.js portfolio template has been successfully converted to Vite + React for GitHub Pages deployment!

## 🎨 What's New

- **Design System**: Premium light theme with HSL color variables and modern UI components
- **Components**: 
  - Navigation with smooth routing and responsive mobile menu
  - DynamicBackground with animated canvas particles
  - shadcn/ui components (Button, Badge, Input, Textarea, Label)
- **Pages**:
  - Home: Hero section with skills grid
  - Portfolio: Featured projects with icons and tags
  - CV: Complete resume with experience timeline, education, and skills
  - Connect: Contact information and social links

## 🚀 Local Development

The dev server is already running at: **http://localhost:5174/**

To start it again later:
```bash
npm run dev
```

## 📦 Building for Production

```bash
npm run build
```

This creates a `dist/` folder with your static site.

## 🌐 Deploy to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Go to your repo Settings → Pages
3. Set Source to "GitHub Actions"
4. Push to main branch - your site will auto-deploy!

### Option 2: Manual Deployment

```bash
# Build the site
npm run build

# Deploy to gh-pages branch
npm install -g gh-pages
gh-pages -d dist
```

Then set GitHub Pages source to the `gh-pages` branch.

## 🔧 Configuration Notes

### Base URL
If your site is at `username.github.io/repo-name`, update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/repo-name/',  // Add this line
  plugins: [react()],
})
```

Since you're using `tarunpatel03.github.io` (user site), the current config with `base: '/'` is correct.

### Dependencies Installed

- `@radix-ui/react-label` & `@radix-ui/react-slot` - Primitive UI components
- `class-variance-authority` - Component variant styling
- `clsx` & `tailwind-merge` - ClassName utilities
- `lucide-react` - Icon library

## 🎯 What Was Converted

✅ TSX → JSX conversion for all components  
✅ Next.js routing → react-router-dom  
✅ Next.js Image → standard img tags  
✅ CSS Modules → Tailwind utility classes  
✅ Design tokens (HSL color system)  
✅ All page content preserved exactly  

## 📝 Content Updates

To update your information:

- **Contact Info**: Edit [src/pages/Connect.jsx](src/pages/Connect.jsx)
- **Experience**: Edit [src/pages/CV.jsx](src/pages/CV.jsx)
- **Projects**: Edit [src/pages/Portfolio.jsx](src/pages/Portfolio.jsx)
- **Skills**: Edit [src/pages/Home.jsx](src/pages/Home.jsx) and [src/pages/CV.jsx](src/pages/CV.jsx)
- **Design Colors**: Edit [src/index.css](src/index.css) CSS variables

## 🐛 Troubleshooting

**Issue**: Routes show 404 on GitHub Pages  
**Fix**: Add a `public/404.html` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/index.html'">
  </head>
</html>
```

Then add to [src/main.jsx](src/main.jsx):
```javascript
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, null, redirect);
}
```

**Issue**: Styles not loading  
**Fix**: Check that Tailwind CSS is processing - run `npm run build` and verify `dist/assets/*.css` exists

## 🎉 You're All Set!

Your modern portfolio website is ready to deploy. The design matches your original Next.js template exactly, but now it's optimized for GitHub Pages hosting!

Questions? Check the [Vite docs](https://vitejs.dev) or [React Router docs](https://reactrouter.com).
