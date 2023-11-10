import { Joke } from "../class/Joke";
import { createArrayJokes } from "../parser/parserJoke";
import { mainUrl } from "./mainUrl";

export const getJokes = async (): Promise<Joke[]> => {
  console.log("return all jokes");
  const response = await fetch(`${mainUrl}/jokes/ten`);
  const responseBody = await response.json();
  return createArrayJokes(responseBody);
};
