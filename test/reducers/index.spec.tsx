import { rootReducer } from "../../src/reducers";

describe("root reducer", () => {
  it("returns the same state as provided", () => {
    const state = {};
    const action = {
      type: "none",
      value: {},
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
