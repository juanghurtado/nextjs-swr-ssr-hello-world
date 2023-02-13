# SWR with NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to illustrate my proposed usage of [SWR](https://swr.vercel.app/) within NextJS projects.

## Proposal

Client side:

- The API is consumed through methods inside what I consider "services": `getExampleData()` in `./services(service-example-data.ts`
- Components never call services directly. The always use custom "domain" hooks: `useExampleData()`, `useAddExampleData()`… in `./hooks/api`. These "domain hooks" allow components to interact with the frontend domain API models directly
- These custom hooks use a generic custom hook (`useAPIData()` and `useAPIMutation()` in `./hooks/api/common`) under the hood
- These custom hooks use SWR under the hood


SSR/SSG/ISG:

- Inside the `getServerSideProps()`/`getStaticProps()`, we can call the services directly: `getServerSideProps()` in `./pages/index.tsx`
- The data returned by the service is passed to the NextJS page component within a `fallback` prop: `return` in the `getServerSideProps()` in `./pages/index.tsx`
- This `fallback` props is passed to `SWRConfig` to init the cache in `./pages/_app.tsx`

## Benefits

- Decoupling between components and services/API
- Decoupling between components and SWR
- All the benefits of SWR (caching, auto-refresh…)
