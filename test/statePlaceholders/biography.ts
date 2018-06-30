import {
  Gender,
  RealEstate, RealEstateType,
  TenantBiography,
  UserMode,
} from "../../src/state/biography";

export const tenantBiographyPlaceholder: TenantBiography = {
  age: 27,
  description: "hello I am searching for an accommodation",
  education: "Masters",
  gender: Gender.Female,
  id: "5b364c924c450e31b03152b8",
  images: [],
  language: "English, German",
  mode: UserMode.Tenant,
  name: "Shoaib Khan",
  phoneNumber: "1232312134",
  preferences: [],
};

export const realEstatePlaceholder: RealEstate = {
  description: "nice house",
  id: "4b364c924c450e31b03152b8",
  images: [],
  location: {
    address: "munich str. 1",
    area: "Munich",
    latitude: 123,
    longitude: 321,
  },
  name: "Central Appartment!",
  preferences: [],
  rent: 234,
  type: RealEstateType.Apartment,
};
