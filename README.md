This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

//make a componet 

//making an Ui Hardware component and defining payload for controlling it 
create a component folder in src/modules/playground/components/simulated-hardwares/
make a component file that will include wokwi element
make a component controller that will include all action functions and payload

//define keys for all required blocks
create all block keys that is required by component 

//making blocks ui in json related to respected element
make a component block definition file in src/utils/playground/workspace/blocks/definitions
define all block ui json config in an array

//make a function that will generate code for blocks 
make a generator function inside file src/utils/playground/workspace/blocks/generators/javascript.js
define block key and call controller methods of element for fetching code

//making a toolbox for component
make a file in src/utils/playground/workspace/toolbox/component_toolboxes of your component name
include all the blocks that is needed for this component

//finally define blocks in mainToolbox container 
include all block array in src/utils/playground/workspace/toolbox/toolboxContainer.js

