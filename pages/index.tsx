import ProjectList from "@/components/ProjectList";
import Hero from "@/components/hero/Hero";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Head>
        <title>Stuart.dev</title>
      </Head>
      <main>
        <Hero projectRef={scrollToRef}></Hero>
        <div ref={scrollToRef}>
          <ProjectList />
        </div>
      </main>
    </div>
  );
}
