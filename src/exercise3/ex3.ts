import { getArrayComment, getComment } from "./apiCalls/comment";
import { getArrayPost, getPost } from "./apiCalls/post";
import { Post } from "./clases/Post";
import { Comment } from "./clases/Comment";
import { writeCustomFile } from "../files/fileManager";

const createMap = (arrayPost: Post[]): Map<number, Comment[]> => {
  console.log("CreateMap");
  const map = new Map<number, Comment[]>();

  arrayPost.forEach((post) => {
    const postId = post.id;
    const arrayComment: Comment[] = [];
    map.set(postId, arrayComment);
  });
  return map;
};

const fillCommentMap = (
  arrayComment: Comment[],
  map: Map<number, Comment[]>
): void => {
  console.log("fillComment");
  arrayComment.forEach((comment) => {
    const actualArrayComment = map.get(comment.postId);

    actualArrayComment.push(comment);
    map.set(comment.postId, actualArrayComment);
  });
};

const setPost = (arrayPost: Post[], map: Map<number, Comment[]>): void => {
  console.log("setPost");
  arrayPost.forEach((post) => {
    const comments = map.get(post.id);
    post.arrayComments = comments;
  });

  for (let i = 0; i < arrayPost.length; i++) {
    const post = arrayPost[i];
    const comments = map.get(post.id);
    post.arrayComments = comments;
    arrayPost[i] = post;
  }
};

const showAllPost = (arrayPost: Post[]): string[] => {
  console.log("showAll");
  const arrayString: string[] = [];
  arrayPost.forEach((post) => {
    arrayString.push(post.showInfo());
  });
  return arrayString;
};

const main = async (): Promise<void> => {
  const arrayPost = await getArrayPost();
  console.log(`array tamanio ${arrayPost.length}`);
  const arrayComment = await getArrayComment();

  const map = createMap(arrayPost);
  fillCommentMap(arrayComment, map);
  setPost(arrayPost, map);
  const arrayString = showAllPost(arrayPost);
  await writeCustomFile("src/exercise3/output/output.txt", arrayString);
};

main();
