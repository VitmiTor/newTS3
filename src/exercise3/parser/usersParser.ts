import { Address } from "../clases/user/Address";
import { Company } from "../clases/user/Company";
import { Geo } from "../clases/user/Geo";
import { User } from "../clases/user/User";

export const generateUserArray = (arrayUserJson: any): User[] => {
  const arrayUser: User[] = [];

  arrayUserJson.forEach((userJson: any) => {
    arrayUser.push(generateUser(userJson));
  });

  return arrayUser;
};

export const generateUser = (userJson: any): User => {
  const address = generateAddress(userJson["address"]);
  const company = generateCompany(userJson["company"]);
  const id = userJson["id"];
  const name = userJson["name"];
  const userName = userJson["username"];
  const email = userJson["email"];
  const phone = userJson["phone"];
  const website = userJson["website"];

  return new User(id, name, userName, email, address, phone, website, company);
};

const generateAddress = (addressJson: any): Address => {
  const geo = generateGeo(addressJson["geo"]);

  const street = addressJson["street"];
  const suite = addressJson["suite"];
  const city = addressJson["city"];
  const zipcode = addressJson["zipcode"];

  return new Address(street, suite, city, zipcode, geo);
};

const generateGeo = (geoJson: any): Geo => {
  const lat = geoJson["lat"];
  const lng = geoJson["lng"];

  return new Geo(lat, lng);
};

const generateCompany = (companyJson: any): Company => {
  const name = companyJson["name"];
  const catchPhrase = companyJson["catchPhrase"];
  const bs = companyJson["bs"];

  return new Company(name, catchPhrase, bs);
};
