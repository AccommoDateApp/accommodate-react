export interface Profile {
  basicDetails: string;
  bio: DataSpecs[];
  description: string;
  editMode: boolean;
  role: UserRole;
  specs: DataSpecs[];
  realState: RealstateType[];
}

interface DataSpecs {
  key: string;
  value: string|string[]|boolean|number;
  label: string;
  type: string;
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

export enum UserRole {
  Tenant,
  Landlord,
}

export enum ApartmentType {
  WG,
  Shared_flat,
  House,
}

export interface Card {
  bio: DataSpecs[];
  description: string;
  specs: DataSpecs[];
  role: UserRole;
}
