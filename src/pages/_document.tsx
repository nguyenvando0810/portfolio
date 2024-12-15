import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Document() {
  return (
    <Provider store={store}>
      <Html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Provider>
  );
}
