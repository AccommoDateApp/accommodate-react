import { Action, EmptyAction } from "../actions";
import { EditorActions } from "../actions/editorActions";
import { defaultEditorState, Editor } from "../state/editor";

export const editorReducer = (state: Editor = defaultEditorState, action: EmptyAction & Action<string>) : Editor => {
  switch (action.type) {
    case EditorActions.StartEditing:
      return {
        ...state,
        editing: true,
      };

    case EditorActions.FinishEditing:
      return {
        ...state,
        editing: false,
      };

    case EditorActions.StartSaving:
      return {
        ...state,
        error: undefined,
        isFetching: true,
        value: undefined,
      };

    case EditorActions.FinishSaving:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: true,
      };

    case EditorActions.FailSaving:
      return {
        ...state,
        error: action.value,
        isFetching: false,
        value: false,
      };

    case EditorActions.ResetSaving:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: undefined,
      };

    default:
      return state;
  }
};
