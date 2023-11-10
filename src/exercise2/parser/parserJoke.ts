import { Joke } from "../class/Joke";

export const createArrayJokes = (arrayJokeJson: any): Joke[] => {
  const arrayJokes: Joke[] = [];

  arrayJokeJson.forEach((jokeJson: any) => {
    arrayJokes.push(createJoke(jokeJson));
  });

  return arrayJokes;
};

const createJoke = (jokeJson: any): Joke => {
  const type = jokeJson["type"];
  const setup = jokeJson["setup"];
  const punchline = jokeJson["punchline"];
  const id = jokeJson["id"];

  return new Joke(type, setup, punchline, id);
};
