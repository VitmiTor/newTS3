import { Address } from "./Address";
import { Company } from "./Company";

export class User {
  private _id: number;
  private _name: string;
  private _username: string;
  private _email: string;
  private _address: Address;
  private _phone: string;
  private _website: string;
  private _company: Company;

  public constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
  ) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._email = email;
    this._address = address;
    this._phone = phone;
    this._website = website;
    this._company = company;
  }

  public showInformation = (): string => {
    return `id: ${this._id}
    name: ${this._name}
    username: ${this._username}
    email: ${this._email}
    address: ${this._address.showInformation()}
    phone: ${this._phone}
    website: ${this._website}
    company: ${this._company.showInformation()}\n`;
  };

  public get id(): number {
    return this._id;
  }
}
