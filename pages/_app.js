import "@/styles/globals.css";
import { GlobalStyle } from "@/styles/GlobalStyle";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
