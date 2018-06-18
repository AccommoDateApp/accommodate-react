import { rootReducer } from "../../src/reducers";
import { AccommoDateState } from "../../src/state";
import { ApartmentType, UserRole } from "../../src/state/profile";

describe("root reducer", () => {
  it("shouldn't alter the state if the action is unknown", () => {
    const state: AccommoDateState = {
      profile: {
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
      },
      user: {
        isLoggedIn: false,
        isLoggingIn: false,
      },
    };

    const action = {
      type: "unknown action that won't match any reducer",
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
