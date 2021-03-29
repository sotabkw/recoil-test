import Head from "next/head";
import { Layout } from "src/components/layout";

const Home = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <Layout>
      <Head>
        <title>タスク追加</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>タスク追加</h2>
      <button onClick={handleClick}>Button</button>
    </Layout>
  );
};

export default Home;
