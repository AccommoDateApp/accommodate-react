import { api } from "../api/client";
import { Biography } from "./biography";
import { defaultEditorState, Editor } from "./editor";
import {
  defaultMatchingState,
  MatchingState,
} from "./match";
import { defaultPowerUpStoreState, PowerUp, PowerUpStore } from "./store";

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
  matchingState: MatchingState;
  powerups: Fetchable<PowerUp[]>;
}

export const defaultState: AccommoDateState = {
  biography: defaultFetchableState,
  editor: defaultEditorState,
  login: {
    ...defaultFetchableState,
    value: api.isLoggedIn || false,
  },
  matchingState: defaultMatchingState,
  powerups: defaultFetchableState,
  signup: defaultFetchableState,
  store: defaultPowerUpStoreState,
};
