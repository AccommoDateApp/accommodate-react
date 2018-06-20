import { Action } from "../actions";
import { ProfileActions } from "../actions/profileActions";
import { ApartmentType, GenderType, ProfileProps, UserRole } from "../state/profile";

const defaultState: ProfileProps = {
  basicDetails: "",
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
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      key: "property1",
      name: "Room a in a shared apartment",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
    {
      UTMCords: [123213, 1231],
      address: "Friesenger Landstraße 47A Garching b. München 85748",
      area: 20,
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      key: "property1",
      name: "Room a in a shared apartment",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
    {
      UTMCords: [123213, 1231],
      address: "Friesenger Landstraße 47A Garching b. München 85748",
      area: 20,
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      key: "property1",
      name: "Room a in a shared apartment",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
    {
      UTMCords: [123213, 1231],
      address: "Friesenger Landstraße 47A Garching b. München 85748",
      area: 20,
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      key: "property1",
      name: "Room a in a shared apartment",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
    {
      UTMCords: [123213, 1231],
      address: "Friesenger Landstraße 47A Garching b. München 85748",
      area: 20,
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      key: "property1",
      name: "Room a in a shared apartment",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
    {
      UTMCords: [123213, 1231],
      address: "Friesenger Landstraße 47A Garching b. München 85748",
      area: 20,
      description: "A bright room in a furnished three-room apartment. You will be sharing the bathroom and the kitchen with two other tenants.",
      distanceToUni: 2,
      key: "property1",
      name: "Room a in a shared apartment",
      onSiteParking: true,
      onSiteStorage: false,
      petFriendly: true,
      type: ApartmentType.WG,
    },
  ],
  role: UserRole.Landlord,
  specs: {
    budget: "100-500",
    leaseLength: 5,
    onsiteParking: true,
    onsiteStorage: true,
    petFriendly: false,
    searchingFor: ApartmentType.House,
    smokeFriendly: false,
  },
};

export const profileReducer = (state = defaultState, action: Action<UserRole>) => {
  switch (action.type) {
    case ProfileActions.SET_USER_ROLE:
    return {
      ...state,
      role: action.value,
    };
    default:
    return state;
  }
};
