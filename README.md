# d-sys.wiki

[![GitHub license](https://img.shields.io/github/license/captradeoff/d-sys-wiki)](https://github.com/captradeoff/d-sys-wiki/blob/master/LICENSE)

**d-sys.wiki** is your comprehensive resource for all things related to distributed systems. This repository contains the source code for the [d-sys.wiki](https://d-sys.wiki) website, which provides accessible explanations, resources, and tools for understanding, architecting, and building distributed systems.

## 📚 Content

The wiki includes:

- Simple, casual explanations of distributed systems concepts
- Early access to pre-prints on distributed systems research
- Case studies with reproducible research and code examples
- Information about open source projects, software, and tools
- Curated links to top books and talks in the field
- And more!

## 🚀 Getting Started

### For Readers

Visit [d-sys.wiki](https://d-sys.wiki) to access the published content.

### For Contributors and Local Development

This wiki is built using [MkDocs](https://www.mkdocs.org/) with the terminal theme.

#### Prerequisites

- Python 3.x
- pip (Python package manager)

#### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/captradeoff/d-sys-wiki.git
   cd d-sys-wiki
   ```

2. Install MkDocs and required plugins:
   ```bash
   pip install mkdocs
   pip install mkdocs-terminal
   pip install mkdocs-git-revision-date-plugin
   pip install mkdocs-spellcheck-plugin
   ```

3. Run the development server:
   ```bash
   mkdocs serve
   ```

4. Open your browser and navigate to `http://localhost:8000` to see the local version of the wiki.

## 📝 Contributing

Contributions to d-sys.wiki are welcome and appreciated! Here's how you can contribute:

1. **Report Issues**: If you find errors or have suggestions, please [open an issue](https://github.com/captradeoff/d-sys-wiki/issues).

2. **Submit Content**: To add or modify content:
   - Fork the repository
   - Create a new branch for your changes
   - Make your changes to the relevant Markdown files in the `docs/` directory
   - Submit a pull request

3. **Content Guidelines**:
   - Write in a clear, accessible style
   - Include examples where appropriate
   - Cite sources for technical information
   - Follow the existing formatting conventions

## 🏗️ Project Structure

```
d-sys-wiki/
├── docs/                  # Documentation source files
│   ├── index.md           # Home page
│   ├── about/             # About section
│   ├── fundamentals/      # Fundamental concepts
│   └── img/               # Images and resources
├── mkdocs.yml             # MkDocs configuration
├── CNAME                  # Custom domain configuration
└── LICENSE                # MIT License
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- GitHub: [@captradeoff](https://github.com/captradeoff)
- Twitter/X: [@captradeoff](https://x.com/captradeoff)
