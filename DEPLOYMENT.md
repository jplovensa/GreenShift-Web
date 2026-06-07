# GreenShift - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager
- Vercel account (free tier works)

### One-Click Deployment

1. **Install Vercel CLI** (optional, for local testing):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

3. **Deploy from CLI**:
   ```bash
   cd app
   vercel
   ```

### Build Configuration

The project is pre-configured with `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **SPA Routing**: Configured with rewrites

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

This is a static frontend application and doesn't require environment variables for basic deployment.

If you need to add environment variables in the future:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add variables prefixed with `VITE_` (e.g., `VITE_API_URL`)

### Project Structure

```
app/
├── public/              # Static assets (videos, images)
│   ├── images/         # Image assets
│   └── videos/         # Video assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── DesignStudio.tsx
│   │   ├── Ecosystem.tsx
│   │   ├── Tiers.tsx
│   │   ├── TierModal.tsx  # Mobile-responsive modal
│   │   ├── Timeline.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template with SEO meta tags
├── vite.config.ts      # Vite configuration (optimized for production)
├── vercel.json         # Vercel deployment configuration
└── package.json        # Dependencies and scripts
```

### Key Features

✅ **Mobile-Responsive TierModal**
- Stacks vertically on mobile (< 768px)
- Side-by-side layout on desktop
- Optimized video playback
- Smooth GSAP animations

✅ **Performance Optimizations**
- Code splitting with manual chunks
- Asset caching headers
- Optimized bundle size
- Lazy loading for videos

✅ **SEO Ready**
- Meta tags for social sharing
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure

### Build Output

After running `npm run build`, the `dist/` directory will contain:
- `index.html` - Main HTML file
- `assets/` - Bundled JS, CSS, and other assets
- `images/` - Optimized images
- `videos/` - Video files

### Troubleshooting

**Build fails with TypeScript errors:**
- These are type definition warnings and won't affect the build
- The build will complete successfully despite warnings

**Videos not loading:**
- Ensure all video files are in `public/videos/`
- Check that paths start with `/videos/` (absolute paths)

**Modal not responsive:**
- Clear browser cache
- Verify the latest TierModal.tsx changes are deployed

**404 on page refresh:**
- Vercel's `vercel.json` handles SPA routing
- Ensure the rewrite rule is present in vercel.json

### Performance Tips

1. **Video Optimization**:
   - Videos are set to autoplay, loop, and muted
   - Consider compressing videos for faster loading
   - Use appropriate video formats (MP4 with H.264)

2. **Image Optimization**:
   - Use WebP format where possible
   - Implement lazy loading for below-fold images
   - Consider using Vercel's Image Optimization

3. **Caching**:
   - Static assets are cached for 1 year
   - HTML is not cached for instant updates

### Monitoring

After deployment, monitor your site:
- **Vercel Analytics**: Built-in analytics dashboard
- **Lighthouse**: Run performance audits
- **Web Vitals**: Check Core Web Vitals scores

### Custom Domain

To add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Support

For issues or questions:
- Check Vercel documentation: https://vercel.com/docs
- Review Vite documentation: https://vitejs.dev
- Check GSAP documentation: https://greensock.com/docs/

---

## 📱 Mobile Responsiveness

The TierModal component has been specifically optimized for mobile devices:

### Breakpoints
- **Mobile**: < 768px - Vertical stack layout
- **Tablet**: 768px - 1024px - Optimized spacing
- **Desktop**: > 1024px - Full side-by-side layout

### Mobile Features
- Full-screen modal on mobile devices
- Video section limited to 40vh height
- Scrollable content area
- Touch-friendly close button
- Optimized padding and spacing

### Testing Mobile View
```bash
# Run dev server
npm run dev

# Open in browser and use DevTools
# - Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)
# - Test on: iPhone SE, iPhone 12 Pro, iPad, etc.
```

---

**Last Updated**: 2026-06-07
**Version**: 1.0.0