import { Post } from "../clases/Post";

export const createArrayPost = async (arrayPostJson: any): Promise<Post[]> => {
  const arrayPost: Post[] = [];

  arrayPostJson.forEach(async (element: any) => {
    const post = await createPost(element);
    arrayPost.push(post);
  });

  return arrayPost;
};

export const createPost = async (postJson: any): Promise<Post> => {
  const userId = postJson["userId"];
  const id = postJson["id"];
  const title = postJson["title"];
  const body = postJson["body"];

  const post = new Post(userId, id, title, body);
  await post.setUser();
  return post;
};
