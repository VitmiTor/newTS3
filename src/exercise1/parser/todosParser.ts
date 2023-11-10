import { Todo } from "../clases/Todo";

export const generateArrayTodos = (arrayTodosJson: any): Todo[] => {
  const arrayTodos: Todo[] = [];

  arrayTodosJson.forEach((element: any) => {
    arrayTodos.push(createTodo(element));
  });

  return arrayTodos;
};

const createTodo = (todosJson: any): Todo => {
  return new Todo(
    todosJson["userId"],
    todosJson["id"],
    todosJson["title"],
    todosJson["completed"]
  );
};
