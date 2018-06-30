import { Matchable } from "./match";

export enum UserMode {
  Tenant = 0,
  Landlord = 1,
}

export enum Gender {
  Male = 0,
  Female = 1,
  NoAnswer = 2,
}

export interface Preference<T = any> {
  name: string;
  value: T;
}

export interface Biography {
  phoneNumber: string;
  mode: UserMode;
  gender: Gender;
  description: string;
  name: string;
}

export interface TenantBiography extends Biography, Matchable {
  mode: UserMode.Tenant;
  age: number;
  images: string[];
  language: string;
  education: string;
  preferences: Preference[];
}

export enum RealEstateType {
  WG = 0,
  Apartment = 1,
  House = 2,
}

export interface RealEstateLocation {
  address: string;
  area: string;
  latitude: number;
  longitude: number;
}

export interface RealEstate extends Matchable {
  description: string;
  type: RealEstateType;
  location: RealEstateLocation;
  images: string[];
  rent: number;
  preferences: Preference[];
}

export interface LandlordBiography extends Biography {
  mode: UserMode.Landlord;
  realEstates: RealEstate[];
}

export const defaultBioState: Biography = {} as any;
