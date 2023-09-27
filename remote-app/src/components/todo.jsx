import { useAllTodosQuery } from "../services/todoService";

export default function Todo() {
  const { data } = useAllTodosQuery();

  console.log(data);

  return <></>;
}
