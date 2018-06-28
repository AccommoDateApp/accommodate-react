import { defaultFetchableState, Fetchable } from ".";

export interface Editor extends Fetchable<boolean> {
  editing: boolean;
}

export const defaultEditorState = {
  ...defaultFetchableState,
  editing: false,
};
