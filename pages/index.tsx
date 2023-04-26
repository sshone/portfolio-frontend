import ProjectList from "@/components/ProjectList";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stuart.dev</title>
      </Head>
      <main>
        <Hero />
        <Skills />
        <ProjectList />
      </main>
    </div>
  );
}
