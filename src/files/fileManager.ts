import { promises as fs } from "fs";

export const readCustomFile = async (filePath:string):Promise<string[]> => {
  const data = await fs.readFile(filePath, "binary");
  const dataString = Buffer.from(data).toString();
  return dataString.split("\n");
};

export const writeCustomFile = async (filePath:string, arrayOutput:string[]):Promise<void> => {
  let contentFile = "";
  arrayOutput.forEach((elementArray) => {
    contentFile += elementArray + "\n";
  });
  await fs.writeFile(filePath, arrayOutput);
};
