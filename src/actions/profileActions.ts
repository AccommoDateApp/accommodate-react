export enum ProfileActions {
    SET_MODE = "set_mode",
}

export function setMode(flag: string) {
    return {
        type: ProfileActions.SET_MODE,
        value: flag,
    };
}
