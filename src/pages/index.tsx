import Head from "next/head";
import { Layout } from "src/components/layout";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormState } from "../atom/TodoTitleFormAtom";
import { useState } from "react";
import AddButton from "../components/AddButton";
import { useRouter } from "next/router";

const Home = () => {
  // useRecoilValueでtodoTitleFormStateの値を取得
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);

  console.log(todoTitleFormValue);
  const router = useRouter();
  // useSetRecoilStateでtodoTitleFormStateの値を更新するSetter関数を取得
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState);

  const handleClick = (event: any) => {
    const inputValue = event.target.value;
    setTodoTitleFormValue(inputValue);
  };

  return (
    <Layout>
      <Head>
        <title>タスク追加</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>タスク追加</h2>
      <input type={"text"} name={"title"} value={todoTitleFormValue} onChange={handleClick} />
      <AddButton />
      <button
        onClick={() => {
          router.replace("/test");
        }}
      >
        遷移
      </button>
      ;
    </Layout>
  );
};

export default Home;
