export interface IEmptyAction {
    type: string;
}

export interface IAction<T = any> {
    type: string;
    value: T;
}
