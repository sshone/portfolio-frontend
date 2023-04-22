import Hero from "@/components/hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stuart.dev</title>
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}
