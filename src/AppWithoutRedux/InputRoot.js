import React, { useState } from 'react';
import '../style/Parent.css';
import { Input } from './Input';

const InputRoot = ({ handleSend }) => {
    const [inputNumber, setInputNumber] = useState(0);
    const [sum, setSum] = useState(0);
    const onClickSend = () => {
        console.log('Send');
        handleSend(inputNumber);
        //Root의 <InputRoot> 태그에서 프로퍼티로 설정한 onClick 함수
    }
    const onClickClearAll = () => {
        console.log('ClearAll');
        setInputNumber(0);
        setSum(0);
    }
    const onClickAdd = () => {
        console.log('Add');
        setSum(Number(sum) + Number(inputNumber));
    }

    return (
        <div className="Parent">
            <h1>InputRoot</h1>

            <input
                type="text"
                value={inputNumber}
                onChange={(e) => {
                    console.log('change');
                    setInputNumber(e.target.value);
                }}>
            </input>

            <input type="button" value="Send input value to DisplayRoot"
                onClick={onClickSend}></input>

            <input type="button" value="Add"
                onClick={onClickAdd}></input>

            <input type="button" value="ClearAll"
                onClick={onClickClearAll}></input>

            <Input
                sumClear={() => { setSum(0) }}
                // Input Component 에 이름이 sumClear라는 props 를 전달한다.
                // Input Component 는 전달받은 sumClear 를 컴포넌트 내부의 DOM 이벤트로 설정해
                // Input Component의 Clear 버튼이 눌리면 onClickClear 함수가 실행된다
                onClickResultSend={() => { handleSend(sum) }}
                // 부모 컨포넌트인 AppWithoutRedux 컨포넌트로부터 자식 컨포넌트인 inputRoot 가
                // 자신의 자식 컨포넌트인 Input Component 에게 handleSend 라는 props 를 전달
                number={inputNumber} sum={sum}>
            </Input>
        </div>
    );
}

export default InputRoot;