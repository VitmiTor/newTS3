import { User } from "./user/User";
import { getUser } from "../apiCalls/user";
import { Comment } from "./Comment";

export class Post {
  private _userId: number;
  private _id: number;
  private _title: string;
  private _body: string;

  private _user: User;
  private _arrayComments: Comment[];

  public constructor(userId: number, id: number, title: string, body: string) {
    this._userId = userId;
    this._id = id;
    this._title = title;
    this._body = body;
  }

  public setUser = async () => {
    this._user = await getUser(this._userId);
  };

  public showInfo = (): string => {
    return `
    title: ${this._title}
    body: ${this._body} 
    user: ${this._user.showInformation()}
    ${this.showArrayCommentInfo()}
    `;
    //user: ${this._user.showInformation()}
  };

  private showArrayCommentInfo = (): string => {
    let message = "comments: \n";
    this._arrayComments.forEach((element, index) => {
      message += `comentario ${index + 1}\n`;
      message += element.showInfo();
      message += "--------------";
    });
    return message;
  };

  public get id() {
    return this._id;
  }

  public set arrayComments(arrayComment: Comment[]) {
    this._arrayComments = arrayComment;
  }
}
