export interface SignupForm {
  isSigningUp: boolean;
  success?: boolean;
}

export const defaultSignupFormState: SignupForm = {
  isSigningUp: false,
  success: undefined,
};
