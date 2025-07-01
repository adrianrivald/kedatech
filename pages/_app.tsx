import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer, Header } from "../components";

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="jAm_Wk_vp2LhU86qaZmD4phSUCHbuWYtEe9gqrQk8qI"
        />
      </Head>

      <section className="w-full mx-auto text-neutral-500">
        <Header />
        <div className="mt-[1.5rem] lg:mt-0">
          <Component {...pageProps} />
          <Footer />
        </div>
      </section>
    </>
  );
}

export default App;
