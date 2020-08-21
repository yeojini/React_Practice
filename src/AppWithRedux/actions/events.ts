//액션 생성 함수 만들기
import ActionEnum from '../ActionEnum';
import { ContentAction } from '../constants/ActionTypes';

export const Add = (operand: number): ContentAction => ({
    type: ActionEnum.ADD,
    payload: {
        operand,
    }
});

export const Sub = (operand: number): ContentAction => ({
    type: ActionEnum.SUBTRACT,
    payload: {
        operand,
    }
});

export const Mul = (operand: number): ContentAction => ({
    type: ActionEnum.MULTIPLE,
    payload: {
        operand,
    }
});

export const Div = (operand: number): ContentAction => ({
    type: ActionEnum.SUBTRACT,
    payload: {
        operand,
    }
});