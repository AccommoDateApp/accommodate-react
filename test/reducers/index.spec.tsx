import { ProfileActions } from "../../src/actions/profileActions";
import { ProfileState, UserMode } from "../../src/components/profile/ProfileTypes";
import { rootReducer } from "../../src/reducers";
import { RootState } from "../../src/state";

describe("root reducer", () => {
  it("State returned by the action should be equal to the provided state", () => {
    const profileData: ProfileState = {
      basicDetails : "",
      mode : UserMode.tenant,
    };
    const state: RootState = {
      profile: profileData,
    };
    const action = {
      type: ProfileActions.SET_USER_MODE,
      value: UserMode.tenant,
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
