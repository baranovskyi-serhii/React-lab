import React, {useState} from 'react';

const Task1 = () => {
    const [counter, setCount] = useState(0)

    const plusHandle = () => {
        if (counter < 10)
            setCount(counter+1)
    }
    const minusHandle = () => {
        if (counter > -10)
            setCount(counter-1)
    }
    return (
        <div>
            <button onClick={plusHandle}>Plus</button>
            <button onClick={minusHandle}>Minus</button>
            <h1>{counter}</h1>
        </div>
    );
};

export default Task1;