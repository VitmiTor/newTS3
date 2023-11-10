import { getComment } from "./apiCalls/comment";
import { getPost } from "./apiCalls/post";

const main = async () => {
  const comment5 = await getComment(5);
  console.log(comment5.showInfo());
  console.log("================");

  const post1 = await getPost(1);
  console.log(post1.showInfo());
};

main();
