export interface EmptyAction {
    type: string;
}

export interface Action<T = any> {
    type: string;
    value: T;
}
