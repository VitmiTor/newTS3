import { User } from "../clases/user/User";
import { generateUser, generateUserArray } from "../parser/usersParser";
import { mainUrl } from "./utilities";

export const getUser = async (id: number): Promise<User> => {
  console.log(`calling user API with id: ${id}`);
  const response = await fetch(`${mainUrl}/users/${id}`);
  const responseBody = await response.json();
  return generateUser(responseBody);
};

export const getAllUsers = async (): Promise<User[]> => {
  console.log("return all user");
  const response = await fetch(`${mainUrl}/users`);
  const responseBody = await response.json();
  return generateUserArray(responseBody);
};
