import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormState } from "../atom/TodoTitleFormAtom";
import { todoListState } from "../atom/TodoListAtom";
import Todo from "../types/Todo";

const AddButton: React.FC = () => {
  const todoList: Todo[] = useRecoilValue(todoListState);
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);
  const setTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState);

  const onClick = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }]);
    // タスクを追加したら入力欄は空にする
    setTitleFormValue("");
  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue]);

  return <button onClick={onClick}>追加</button>;
};

export default AddButton;