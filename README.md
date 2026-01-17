# foldr.uk

A programming blog built with [Docusaurus 2](https://v2.docusaurus.io/), hosted at [foldr.uk](https://foldr.uk).

## About

This is Jamie McCrindle's technical blog covering topics in cloud infrastructure, Azure, Terraform, GitHub Actions, and modern development practices.

## Project Structure

- **foldr-uk-website/** - Main Docusaurus website
- **drafts/** - Work-in-progress articles not yet published

## Prerequisites

- Node.js 14+ (via nvm or system install)
- Yarn package manager

## Getting Started

### Install Dependencies

```console
cd foldr-uk-website
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server at `http://localhost:3000`. The site will automatically reload as you make changes.

### Build

```console
yarn build
```

This generates static content into the `build` directory, ready for deployment.

## Writing Content

The blog supports both Markdown (`.md`) and MDX (`.mdx`) files:

- **Blog posts**: `/foldr-uk-website/blog/`
- **Documentation pages**: `/foldr-uk-website/docs/`
- **Static pages**: `/foldr-uk-website/src/pages/`

See [create-a-blog-post.md](./foldr-uk-website/docs/create-a-blog-post.md) for detailed instructions on writing new articles.

## Deployment

The site is deployed using Docusaurus's built-in deployment command:

```console
cd foldr-uk-website
GIT_USER=<GitHub username> USE_SSH=true yarn deploy
```

This builds the site and pushes to the `gh-pages` branch for GitHub Pages hosting.

## Key Scripts

Run these from the `foldr-uk-website` directory:

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve the built site locally
- `yarn clear` - Clear the build cache
- `yarn swizzle` - Customize Docusaurus components
- `yarn write-translations` - Extract translatable strings
- `yarn write-heading-ids` - Auto-generate heading IDs

## Tech Stack

- **Framework**: Docusaurus 2
- **Package Manager**: Yarn
- **React**: 17.x
- **TypeScript**: 4.2+
- **Analytics**: Google Analytics
