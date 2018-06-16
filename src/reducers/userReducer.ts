import { defaultUserState, User } from "../state/user";

export const userReducer = (state: User = defaultUserState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
