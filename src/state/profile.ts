export interface Profile {
  basicDetails: string;
  mode: UserMode;
}

export enum UserMode {
  Tenant,
  Landlord,
}
