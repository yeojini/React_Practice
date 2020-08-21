import ActionEnum from '../ActionEnum';

//state 정의
export interface ContentState {
    value: Number;
}

//Action 정의
export interface ContentAction {
    type: ActionEnum;
    payload: string;
}