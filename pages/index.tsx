import Head from "next/head";
import { Hero } from "../components";
import { Subscribe } from "../components/Subscribe/Subscribe";
import { Benefit } from "../components/Benefit/Benefit";
import { Contact } from "../components/Contact/Contact";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const scrollToId = router.query.section as string;

    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }, [router.query.section]);

  return (
    <div>
      <Head>
        <title>ERP Now</title>
        <meta name="description" content="Landing page of ERP Now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[5.5rem]">
        <Hero />
        <Subscribe />
        <Benefit />
        <Contact />
      </main>
    </div>
  );
}
