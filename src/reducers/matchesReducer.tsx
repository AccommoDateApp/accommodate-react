import { Action } from "../actions";
import { UserMatches } from "../state/match";
import {
  ApartmentType,
  GenderType,
  ProfileProps,
  UserRole,
} from "../state/profile";

export const matchesReducer = (state: UserMatches = defaultState, action: Action<any>) : UserMatches => {
  switch (action.type) {
    default:
      return state;
  }
};

const candidate: ProfileProps = {
  bio: {
    age: 27,
    education: "Masters",
    email: "hello.world@tum.de",
    firstName: "Shoaib",
    gender: GenderType.Male,
    language: "English, German",
    lastName: "Khan",
    phoneNumber: "1232312134",
  },
  description: "hello I am searching for an accommodation",
  editMode: false,
  realEstate: [
    {
      UTMCords: [123213, 1231],
      address: "Friesenger Landstraße 47A Garching b. München 85748",
      area: 20,
      cost: 2000,
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      images: ["https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"],
      key: "property1",
      name: "Cozy room",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
  ],
  specs: {
    budget: "100-500",
    leaseLength: 5,
    onsiteParking: true,
    onsiteStorage: true,
    petFriendly: false,
    searchingFor: ApartmentType.House,
    smokeFriendly: false,
  },
  userRole: UserRole.Landlord,
};
const defaultState: UserMatches = {
  actualMatches: [],
  potentialMatches: Array(3).fill(candidate),
};
