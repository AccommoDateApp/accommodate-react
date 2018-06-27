import { Action } from "../../src/actions";
import { signupReducer } from "../../src/reducers/signupReducer";
import { defaultState } from "../../src/state";

describe("signup reducer", () => {
  it("shouldn't alter the state if the action is unknown", () => {
    const action: Action = {
      type: "unknown action that won't match any reducer",
      value: null,
    };

    expect(signupReducer(defaultState.login, action)).toEqual(defaultState.login);
  });
});
