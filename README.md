# 🚀 d-sys.wiki documentation template

[![ci](https://github.com/captradeoff/d-sys-wiki/actions/workflows/ci.yml/badge.svg)](https://github.com/captradeoff/d-sys-wiki/actions/workflows/ci.yml)
[![license: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[![GitHub stars](https://img.shields.io/github/stars/captradeoff/d-sys-wiki-theme?style=social)](https://github.com/captradeoff/d-sys-wiki-theme/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/captradeoff/d-sys-wiki-theme?style=social)](https://github.com/captradeoff/d-sys-wiki-theme/network/members)
[![Twitter Follow](https://img.shields.io/twitter/follow/captradeoff?style=social)](https://twitter.com/captradeoff)

> a beginner-friendly mkdocs template for creating beautiful documentation sites like [d-sys.wiki](https://d-sys.wiki). perfect for developers who want to quickly get started with documentation. **[⭐ star this repo](#-support-this-project)** if you find it useful!

## 📋 table of contents

- [overview](#-overview)
- [features](#-features)
- [quick start guide](#-quick-start-guide)
- [customization steps](#-customization-steps)
- [template structure](#-template-structure)
- [advanced configuration](#-advanced-configuration)
- [github actions setup](#-github-actions-setup)
- [contributing](#-contributing)
- [support this project](#-support-this-project)
- [license](#-license)

## 🔍 overview

this template provides everything you need to create a professional documentation site using mkdocs with the terminal theme, styled after [d-sys.wiki](https://d-sys.wiki). it's designed for beginners who want to:

- create beautiful documentation with minimal setup
- deploy automatically with github actions
- customize the look and feel to match their brand
- get started quickly without extensive configuration

## ✨ features

- **beautiful terminal theme**: pre-configured terminal-style theme for a unique documentation experience
- **github actions integration**: automatic building and deployment workflow
- **seo optimized**: built-in seo best practices for better discoverability
- **mobile responsive**: looks great on all devices
- **easy customization**: simple files to modify for personalization
- **plugin support**: pre-configured with essential mkdocs plugins
- **beginner friendly**: clear instructions for quick setup
- **rss support**: built-in rss feeds for content updates
- **llms.txt generation**: automatic generation of llms.txt for ai discoverability

## 🚀 quick start guide

### prerequisites

- [python 3.x](https://www.python.org/downloads/)
- [git](https://git-scm.com/downloads)

### installation

1. **clone this template repository**:
   ```bash
   git clone https://github.com/captradeoff/d-sys-wiki-theme.git my-documentation
   cd my-documentation
   ```

2. **install dependencies**:
   ```bash
   pip install mkdocs
   pip install mkdocs-terminal
   pip install mkdocs-git-revision-date-plugin
   pip install mkdocs-spellcheck-plugin
   pip install mkdocs-llmstxt
   pip install mkdocs-rss-plugin
   ```

3. **start the development server**:
   ```bash
   mkdocs serve
   ```

4. **view your site** at `http://localhost:8000`

## 🛠 customization steps

follow these steps to transform this template into your own documentation site:

### 1. update site configuration

edit `mkdocs.yml`:
```yaml
site_name: Your Site Name
site_url: https://your-site-url.com
copyright: "Your copyright message"
site_author: your_username
repo_url: https://github.com/your_username/your_repo
```

### 2. set up your domain

1. edit `docs/CNAME`:
   ```
   your-site-url.com
   ```

2. update `docs/robots.txt`:
   ```
   User-agent: *
   Allow: /
   
   Sitemap: https://your-site-url.com/sitemap.xml
   ```

### 3. customize the theme

1. **replace the favicon**:
   - add your own favicon.ico to `docs/img/`

2. **update the footer** in `theme/main.html`:
   ```html
   <table class="table table-striped table-hover">
     <tbody>
       <tr>
         <td style="text-align: center">
           <a href="https://your-community-link">join community</a>
         </td>
         <td style="text-align: center">
           <a href="https://github.com/your_username/your_repo/issues">open an issue</a>
         </td>
         <td style="text-align: center">
           <a href="https://twitter.com/your_username">follow on twitter</a>
         </td>
       </tr>
       <!-- Additional rows as needed -->
     </tbody>
   </table>
   ```

3. **add your content**:
   - place your markdown files in the `docs/` directory
   - update `docs/index.md` with your landing page content

### 4. configure github actions

1. enable github pages in your repository settings:
   - go to `Settings` > `Pages`
   - select source: `GitHub Actions`

2. commit and push your changes:
   ```bash
   git add .
   git commit -m "Customize documentation site"
   git push
   ```

3. github action will automatically build and deploy your site!

## 🏗️ template structure

```
my-documentation/
├── docs/                  # Content source files
│   ├── index.md           # Home page
│   ├── CNAME              # Custom domain configuration
│   ├── robots.txt         # SEO configuration
│   ├── style.css          # Custom CSS
│   └── img/               # Images and favicon
├── theme/                 # Custom theme components
│   └── main.html          # Footer and layout customizations
├── mkdocs.yml             # Site configuration
├── .github/               # GitHub Actions workflows
└── LICENSE                # License information
```

## ⚙️ advanced configuration

### adding navigation

edit the `nav` section in `mkdocs.yml`:

```yaml
nav:
  - Home: "index.md"
  - Getting Started: "getting-started.md"
  - API Reference:
      - Overview: "api/index.md"
      - Authentication: "api/auth.md"
```

### changing theme colors

the default theme is `gruvbox_dark`. you can change this in `mkdocs.yml`:

```yaml
theme:
  name: terminal
  custom_dir: theme
  palette: nord  # Options: dracula, gruvbox_light, monokai, nord, zenburn
```

## 🔄 github actions setup

this template includes a pre-configured github action workflow that:

1. builds your mkdocs site
2. deploys it to github pages
3. generates rss feeds and llms.txt

all you need to do is enable github pages in your repository settings!

## 🤝 contributing

contributions are welcome! here's how:

1. **fork the repository**
2. **create a feature branch**: `git checkout -b feature/amazing-feature`
3. **make your changes**
4. **commit**: `git commit -m 'Add amazing feature'`
5. **push**: `git push origin feature/amazing-feature`
6. **open a pull request**

## ⭐ support this project

if you find this template useful:

- **⭐ star this repository** on github
- **🔄 fork it** and use it for your own projects
- **📢 share it** with others who might find it helpful
- **🐛 report issues** or suggest improvements

your support helps maintain and improve this project!

## 🙏 Acknowledgments

This template is powered by amazing open-source tools:

- [MkDocs](https://www.mkdocs.org/) - The core documentation framework
- [MkDocs Terminal Theme](https://github.com/ntno/mkdocs-terminal) - Beautiful terminal-style theme
- Plugins:
  - [mkdocs-git-revision-date-plugin](https://github.com/zhaoterryy/mkdocs-git-revision-date-plugin) - Shows last update dates
  - [mkdocs-spellcheck-plugin](https://github.com/mprivat/mkdocs-spellcheck-plugin) - Spell checking for documentation
  - [mkdocs-llmstxt](https://github.com/contextmachine/mkdocs-llmstxt) - LLMs.txt generation for AI discoverability
  - [mkdocs-rss-plugin](https://github.com/Guts/mkdocs-rss-plugin) - RSS feed generation

## 📄 license

this work is dedicated to the public domain under cc0 1.0.

---

*built with ❤️ by [captradeoff](https://github.com/captradeoff). template based on [d-sys.wiki](https://d-sys.wiki).*
