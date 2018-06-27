import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { Biography } from "../state/bio";

export enum BioActions {
  StartFetchingBio = "start_fetching_bio",
  FinishFetchingBio = "finish_fetching_bio",
  FailFetchingBio = "fail_fetching_bio",

  StartUpdatingBio = "start_updating_bio",
  FinishUpdatingBio = "finish_updating_bio",
  FailUpdatingBio = "fail_updating_bio",
}

const startFetchingBio = () : EmptyAction => ({
  type: BioActions.StartFetchingBio,
});

const finishFetchingBio = (bio: Biography) : Action<Biography> => ({
  type: BioActions.FinishFetchingBio,
  value: bio,
});

const failFetchingBio = (error: string) : Action<string> => ({
  type: BioActions.FailFetchingBio,
  value: error,
});

export const fetchBio = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchingBio());

    try {
      const bio = await api.fetchBio();
      dispatch(finishFetchingBio(bio));
    } catch (error) {
      dispatch(failFetchingBio(error.message));
    }
  };
};

const startUpdatingBio = () : EmptyAction => ({
  type: BioActions.StartUpdatingBio,
});

const finishUpdatingBio = (bio: Biography) : Action<Biography> => ({
  type: BioActions.FinishUpdatingBio,
  value: bio,
});

const failUpdatingBio = (error: string) : Action<string> => ({
  type: BioActions.FailUpdatingBio,
  value: error,
});

export const updateBio = (bio: Biography) => {
  return async (dispatch: Dispatch) => {
    dispatch(startUpdatingBio());

    try {
      const updatedBio = await api.updateBio(bio);
      dispatch(finishUpdatingBio(updatedBio));
    } catch (error) {
      dispatch(failUpdatingBio(error.message));
    }
  };
};
