import { decrease, increase } from './actions'

// store
const initState = {
    num: 5,
}

// 타입에 맞는 callback이 이루어지는 reducer
const numberReducer = (state = initState, action) => {
    switch(action.type) {
        // action함수에 increase 타입이 있을 경우
        case increase: {
            return {
                ...state, // 기존 state값 유지하고
                num: state.num + action.payload, // num에 해당하는 값만 다음과 같이 변경
            }
        }

        case decrease: {
            return {
                ...state,
                num: state.num - action.payload,
            }
        }

        // action함수에 해당되는 타입이 없을 경우
        default: {
            return {
                ...state, // 기존 state값만 유지
            }
        }
    }
}

export default numberReducer;