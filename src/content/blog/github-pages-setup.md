---
title: Setting Up GitHub Pages
description: A step-by-step guide to deploying your static site to GitHub Pages for free.
pubDate: 2024-12-20
---

GitHub Pages is a free hosting service that lets you publish static websites directly from your GitHub repository. It's perfect for blogs, portfolios, documentation, and project pages.

## Why GitHub Pages?

- **Free** - No cost for public repositories
- **Simple** - Just push to GitHub
- **Fast** - Served from GitHub's CDN
- **Custom domains** - Use your own domain name
- **HTTPS** - Automatic SSL certificates

## Getting Started

### Step 1: Create a Repository

Create a new repository on GitHub. You can name it anything, but if you want it at `username.github.io`, name it exactly that.

### Step 2: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select your branch (usually `main`)
4. Choose the folder (usually `/root` or `/docs`)
5. Click "Save"

### Step 3: Deploy Your Site

Push your static site files to the repository. GitHub Pages will automatically build and deploy your site.

## Using GitHub Actions

For more control, you can use GitHub Actions to build and deploy your site:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to your repository with your domain
2. Configure DNS records:
   - Type: `CNAME`
   - Name: `www` (or `@` for root)
   - Value: `username.github.io`
3. Enable "Enforce HTTPS" in repository settings

## Tips

- **Build locally first** - Test your site before pushing
- **Use relative paths** - Works better with subdirectories
- **Check build logs** - GitHub Actions shows build errors
- **Be patient** - First deployment can take a few minutes

## Common Issues

**404 errors**: Make sure your `index.html` is in the right location

**Styles not loading**: Check that asset paths are correct

**Build failures**: Review GitHub Actions logs for errors

GitHub Pages is a great way to host static sites. It's simple, free, and reliable. Perfect for personal projects and blogs!

