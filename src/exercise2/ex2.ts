import { writeCustomFile } from "../files/fileManager";
import { getJokes } from "./apiCaller/jokeApi";
import { Joke } from "./class/Joke";
import {
  jokeSortId,
  jokeSortPunchline,
  jokeSortSetup,
} from "./utilities/jokeSort";

const writePunchline = async (arrayJokes: Joke[]): Promise<void> => {
  jokeSortPunchline(arrayJokes);
  const arrayMessage = [];
  arrayJokes.forEach((element) => {
    let message = "";
    message += element.showInfo();
    arrayMessage.push(message);
    writeCustomFile("src/exercise2/output2/opcion1.txt", arrayMessage);
  });
};

const writeSetup = (arrayJokes: Joke[]): void => {
  jokeSortSetup(arrayJokes);
  const arrayMessage = [];
  arrayJokes.forEach((element) => {
    let message = "";
    message += element.showInfo();
    arrayMessage.push(message);
    writeCustomFile("src/exercise2/output2/opcion2.txt", arrayMessage);
  });
};

const writeId = (arrayJokes: Joke[]): void => {
  jokeSortId(arrayJokes);
  const arrayMessage = [];
  arrayJokes.forEach((element) => {
    let message = "";
    message += element.showInfo();
    arrayMessage.push(message);
    writeCustomFile("src/exercise2/output2/opcion3.txt", arrayMessage);
  });
};

const main = async (): Promise<void> => {
  const arrayJokes = await getJokes();
  writePunchline(arrayJokes);
  writeSetup(arrayJokes);
  writeId(arrayJokes);
};

main();
