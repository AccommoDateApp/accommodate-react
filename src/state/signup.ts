export interface SignupForm {
  isSigningUp: boolean;
  success?: boolean;

  email: string;
  name: string;
  password: string;
}

export const defaultSignupFormState: SignupForm = {
  isSigningUp: false,
  success: undefined,

  email: "",
  name: "",
  password: "",
};
