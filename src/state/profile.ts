export interface ProfileProps {
  basicDetails: string;
  bio: BioData;
  description: string;
  editMode: boolean;
  role: UserRole;
  specs: TenantSpecs;
  realState: RealstateType[];
}

export interface BioData {
  fname: string;
  lname: string;
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

export interface RealstateType {
  key: string;
  name: string;
  address: string;
  area: number;
  UTMCords: number[];
  description: string;
  distanceToUni: number;
  onSiteParking: boolean;
  onSiteStorage: boolean;
  petFriendly: boolean;
  type: ApartmentType;
}

export interface Card {
  bio: BioData;
  description: string;
  specs: TenantSpecs;
  role: UserRole;
  editMode: boolean;
  realState: RealstateType[];
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
