# Coinbase Wallet History Demo Backend

![NodeJs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Coinbase](https://img.shields.io/badge/Coinbase-0052FF?style=for-the-badge&logo=Coinbase&logoColor=white)

<hr/>

## Prerequisites

- [Node](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)

## Installation

```bash
pnpm i
```

- Fill in the environment variables in the `.env` file, refer to the `.env.example` file for the required variables. You'll need to create a [CDP API key](https://portal.cdp.coinbase.com/access/api) fill it on the `.env` file.

---

## Development Usage

Start the Express Server

```bash
pnpm run dev
```

---

## Production Usage

Build the project

```bash
pnpm run build
```

Start the Express Server

```bash
pnpm start
```

## Deploying to Vercel

1. Install Vercel client: `npm i -g vercel`
2. Login on your terminal by running the command: `vercel login` and use the browser to login.
3. Then, on the project folder, run `vercel --prod` to deploy it and it will be deployed after a few seconds. You'll be asked for a few configs the first time, you can use the default ones.
