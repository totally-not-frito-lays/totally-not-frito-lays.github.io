# README.md

## Learning Goals

- Learn how to use static site generators to scaffold projects
  - Eleventy / 11ty [^2]
- Learn how to use templating languages to reduce complexity
  - Liquid [^3]
- Learn how to do project summaries

## Prerequisites

- Install WSL[^4] if on windows
- Install NVM[^5][^6]

## Running Project[^1]

Project setup:

> Assuming this project is in a new directory

```bash
mkdir portfolio-project
cd portfolio-project
npm init -y
npm install @11ty/eleventy
```

Running Project

```bash
# build files
npx @11ty/eleventy
# hot reload server on http://localhost:8080
npx @11ty/eleventy --serve
```

## Notes

### Learn with Jason[^7]

Static Site Generators[^1]
- Jamstack is a architectural way to separate the web experience from the data 
and logic
- SSGs like 11ty allow us to write templates that each page will inherit so that
the individual pages we work on, we only have to worry about the content
- Generators typically have all the developer files in a place like `src` and 
generate build files which are the ones that actually get deployed to a place 
like `dist` or in this case `_site`

11ty
- 11ty creates clean URLs (ie. no `.html` extension) automatically
- 11ty mimics the file structure of your `.md` files
- default templating language is liquid
- to add assets, use the following flags `--serve --formats=md,jpg`
- `.eleventy.js` is the configuration file to set 11ty behavior like active
templating language
- `<dir>.11tydata.json` is a way to set front matter defaults for all files
  - we can also do this with a `.js` file if we run `module.exports` for any API
- data files (like `projects.11tydata.json`) can be done per file, per directory, or globally
  - `_data` is the default directory
- you can permalink different urls with a `permalink` frontmatter
  - this allows you to build a file in one place but maintain a specific url

Liquid
- the `-` in the `%-` is used to control whitepsace 
`{%- for blog in collections.blog -%}`
- if a front matter file doesn't exist, it gracefully places an empty
  - you can use a conditional to optionally remove elements
- to prevent YAML injection attacks, wrap URL permalinks for paginated content 
with ""
  - ex: `permalink: "/characters/{{character.name | slug}}/"`


Templates
- there are 3 ways to apply a template to a `.md` or `.html` file
  - locally: include `layout: <layout_name>.liquid`
  - directory: include `<directory_name>.11tydata.<json/js>`
  - globally: include `_data/<name>.js`
- APIs and templates
  - anything on the global context is only ran once during build time
  - anything on the local context is run once per file and can be hot reloaded
  - ie. if you wanted to call an API to generate a dog picture once and have it
  be the same picture across the entire site you should put it in the `_data`
  context
  - ie. if you wanted to call an API to generate multiple dog pictures and have 
  different one for each page, you should put it either locally or in the 
  directory
- hot reloads require templates to contain a body tag
- templates are defined in `_includes/` by default
  - this behavior can be changed in `.eleventy.js`
- can chain layouts together

APIs
- axios allows us to make http requests to other servers
- async requests are only called once at build time

---
[^1]: [JAMStack](https://jamstack.org/)
[^2]: [11ty](https://www.11ty.dev/docs/)
[^3]: [Liquid](https://shopify.github.io/liquid/)
[^4]: [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
[^5]: [Node on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
[^6]: [Node general install](https://github.com/nvm-sh/nvm)
[^7]: [Let's Learn Eleventy](https://www.learnwithjason.dev/lets-learn-eleventy)