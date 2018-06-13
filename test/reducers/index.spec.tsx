import { rootReducer } from "../../src/reducers";
import { RootState } from "../../src/state";
import { Profile, UserMode } from "../../src/state/profile";

describe("root reducer", () => {
  it("shouldn't alter the state if the action is unknown", () => {
    const profileData: Profile = {
      basicDetails : "",
      mode : UserMode.Tenant,
    };

    const state: RootState = {
      profile: profileData,
    };

    const action = {
      type: "unknown action that won't match any reducer",
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
