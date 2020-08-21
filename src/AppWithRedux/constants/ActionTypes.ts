import ActionEnum from '../ActionEnum';

//state 정의
export interface ContentState {
    sum: number;
}

//Action 정의
export interface ContentAction {
    type: ActionEnum;
    payload: {
        operand: number;
    }
}