import { rootReducer } from "../../src/reducers";
import { defaultState } from "../../src/state";

describe("root reducer", () => {
  it("shouldn't alter the state if the action is unknown", () => {
    const state = defaultState;
    const action = {
      type: "unknown action that won't match any reducer",
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
