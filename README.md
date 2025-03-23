# d-sys.wiki

[![ci](https://github.com/captradeoff/d-sys-wiki/actions/workflows/ci.yml/badge.svg)](https://github.com/captradeoff/d-sys-wiki/actions/workflows/ci.yml)
[![github license](https://img.shields.io/github/license/captradeoff/d-sys-wiki)](https://github.com/captradeoff/d-sys-wiki/blob/master/LICENSE)

**d-sys.wiki** is a resource for distributed systems. this repo contains the source for [d-sys.wiki](https://d-sys.wiki) website, providing explanations, resources, and tools for understanding and building distributed systems.

## 📚 content

- simple explanations of distributed systems concepts
- pre-prints on distributed systems research
- case studies with code examples
- open source projects and tools
- links to books and talks

## 🚀 getting started

### for readers

visit [d-sys.wiki](https://d-sys.wiki) to access the content.

### for contributors

built with [mkdocs](https://www.mkdocs.org/) using terminal theme.

#### prerequisites

- python 3.x
- pip

#### local setup

1. clone the repo:
   ```bash
   git clone https://github.com/captradeoff/d-sys-wiki.git
   cd d-sys-wiki
   ```

2. install mkdocs and plugins:
   ```bash
   pip install mkdocs
   pip install mkdocs-terminal
   pip install mkdocs-git-revision-date-plugin
   pip install mkdocs-spellcheck-plugin
   pip install mkdocs-llmstxt
   pip install mkdocs-rss-plugin
   ```

3. run dev server:
   ```bash
   mkdocs serve
   ```

4. open browser to `http://localhost:8000`

## 📝 contributing

1. **report issues**: [open an issue](https://github.com/captradeoff/d-sys-wiki/issues)

2. **submit content**:
   - fork the repo
   - create a branch
   - edit markdown in `wiki/`
   - submit pull request

3. **guidelines**:
   - write clearly
   - include examples
   - cite sources
   - follow existing format

## 🏗️ project structure

```
d-sys-wiki/
├── wiki/                  # docs source files
│   ├── index.md           # home page
│   ├── about/             # about section
│   ├── fundamentals/      # concepts
│   └── img/               # images
├── mkdocs.yml             # config
├── CNAME                  # domain config
└── LICENSE                # mit license
```

## 📄 license

mit license - see [license](LICENSE) file.

## 📬 contact

- github: [@captradeoff](https://github.com/captradeoff)
- twitter/x: [@captradeoff](https://x.com/captradeoff)

# Twitter Post Action

A GitHub Action to post tweets to Twitter, with optional community support.

## Inputs

| Input         | Description                                               | Required |
|---------------|-----------------------------------------------------------|----------|
| appKey        | Twitter API App Key                                       | Yes      |
| appSecret     | Twitter API App Secret                                    | Yes      |
| accessToken   | Twitter API Access Token                                  | Yes      |
| accessSecret  | Twitter API Access Secret                                 | Yes      |
| message       | The message to tweet                                      | Yes      |
| community-id  | Optional Twitter Community ID to post to                  | No       |

## Outputs

| Output  | Description                |
|---------|----------------------------|
| post-id | The ID of the posted tweet |

## Example Usage

```yaml
name: Post to Twitter
on:
  workflow_dispatch:
  schedule:
    - cron: '0 12 * * *'  # Posts at 12:00 UTC every day

jobs:
  post-tweet:
    runs-on: ubuntu-latest
    steps:
      - name: Post to Twitter
        uses: your-username/twitter-post-action@v1
        with:
          appKey: ${{ secrets.TWITTER_API_KEY }}
          appSecret: ${{ secrets.TWITTER_API_SECRET }}
          accessToken: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          accessSecret: ${{ secrets.TWITTER_ACCESS_SECRET }}
          message: "Hello world from GitHub Actions! #Automation"
          # Uncomment if posting to a community:
          # community-id: ${{ secrets.TWITTER_COMMUNITY_ID }}
```

## Development

### Testing

To run tests:

```bash
npm install
npm test
```

### Local Testing

You can test this action locally by setting up environment variables for your Twitter API credentials:

```bash
export INPUT_APPKEY=your_app_key
export INPUT_APPSECRET=your_app_secret
export INPUT_ACCESSTOKEN=your_access_token
export INPUT_ACCESSSECRET=your_access_secret
export INPUT_MESSAGE="Test message from local environment"
export INPUT_COMMUNITY-ID=""  # Optional

node index.js
```

## License

MIT
