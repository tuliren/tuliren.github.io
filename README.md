# 海盘车的领地

[![Build](https://github.com/tuliren/tuliren.github.io/actions/workflows/build.yaml/badge.svg)](https://github.com/tuliren/tuliren.github.io/actions/workflows/build.yaml) [![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Note
Each markdown file's title is specified by a markdown h1 title, or a `title` field in the front matter. Don't provide both. The front matter `title`, if it exists, is injected into each page. Having both will result in duplicate titles.

## Create New Post

```
hexo new <post title>
```

## Installation

```
npm install
```

## Deploy

- Deploy is automatic by Github action (see [`deploy.yml`](.github/workflows/deploy.yaml)).
- The updated hexo contents are pushed to the `master` branch, which is rendered as Github page.
