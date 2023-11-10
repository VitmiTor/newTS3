export class UserStat {
  private _completed: number;
  private _incompleted: number;

  public constructor() {
    this._completed = 0;
    this._incompleted = 0;
  }

  public get completed(): number {
    return this._completed;
  }

  public get incompleted(): number {
    return this._incompleted;
  }

  public incrementStats = (completed: boolean): void => {
    if (completed) {
      this._completed++;
    } else {
      this._incompleted++;
    }
  };
}
