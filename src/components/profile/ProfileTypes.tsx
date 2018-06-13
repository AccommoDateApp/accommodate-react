export interface ProfileState {
  basicDetails: string;
  mode: UserMode;
}

export enum UserMode {
  tenant,
  landlord,
}
