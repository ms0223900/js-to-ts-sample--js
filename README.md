## 簡介

這是個基於 clean code 和部分 SOLID 原則，以這些為原則撰寫的 TodoList App。
主要有以下特色

1. 串接 Firestore Database，以此做為後端資料庫。
2. api 與行為分離，以注入的方式作為狀態的更新
3. state 與 react 的 setState 分離，狀態與畫面更新彼此為「非耦合」。
4. action 獨立於 state，同樣以 pure function 的方式注入 state 使用。
5. 設計了獨立於 setState 的`BasicStateStore`，主要用於狀態的更新與監聽同步。

## 啟動專案

將`.env.local`改名為`.env`，填入你專案 Firebase Config 的 API_KEY 和 APP_ID

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
