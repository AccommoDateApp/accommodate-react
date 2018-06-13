import { Action } from "../../src/actions";
import { setUserMode } from "../../src/actions/profileActions";
import { profileReducer } from "../../src/reducers/profileReducer";
import { Profile, UserMode } from "../../src/state/profile";

describe("profile reducer", () => {
  const inputState: Profile = {
    basicDetails : "",
    mode : UserMode.Tenant,
  };

  it("sets the user's mode", () => {
    const action = setUserMode(UserMode.Landlord);
    const expectedOutputState = {
      ...inputState,
      mode: UserMode.Landlord,
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
