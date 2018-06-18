export interface User {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
}

export const defaultUserState: User = {
  isLoggedIn: true,
  isLoggingIn: false,
};
