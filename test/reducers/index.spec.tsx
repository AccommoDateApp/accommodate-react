import { rootReducer } from "../../src/reducers";

describe("root reducer", () => {
  it("returns the same state as provided", () => {
    // const state = {};
    const action = {
      type: "none",
      value: {},
    };
    const state = rootReducer({}, action);

    expect(rootReducer({}, action)).toEqual(state);
  });
});
