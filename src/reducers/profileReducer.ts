import { Action } from "../actions";
import { ProfileActions } from "../actions/profileActions";
import { ApartmentType, Profile, UserRole } from "../state/profile";

const defaultState: Profile = {
  basicDetails: "",
  bio: [
    {key: "fname", label: "First name", value: "Shoaib", type: "string"},
    {key: "lname", label: "Last name", value: "khan", type: "string"},
    {key: "age", label: "Age", value: "27", type: "calendar"},
    {key: "gender", label: "Gender", value: "male", type: "selection"},
    {key: "education", label: "Education", value: "Master of Computer Science", type: "string"},
    {key: "languages", label: "Languages", value: "English, German", type: "string"},
    {key: "email", label: "E-mail Address", value: "khan.shoaib@tum.de", type: "email"},
    {key: "phoneNumber", label: "Telephone number", value: "123456", type: "string"},
  ],
  description: "hello I am searching for an accommodation",
  editMode: false,
  realState: [
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
  role: UserRole.Tenant,
  specs: [
    {key: "searchingfor", label: "Searching For", value: ["apartment", "WG", "house"], type: "selection"},
    {key: "budget", label: "Budget Limitation", value: 50, type: "range"},
    {key: "leaseLength", label: "Length of Lease", value: "", type: "string"},
    {key: "onSiteParking", label: "On-Site Parking", value: true, type: "boolean"},
    {key: "onSiteStorage", label: "On-Site Storage", value: false, type: "boolean"},
    {key: "petFriendly", label: "Pet Frindly", value: true, type: "boolean"},
    {key: "smoking", label: "Smoking Allowed", value: false, type: "boolean"},
  ],
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
