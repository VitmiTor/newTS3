import { Comment } from "../clases/Comment";

export const generateArrayComment = (arrayCommentJson: any): Comment[] => {
  const arrayComment: Comment[] = [];

  arrayCommentJson.forEach((element: any) => {
    arrayComment.push(createComment(element));
  });
  return arrayComment;
};

export const createComment = (commentJson: any): Comment => {
  const postId = commentJson["postId"];
  const id = commentJson["id"];
  const name = commentJson["name"];
  const email = commentJson["email"];
  const body = commentJson["body"];
  return new Comment(postId, id, name, email, body);
};
