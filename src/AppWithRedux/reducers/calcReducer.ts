//Initial state, reducer 정의
import { ContentState, ContentAction } from '../constants/ActionTypes';
import ActionEnum from '../ActionEnum';

const initialState: ContentState = {
    sum: 0
};

function calcReducer(state = initialState, action: ContentAction): ContentState {
    switch (action.type) {
        case ActionEnum.ADD:
            return {
                sum: state.sum + action.payload.operand
            };
        case ActionEnum.SUBTRACT:
            return {
                sum: state.sum - action.payload.operand
            };
        case ActionEnum.MULTIPLE:
            return {
                sum: state.sum * action.payload.operand
            };
        case ActionEnum.DIVIDE:
            return {
                sum: state.sum / action.payload.operand
            };
        default:
            break;
    }
    return state;
}

export default calcReducer;