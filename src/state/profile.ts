export interface ProfileProps {
  basicDetails: string;
  bio: BioData;
  description: string;
  editMode: boolean;
  role: UserRole;
  specs: TenantSpecs;
  realEstate: RealEstateType[];
}

export interface BioData {
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderType;
  education: string;
  language: string;
  email: string;
  phoneNumber: string;
}

export interface TenantSpecs {
  searchingFor: ApartmentType;
  budget: string;
  leaseLength: number;
  onsiteParking: boolean;
  onsiteStorage: boolean;
  petFriendly: boolean;
  smokeFriendly: boolean;
}

export interface RealEstateType {
  key: string;
  name: string;
  address: string;
  area: number;
  UTMCords: number[];
  images: string[];
  description: string;
  distanceToUni: number;
  onSiteParking: boolean;
  onSiteStorage: boolean;
  petFriendly: boolean;
  type: ApartmentType;
  cost: number;
}

export interface Card {
  bio: BioData;
  description: string;
  specs: TenantSpecs;
  role: UserRole;
  editMode: boolean;
  realEstate: RealEstateType[];
}

export enum UserRole {
  Tenant,
  Landlord,
}

export enum ApartmentType {
  WG,
  Apartment,
  House,
}

export enum GenderType {
  Male,
  Female,
}
