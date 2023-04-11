// 타입 정의
export const increase = 'increase';
export const decrease = 'decrease';

// 액션함수 정의
export const increaseAction = (res) => {
    return {
        type: increase,
        payload: res,
    }
}

export const decreaseAction = (res) => {
    return {
        type: decrease,
        payload: res,
    }
}