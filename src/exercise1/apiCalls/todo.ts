import { Todo } from "../clases/Todo";
import { generateArrayTodos } from "../parser/todosParser";
import { mainUrl } from "./utilities";

export const getTodos = async (): Promise<Todo[]> => {
  console.log("calling TODOs API");
  const response = await fetch(`${mainUrl}/todos`);
  const responseBody = await response.json(); //returning response body
  return generateArrayTodos(responseBody);
};
