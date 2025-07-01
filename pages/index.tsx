import Head from "next/head";
import { Hero } from "../components";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Landing page of Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[5.5rem]">
        <Hero />
      </main>
    </div>
  );
}
