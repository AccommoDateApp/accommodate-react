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

interface TenantSpecs {
  searchingFor: ApartmentType;
  budget: string;
  leaseLength: number;
  onsightParking: boolean;
  onsightStorage: boolean;
  petFriendly: boolean;
  smokeFriendly: boolean;
}

interface RealstateType {
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
}

export enum UserRole {
  Tenant,
  Landlord,
}

export enum ApartmentType {
  WG,
  Shared_flat,
  House,
}

export enum GenderType {
  Male,
  Female,
}
