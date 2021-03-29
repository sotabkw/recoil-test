import Head from "next/head";
import { Layout } from "src/components/layout";
import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
import Todo from "../types/Todo";

const TaskList = () => {
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <Layout>
      <Head>
        <title>タスク一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>タスク一覧</h2>
      <ul>
        {list.map((todo: Todo, i: number) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default TaskList;
