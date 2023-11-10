export class Comment {
  private _postId: number;
  private _id: number;
  private _name: string;
  private _email: string;
  private _body: string;

  public constructor(
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  ) {
    this._postId = postId;
    this._id = id;
    this._name = name;
    this._email = email;
    this._body = body;
  }

  public showInfo = (): string => {
    return `
    email: ${this._email}
    body: ${this._body}
    `;
  };
}
