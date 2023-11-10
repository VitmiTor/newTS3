export class Geo {
  private _lat: string;
  private _lng: string;

  public constructor(lat: string, lng: string) {
    this._lat = lat;
    this._lng = lng;
  }

  public showInformation = (): string => {
    return `
        lat: ${this._lat}
        lng: ${this._lng}`;
  };
}
