import { api } from "../api/client";
import { Biography } from "./biography";
import { defaultEditorState, Editor } from "./editor";
import { defaultUserMatches, UserMatches } from "./match";
import { defaultPowerUpStoreState, PowerUpStore } from "./store";

export interface Fetchable<T = any> {
  isFetching: boolean;
  error?: string;
  value?: T;
}

export const defaultFetchableState: Fetchable = {
  isFetching: false,
};

export interface AccommoDateState {
  signup: Fetchable<boolean>;
  store: PowerUpStore;
  login: Fetchable<boolean>;
  biography: Fetchable<Biography>;
  editor: Editor;
  userMatches: UserMatches;
}

export const defaultState: AccommoDateState = {
  biography: defaultFetchableState,
  editor: defaultEditorState,
  login: {
    ...defaultFetchableState,
    value: api.isLoggedIn || false,
  },
  signup: defaultFetchableState,
  store: defaultPowerUpStoreState,
  userMatches: defaultUserMatches,
};
