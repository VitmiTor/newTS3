export class Company {
  private _name: string;
  private _catchPhrase: string;
  private _bs: string;

  public constructor(name:string, catchPhrase:string, bs:string) {
    this._name = name;
    this._catchPhrase = catchPhrase;
    this._bs = bs;
  }

  public showInformation = ():string => {
    return `
      company name: ${this._name}
      catchPhrase: ${this._catchPhrase}
      bs: ${this._bs}`;
  };
}
