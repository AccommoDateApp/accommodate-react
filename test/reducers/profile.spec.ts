import { Action } from "../../src/actions";
import { setUserMode } from "../../src/actions/profileActions";
import { profileReducer } from "../../src/reducers/profileReducer";
import { ApartmentType, GenderType, ProfileProps, UserRole } from "../../src/state/profile";

describe("profile reducer", () => {
  const inputState: ProfileProps = {
    basicDetails: "",
    bio: {
      age: 27,
      education: "Masters",
      email: "hello.world@tum.de",
      fname: "Shoaib",
      gender: GenderType.Male,
      language: "English, German",
      lname: "Khan",
      phoneNumber: "1232312134",
    },
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
    specs: {
      budget: "100-500",
      leaseLength: 5,
      onsightParking: true,
      onsightStorage: true,
      petFriendly: false,
      searchingFor: ApartmentType.House,
      smokeFriendly: false,
    },
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
