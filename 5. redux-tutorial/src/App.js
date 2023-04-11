import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from './modules/actions';

const App = () => {
    const dispatch = useDispatch();

    const num = useSelector(state => state.numberReducer.num); // indexReducer에 정의해둔 numberReducer의 initState에 정의된 num값 가져오기

    const onClickIncrease = () => {
        dispatch(increaseAction(3)); // dispatch를 이용하여 action함수를 reducer에 전달
    }

    const onClickDecrease = () => {
        dispatch(decreaseAction(2)); // dispatch를 이용하여 action함수를 reducer에 전달
    }

    return (
        <div>
            <p>현재 값: {num}</p>

            <button onClick={onClickIncrease}>증가</button>
            <button onClick={onClickDecrease}>감소</button>
        </div>
    )
}

export default App;