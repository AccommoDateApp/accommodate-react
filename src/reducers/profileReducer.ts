import { IAction } from "../actions";
import { ProfileActions } from "../actions/profileActions";

export interface IProfile {
    basicDetails: string;
    mode: string;               // tenant or landlord
}

const defaultState: IProfile = {
    basicDetails: "",
    mode: "tenant",
};

export default function(state = defaultState, action: IAction) {
    switch (action.type) {
        case ProfileActions.SET_USER_MODE:
        if (action.value === "tenant") {
            return {
                ...state,
                mode: "tenant",
            };
        } else {
            return {
                ...state,
                mode: "landlord",
            };
        }
        default:
        return state;
    }
}
