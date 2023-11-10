import { Joke } from "../class/Joke";

export const jokeSortSetup = (arrayJokes: Joke[]): void => {
  const n = arrayJokes.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayJokes[j].setup.length > arrayJokes[j + 1].setup.length) {
        const temp = arrayJokes[j];
        arrayJokes[j] = arrayJokes[j + 1];
        arrayJokes[j + 1] = temp;
      }
    }
  }
};

export const jokeSortPunchline = (arrayJokes: Joke[]): void => {
  const n = arrayJokes.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        arrayJokes[j].punchline.localeCompare(arrayJokes[j + 1].punchline) === 1
      ) {
        const temp = arrayJokes[j];
        arrayJokes[j] = arrayJokes[j + 1];
        arrayJokes[j + 1] = temp;
      }
    }
  }
};

export const jokeSortId = (arrayJokes: Joke[]): void => {
  const n = arrayJokes.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayJokes[j].id > arrayJokes[j + 1].id) {
        const temp = arrayJokes[j];
        arrayJokes[j] = arrayJokes[j + 1];
        arrayJokes[j + 1] = temp;
      }
    }
  }
};
