# Blog

A minimal blog built with [Astro](https://astro.build) and deployed to [GitHub Pages](https://pages.github.com).

## Features

- Write posts in Markdown
- Automatic deployment via GitHub Actions
- Clean, minimal design
- Responsive layout
- Zero-cost hosting

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see your blog locally.

### Creating a New Post

1. Create a new Markdown file in `src/content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: Your Post Title
description: A brief description (optional)
pubDate: 2024-12-30
---

Your content here...
```

3. Write your content in Markdown
4. Commit and push to GitHub
5. The site will automatically rebuild and deploy

### Project Structure

```
├── src/
│   ├── content/
│   │   └── blog/          # Blog posts (Markdown files)
│   ├── layouts/           # Page layouts
│   ├── components/        # Reusable components
│   └── pages/             # Astro pages
├── public/                # Static assets
└── .github/
    └── workflows/         # GitHub Actions workflows
```

## Deployment

The blog automatically deploys to GitHub Pages when you push to the `main` branch. The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

### Setting Up GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to Pages
3. Under "Source", select "GitHub Actions"
4. Your site will be available at `https://YOUR_USERNAME.github.io/Blog`

## Customization

### Changing the Site URL

Update `astro.config.mjs` with your GitHub username:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/Blog',
  // ...
});
```

### Styling

The blog uses scoped CSS in Astro components. Edit the `<style>` blocks in:
- `src/layouts/BlogLayout.astro` - Main layout styles
- `src/components/PostCard.astro` - Post card styles
- `src/pages/index.astro` - Homepage styles
- `src/pages/posts/[slug].astro` - Post page styles

## License

MIT
