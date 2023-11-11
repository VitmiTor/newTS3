import { Post } from "../clases/Post";

export const createArrayPost = async (arrayPostJson: any): Promise<Post[]> => {
  const arrayPost: Post[] = [];

  arrayPostJson.forEach((element: any) => {
    const post = createPost(element);
    arrayPost.push(post);
  });
  console.log("este es el vd tamanio " + arrayPost.length);

  return arrayPost;
};

export const createPost = (postJson: any): Post => {
  const userId = postJson["userId"];
  const id = postJson["id"];
  const title = postJson["title"];
  const body = postJson["body"];

  const post = new Post(userId, id, title, body);
  //await post.setUser();
  return post;
};
