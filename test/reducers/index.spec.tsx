import { ProfileActions } from "../../src/actions/profileActions";
import { rootReducer } from "../../src/reducers";
import { IProfile, UserMode } from "../../src/reducers/profileReducer";
import { RootState } from "../../src/state";

describe("root reducer", () => {
  it("returns the same state as provided", () => {
    const profileData: IProfile = {
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
