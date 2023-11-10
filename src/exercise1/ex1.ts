import { writeCustomFile } from "../files/fileManager";
import { getTodos } from "./apiCalls/todo";
import { getAllUsers } from "./apiCalls/user";
import { Todo } from "./clases/Todo";
import { User } from "./clases/user/User";
import { UserStat } from "./clases/user/UserStat";

const createMapStat = (n: number): Map<number, UserStat> => {
  const mapStat = new Map<number, UserStat>(); //Key:userId : Number,value:UserStat
  for (let i = 1; i <= n; i++) {
    mapStat.set(i, new UserStat());
  }
  return mapStat;
};

const fillMapStat = (
  arrayTodo: Todo[],
  mapStat: Map<number, UserStat>
): void => {
  arrayTodo.forEach((todo) => {
    const userId = todo.userId;
    const currentStat = mapStat.get(userId);
    currentStat.incrementStats(todo.completed);
    mapStat.set(userId, currentStat);
  });
};

const createArrayInformation = (
  usersArray: User[],
  mapStat: Map<number, UserStat>
): string[] => {
  const arrayOut: string[] = [];
  usersArray.forEach((user) => {
    let messageTxt = user.showInformation();
    const userStat = mapStat.get(user.id);
    const sum = userStat.completed + userStat.incompleted;
    messageTxt += `
    completed: ${userStat.completed}
    incompleted: ${userStat.incompleted}
    total: ${sum} \n`;
    arrayOut.push(messageTxt);
  });
  return arrayOut;
};

const main = async (): Promise<void> => {
  const usersArray = await getAllUsers();

  const arrayTodo = await getTodos();

  const mapStat = createMapStat(usersArray.length);

  fillMapStat(arrayTodo, mapStat);

  const message = createArrayInformation(usersArray, mapStat);
  await writeCustomFile("src/exercise1/output/output.txt", message);
};

main();
