export interface Profile {
  basicDetails: string;
  mode: UserMode;
}

export enum UserMode {
  tenant,
  landlord,
}
