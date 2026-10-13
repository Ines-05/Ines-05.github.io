# 🚀 Modern Developer Portfolio & Articles Blog

A blazingly fast, modern developer portfolio with Markdown-powered articles and blogs, built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, pre-configured for static export and free hosting on **GitHub Pages**.

---

## ✨ Features

- ⚡ **Next.js Static Export**: Zero hosting costs, instant load times, served directly from GitHub Pages CDN.
- 📝 **Markdown-Powered Articles**: Write blog posts in `content/articles/*.md` with YAML frontmatter. Automatically formatted and rendered into static HTML.
- 🎨 **Sleek Modern UI**: Responsive dark theme, typography-optimized article reader, smooth transitions.
- 🛠️ **Configurable Profile & Projects**: Easily update your name, bio, skills, and projects in single config files (`src/data/profile.ts` and `src/data/projects.ts`).
- 🤖 **Automated GitHub Actions Deployment**: Push code to GitHub, and your site is built and published automatically within 2 minutes.

---

## 📁 Project Structure

```text
portfolio/
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD workflow
├── content/articles/              # Your Markdown articles (.md)
│   ├── building-modern-portfolio-with-nextjs.md
│   └── guide-to-github-pages-deployment.md
├── src/
│   ├── app/
│   │   ├── page.tsx               # Home page (Hero, Skills, Projects, Contact)
│   │   ├── layout.tsx             # Root layout with Navbar & Footer
│   │   ├── articles/page.tsx      # All articles directory
│   │   └── articles/[slug]/       # Dynamic static article reader
│   ├── components/                # UI components (Navbar, Footer, ProjectCard, etc.)
│   ├── data/
│   │   ├── profile.ts             # Edit your personal info, links, skills here!
│   │   └── projects.ts            # Edit your projects showcase here!
│   └── lib/articles.ts            # Markdown parser & metadata engine
└── next.config.ts                 # Configured for static export (output: 'export')
```

---

## 🏃 Running Locally

```bash
# 1. Start the development server
npm run dev

# 2. Open http://localhost:3000 in your browser
```

---

## ✍️ How to Add a New Article

Simply create a new `.md` file inside `content/articles/` (e.g. `my-new-post.md`):

```markdown
---
title: "My New Article Title"
slug: "my-new-post"
date: "2026-10-15"
excerpt: "A brief summary of what this article is about."
tags: ["Next.js", "Tutorial"]
readTime: "3 min read"
---

# Your Heading

Your content in standard Markdown! Code blocks, bullet points, links, and blockquotes are all supported.
```

The site will automatically detect the new file, generate `/articles/my-new-post`, and list it on your Articles page.

---

## 🌐 How to Publish to GitHub Pages

### Option 1: Root Domain (Recommended: `<username>.github.io`)
If your repository is named `<username>.github.io`:

1. Create a repository on GitHub named:
   ```
   <your-github-username>.github.io
   ```
2. In your local terminal inside `portfolio`, commit and link your repository:
   ```bash
   git add .
   git commit -m "feat: complete portfolio and articles setup"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - On GitHub, go to your repository **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will run automatically and deploy your site to `https://<your-username>.github.io`!

---

### Option 2: Project Repository (`<username>.github.io/portfolio`)
If you prefer naming your repository `portfolio` instead of `<username>.github.io`:
1. In `next.config.ts`, set the `basePath`:
   ```ts
   basePath: "/portfolio",
   ```
2. Push your code to your `portfolio` repository.
3. Your site will be published at `https://<your-username>.github.io/portfolio`.
