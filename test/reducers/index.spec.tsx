import { rootReducer } from "../../src/reducers";
import { RootState } from "../../src/state";

describe("root reducer", () => {
  it("returns the same state as provided", () => {
    const state: RootState = {
      profile: {
        basicDetails : "",
        mode : "",
      },
    };
    const action = {
      type: "none",
      value: {},
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
