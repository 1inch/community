<div align="center">
    <img src="https://github.com/1inch/farming/blob/master/.github/1inch_github_w.svg#gh-light-mode-only" />
    <img src="https://github.com/1inch/farming/blob/master/.github/1inch_github_b.svg#gh-dark-mode-only" />
</div>

# Welcome to the 1inch Community & Governance Docs!

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

This folder contains submodules that you need to pull `git submodule update --recursive`

## Running the docs site locally

### Install base dependencies

```
$ pnpm install
```

### Run local environment

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### General info

You can see `warning` in time `pnpm install` - it's okey

File `docs\limit-order-protocol\smart-contract\_category_.json` changed after `pnpm install`. Discard changes in this file before execute some other commands

Search doesn't work in `pnpm start`.
For check working of the search you need:
- `pnpm build`
- `pnpm serve`

If you got some error check that you does all in accordiance with README.
After that remove `pnpm-lock.yaml` (`package-lock.json`), `node_modules` and `build` (if there is one). And try again.
Also check node.js version. All correct worked with node version 18.2.0

