import { Dispatch } from "redux";
import { Action, EmptyAction } from ".";
import { sleep } from "./util";

export enum EditorActions {
  StartEditing = "start_editing",
  FinishEditing = "finish_editing",

  ResetSaving = "reset_saving",
  StartSaving = "start_saving",
  FinishSaving = "finish_saving",
  FailSaving = "fail_saving",
}

export const startEditing = () : EmptyAction => ({
  type: EditorActions.StartEditing,
});

export const finishEditing = () : EmptyAction => ({
  type: EditorActions.FinishEditing,
});

export const startSaving = () : EmptyAction => ({
  type: EditorActions.StartSaving,
});

export const finishSaving = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: EditorActions.FinishSaving,
    });

    await sleep(3000);

    dispatch({
      type: EditorActions.ResetSaving,
    });
  };
};

export const failSaving = (error: string) : Action<string> => ({
  type: EditorActions.FailSaving,
  value: error,
});
