---
title: "Deploying Next.js to GitHub Pages using GitHub Actions"
slug: "guide-to-github-pages-deployment"
date: "2026-03-28"
excerpt: "A step-by-step walkthrough of automated static builds and zero-downtime publishing to GitHub Pages."
tags: ["DevOps", "GitHub Actions", "CI/CD", "Next.js"]
readTime: "5 min read"
---

# Deploying Next.js to GitHub Pages using GitHub Actions

Publishing your static website directly to GitHub Pages eliminates the need for third-party hosting dashboards. Every `git push` automatically triggers a build and publishes your latest updates in under two minutes!

## 1. Setting Up the GitHub Action

We use GitHub's official `actions/deploy-pages` action combined with `actions/upload-pages-artifact`.

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build static site
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
```

## 2. Enabling GitHub Pages in Repository Settings

Once your workflow is in place:
1. Go to your repository on GitHub.
2. Navigate to **Settings** -> **Pages**.
3. Under **Source**, choose **GitHub Actions**.

And that's it! GitHub Pages will handle SSL certificates and CDN distribution automatically.
