import { rootReducer } from "../../src/reducers";

describe("root reducer", () => {
  it("returns the same state as provided", () => {
    const state = 0;
    const action = {
      type: "none",
      value: 0,
    };

    expect(rootReducer(state, action)).toEqual(state);
  });
});
