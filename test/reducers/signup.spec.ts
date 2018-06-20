import { Action } from "../../src/actions";
import { changeEmail, changeName, changePassword } from "../../src/actions/signupActions";
import { signupReducer } from "../../src/reducers/signupReducer";
import { defaultSignupFormState } from "../../src/state/signup";

describe("signup reducer", () => {
  it("updates the email", () => {
    const updatedEmail = "foo@bar.com";
    const action = changeEmail(updatedEmail);
    const { email } = signupReducer(defaultSignupFormState, action as any);

    expect(email).toBe(updatedEmail);
  });

  it("updates the password", () => {
    const updatedPassword = "foobar";
    const action = changePassword(updatedPassword);
    const { password } = signupReducer(defaultSignupFormState, action as any);

    expect(password).toBe(updatedPassword);
  });

  it("updates the name", () => {
    const updatedName = "foo";
    const action = changeName(updatedName);
    const { name } = signupReducer(defaultSignupFormState, action as any);

    expect(name).toBe(updatedName);
  });

  it("shouldn't alter the state if the action is unknown", () => {
    const action: Action = {
      type: "unknown action that won't match any reducer",
      value: null,
    };

    expect(signupReducer(defaultSignupFormState, action)).toEqual(defaultSignupFormState);
  });
});
