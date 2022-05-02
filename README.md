# Dative Front-End Starter

Front-end tool to build static site from [Twig](https://twig.symfony.com) templates, built using [Laravel Mix](https://laravel-mix.com). It uses [TailwindCSS](https://tailwindcss.com) for utility first styling.

## Requirements

This tool requires Node v16 (I recommend using [NVM](https://github.com/nvm-sh/nvm)), or [NVM for Windows](https://github.com/coreybutler/nvm-windows).

## Getting Started

1. Copy this repo into a new project folder:

```bash
npx degit dative/dative-frontend-mix new-project
```

2. Install the dependencies:

```bash
cd new-project && npm install
```

### Commands

#### npm run dev

This will fire up the local development, with live reload. It will run on [`http://localhost:3030`](http://localhost:3030)

#### npm run build

This will build the production version of the site inside the `public` directory.

## Development Guidelines

While working on this project, here are some helpful advice when choosing the implementation path:

[Conventions](#conventions)

[Lean on Tailwind](TAILWIND.md)

[Use TWIG to encapsulate page components](TWIG.md)

### Conventions

Inside the `./src` directory, we have the following:

    .
    ├── ...
    ├── src
    │   ├── css
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── app.css
    │   │   └── vendor.css
    │   ├── img
    │   └── js
    │   │   ├── ...
    │   │   ├── app.ts
    │   │   └── ...
    │   └── templates
    │       ├── _boilerplate
    │       ├── _layouts
    │       ├── _partials
    │       ├── ...
    │       ├── page.twig
    │       └── ...
    └── ...

| File / Directory        | Description                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| css                     | Website style configurations                                                                                                 |
| css/components          | Styles for specific components                                                                                               |
| css/pages               | Styles for specific pages                                                                                                    |
| css/app.css             | Main style file                                                                                                              |
| css/vendor.css          | Vendor specific styles, when importing from node_modules isn't available                                                     |
| img                     | Website images                                                                                                               |
| js                      | Website scripts                                                                                                              |
| js/app.ts               | Main script file (Typescript)                                                                                                |
| templates/\_boilerplate | Base tem­plat­ing set­up for our Twig tem­plates that pro­vides a sta­ble, sol­id foun­da­tion on which to build our project |
| templates/\_layouts     | TWIG layout files to be extended by a template page                                                                          |
| templates/\_patials     | TWIG include files to be used by a template                                                                                  |
| templates/page.twig     | TWIG base template that can be duplicated to create other pages                                                              |

#### Notes

- TWIG files starting with **\_** (underscore) won't generate HTML files, but they can be used by other TWIG files.
- Scripts should be written in [Typescript](https://www.typescriptlang.org)

## Contribution

Before submitting your contribution, please make sure to take a moment and read through the following guide:

- We follow the [Fork and pull model](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model)
- We "loosely" follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) to commit messages.
- If adding a new feature or page
  - Add accompanying summary.
- If fixing bug:
  - If you are resolving a special issue, add (fix #xxxx[,#xxxx]) (#xxxx is the issue id) in your PR title for a better release log, e.g. fix: update entities encoding/decoding (fix #3899).
  - Provide a detailed description of the bug in the PR. Live demo preferred, but screen shots are also welcomed.
  - It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.
  - **Make sure you test your code locally first!**
  - No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with Prettier on commit (by invoking Git Hooks via yorkie).

### Notes on Dependencies

This project starter aims to deliver a lightweight website, and this includes being aware of the number of npm dependencies and their size.

**Think before adding a dependency.** Is it worth it? Can it be achieve with a few lines of code instead?

**Think before adding yet another option.** We should avoid fixing an issue by adding yet another one. Before adding an option, try to think about:

- Whether the problem is really worth addressing
- Whether the problem can be fixed with a smarter default
- Whether the problem has workaround using existing options
- Whether the problem can be addressed with a plugin instead
