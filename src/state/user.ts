import { api } from "../api/client";

export interface User {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  loginSuccess?: boolean;
}

export const defaultUserState: User = {
  isLoggedIn: api.isLoggedIn || false,
  isLoggingIn: false,
};
