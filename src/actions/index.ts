export interface IEmptyAction {
    type: number;
}

export interface IAction<T = any> {
    type: string;
    value: T;
}
