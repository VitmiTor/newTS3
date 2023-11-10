import { Geo } from "./Geo";

export class Address {
  private _street: string;
  private _suite: string;
  private _city: string;
  private _zipcode: string;
  private _geo: Geo;

  public constructor(
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
  ) {
    this._street = street;
    this._suite = suite;
    this._city = city;
    this._zipcode = zipcode;
    this._geo = geo;
  }

  public showInformation = (): string => {
    return `
      street: ${this._street}
      suite: ${this._suite}
      city: ${this._city}
      zipcode: ${this._zipcode}
      geo: ${this._geo.showInformation()}`;
  };
}
