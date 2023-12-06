import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Head>
        <title>Business Intelligence | Sequencing Data & Technical Analysis</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Projects/>
    </main>
  )
}
