import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { Biography } from "../state/biography";
import { PowerUp } from "../state/store";
import { failSaving, finishSaving, startSaving } from "./editorActions";
import { usePowerUp } from "./powerupsActions";

export enum BiographyActions {
  StartFetchingBio = "start_fetching_bio",
  FinishFetchingBio = "finish_fetching_bio",
  FailFetchingBio = "fail_fetching_bio",

  StartUpdatingBio = "start_updating_bio",
  FinishUpdatingBio = "finish_updating_bio",
  FailUpdatingBio = "fail_updating_bio",
}

const startFetchingBiography = () : EmptyAction => ({
  type: BiographyActions.StartFetchingBio,
});

const finishFetchingBiography = (bio: Biography) : Action<Biography> => ({
  type: BiographyActions.FinishFetchingBio,
  value: bio,
});

const failFetchingBiography = (error: string) : Action<string> => ({
  type: BiographyActions.FailFetchingBio,
  value: error,
});

export const fetchBiography = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchingBiography());

    try {
      const bio = await api.fetchBio();
      dispatch(finishFetchingBiography(bio));
    } catch (error) {
      dispatch(failFetchingBiography(error.message));
    }
  };
};

const startUpdatingBiography = () : EmptyAction => ({
  type: BiographyActions.StartUpdatingBio,
});

const finishUpdatingBiography = (bio: Biography) : Action<Biography> => ({
  type: BiographyActions.FinishUpdatingBio,
  value: bio,
});

const failUpdatingBiography = (error: string) : Action<string> => ({
  type: BiographyActions.FailUpdatingBio,
  value: error,
});

export const updateBiography = (bio: Partial<Biography>) => {
  return async (dispatch: Dispatch) => {
    dispatch(startUpdatingBiography());
    dispatch(startSaving());

    try {
      const updatedBio = await api.updateBio(bio);

      dispatch(finishUpdatingBiography(updatedBio));
      await finishSaving()(dispatch);
    } catch (error) {
      dispatch(failUpdatingBiography(error.message));
      dispatch(failSaving(error.message));
    }
  };
};

export const addRealEstate = (powerup: PowerUp) => {
  return async (dispatch: Dispatch) => {
    dispatch(startUpdatingBiography());
    dispatch(startSaving());

    try {
      await usePowerUp(powerup)(dispatch);

      const updatedBio = await api.createRealEstate();

      dispatch(finishUpdatingBiography(updatedBio));
      await finishSaving()(dispatch);
    } catch (error) {
      dispatch(failUpdatingBiography(error.message));
      dispatch(failSaving(error.message));
    }
  };
};
