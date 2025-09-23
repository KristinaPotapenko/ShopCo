export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

export type Hair = {
  color: string;
  type: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  gender: "male" | "female";
  image: string;
  age: number;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  macAddress: string;
  ssn: string;
  userAgent: string;
  phone: string;
  password: string;
  role: string;
  university: string;
  ein: string;

  address: Address;
  bank: Bank;
  company: Company;
  crypto: Crypto;

  accessToken: string;
  refreshToken: string;
};
