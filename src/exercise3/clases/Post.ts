import { User } from "./user/User";
import { getUser } from "../apiCalls/user";

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
    this._arrayComments = [];
  }

  public setUser = async () => {
    this._user = await getUser(this._userId);
  };

  public showInfo = (): string => {
    return `
    title: ${this._title}
    body: ${this._body} 
    user: ${this._user.showInformation()}
    `;
  };
}
