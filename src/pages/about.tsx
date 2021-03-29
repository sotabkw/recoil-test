import Head from "next/head";
import { Layout } from "src/components/layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>タスク一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>タスク一覧</h2>
    </Layout>
  );
};

export default About;
