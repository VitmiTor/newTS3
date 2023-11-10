import { Comment } from "../clases/Comment";
import { createComment, generateArrayComment } from "../parser/commentParser";
import { mainUrl } from "./utilities";

export const getComment = async (id: number): Promise<Comment> => {
  console.log(`calling Comment API with id: ${id}`);
  const response = await fetch(`${mainUrl}/comments/${id}`);
  const responseBody = await response.json();
  return createComment(responseBody);
};

export const getArrayComment = async (): Promise<Comment[]> => {
  console.log(`calling Comment API `);
  const response = await fetch(`${mainUrl}/comments`);
  const responseBody = await response.json();
  return generateArrayComment(responseBody);
};
