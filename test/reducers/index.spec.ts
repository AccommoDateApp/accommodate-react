import { rootReducer } from "../../src/reducers";
import { AccommoDateState } from "../../src/state";
import { UserMode } from "../../src/state/profile";

describe("root reducer", () => {
  it("shouldn't alter the state if the action is unknown", () => {
    const state: AccommoDateState = {
      profile: {
        basicDetails : "",
        mode : UserMode.Tenant,
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
