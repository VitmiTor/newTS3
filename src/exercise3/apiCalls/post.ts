import { Post } from "../clases/Post";
import { createArrayPost, createPost } from "../parser/postParser";
import { mainUrl } from "./utilities";

export const getPost = async (id: number): Promise<Post> => {
  console.log(`calling Post API with id: ${id}`);
  const response = await fetch(`${mainUrl}/posts/${id}`);
  const responseBody = await response.json();
  return createPost(responseBody);
};

export const getArrayPost = async (): Promise<Post[]> => {
  console.log(`calling array Post API with }`);
  const response = await fetch(`${mainUrl}/posts`);
  const responseBody = await response.json();
  return createArrayPost(responseBody);
};
