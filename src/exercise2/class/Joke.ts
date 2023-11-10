export class Joke {
  private _type: string;
  private _setup: string;
  private _punchline: string;
  private _id: number;

  constructor(type: string, setup: string, punchline: string, id: number) {
    this._type = type;
    this._setup = setup;
    this._punchline = punchline;
    this._id = id;
  }

  public get setup(): string {
    return this._setup;
  }

  public get punchline(): string {
    return this._punchline;
  }

  public get id(): number {
    return this._id;
  }

  public showInfo = (): string => {
    return `
    id: ${this._id}
    type: ${this._type}
    setup: ${this._setup}
    punchline: ${this._punchline}
    `;
  };
}
