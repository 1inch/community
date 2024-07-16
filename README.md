<div align="center">
    <img src="https://github.com/1inch/farming/blob/master/.github/1inch_github_w.svg#gh-light-mode-only">
    <img src="https://github.com/1inch/farming/blob/master/.github/1inch_github_b.svg#gh-dark-mode-only">
</div>


# Welcome to the 1inch Community & Governance Repository!

This repository contains all the essential documentation and guidelines related to the 1inch governance processes:

- **Governance proposals**
- **Voting mechanisms**
- **Role responsibilities**
- **Community participation**
- **And more**

Our goal is to ensure transparent and effective decision-making within the 1inch community. Contributions and feedback are highly encouraged to help us improve and evolve our governance practices.

***


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
This repo contains submodules that you need to pull `git submodule update --recursive`

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Info about development
You can see `warning` in time `yarn install` - it's okey

File `docs\limit-order-protocol\smart-contract\_category_.json` changed after `yarn install`. Discard changes in this file before execute some other commands

Search doesn't work in `yarn start`.
For check working of the search you need:
- `yarn build`
- `yarn serve`

If you got some error check that you does all in accordiance with README.
After that remove `yarn.lock` (`package-lock.json`), `node_modules` and `build` (if there is one). And try again.
Also check node.js version. All correct worked with node version 16.17.1

