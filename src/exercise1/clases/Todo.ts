export class Todo {
  private _userId: number;
  private _id: number;
  private _title: string;
  private _completed: boolean;

  constructor(userId: number, id: number, title: string, completed: boolean) {
    this._userId = userId;
    this._id = id;
    this._title = title;
    this._completed = completed;
  }

  public showInformation = () => {
    const message = `
    userID: ${this._userId}
    id: ${this._id}
    title: ${this._title}
    completed: ${this._completed}
    `;
    console.log(message);
  };

  public get userId(): number {
    return this._userId;
  }

  public get completed(): boolean {
    return this._completed;
  }
}
