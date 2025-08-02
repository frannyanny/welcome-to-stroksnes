This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Next js installation
Make sure that node.js is installed: https://nodejs.org/en/download

```bash
npm install next@latest react@latest react-dom@latest
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To add images

Add images to ./public/images/

Once added run:

```bash

npx tsx scripts/generateImageData.ts

```

If this doesn't work straight off you might need to install tsx first:

```bash

npm i tsx

```

The script above will append an entry for all new files in the directory. Go in manually and update the data (photographer, film used etc.)


## To build

```bash
npm run build
```

This will run the script generateImageData.tsx which will create a json file with info about all pics in ./public/images/