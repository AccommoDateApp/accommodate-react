import { Action } from "../actions";
import { ProfileActions } from "../actions/profileActions";

interface ProfileData {
    basicDetails: string;
    mode: string;               // tenant or landlord
}

const defaultState: ProfileData = {
    basicDetails: "",
    mode: "tenant",
};

export default function(state = defaultState, action: Action) {
    switch (action.type) {
        case ProfileActions.SET_MODE:
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
