import { Action } from "../../src/actions";
import { setUserMode } from "../../src/actions/profileActions";
import { profileReducer } from "../../src/reducers/profileReducer";
import { ApartmentType, Profile, UserRole } from "../../src/state/profile";

describe("profile reducer", () => {
  const inputState: Profile = {
    basicDetails: "",
    bio: [
      {key: "", label: "", value: "", type: ""},
    ],
    description: "",
    editMode: false,
    realState: [
      {
        UTMCords: [1, 1],
        address: "",
        area: 20,
        description: "",
        distanceToUni: 2,
        key: "",
        name: "",
        onSiteParking: true,
        onSiteStorage: false,
        petFriendly: true,
        type: ApartmentType.WG,
      },
    ],
    role: UserRole.Tenant,
    specs: [
      {key: "", label: "", value: ["apartment", "WG", "house"], type: ""},
    ],
  };

  it("sets the user's mode", () => {
    const action = setUserMode(UserRole.Landlord);
    const expectedOutputState = {
      ...inputState,
      role: UserRole.Landlord,
    };

    expect(profileReducer(inputState, action)).toEqual(expectedOutputState);
  });

  it("shouldn't alter the state if the action is unknown", () => {
    const action: Action = {
      type: "unknown action that won't match any reducer",
      value: null,
    };

    expect(profileReducer(inputState, action)).toEqual(inputState);
  });
});
