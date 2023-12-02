# extend-script-ts-template

Template for writing [Extend Script](https://extendscript.docsforadobe.dev/index.html) in Typescript for [After Effects](https://ae-scripting.docsforadobe.dev/).
This template has only been tested on Windows.

Writing JSX (Adobe Extend Script) in After Effects is a tiresome task.  
IntelliSense, Typescript and ESLint can be introduced to increase your productivity.  
During development, it is divided into multiple modules and type definitions are used to improve readability.  
And bundle into one file by Rollup. Ensures portability from programmer to designer.

It also includes a workflow for uploading and building artifacts with Github Actions.

You can find attempts to do this in several repositories. This is my template.

> [!NOTE]
> The compilation of TypeScript ES3 is deprecated in TypeScript 5.5, so the `package.json` for dependent versions is fixed.

## Environment

- Windows
- After Effects >= 2022
- Node.js >= 20
- pnpm

## Usage

Write code in `src/index.ts`

```bash
pnpm install
npm run build
```

## Modules

The `src/lib` folder contains a small utility module.  
This may be separated out, but there are functions intended to prepare some elements that are difficult to handle in Extend Script.  
For example, `filter`, `map`.
