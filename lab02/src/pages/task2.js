import React, {useState} from 'react';

const Task2 = () => {
    const counters = [
        {id: 1, initial: 6, min: -5, max: 10},
        {id: 2, initial: 5},
        {id: 3},
    ]
    return (
        <div>
            {counters.map(item =>
                <MyCounter counter={item}/>
            )}
        </div>
    );
};

export default Task2;

const MyCounter = (props) => {
    const [number, setNumber] = useState(props.counter.initial ?? 0)
    const [min, setMin] = useState(props.counter.min ?? 0)
    const [max, setMax] = useState(props.counter.max ?? 10)
    const plusHandler = () => {
        if (number < max)
            setNumber(number+1)
    }
    const minusHandler = () => {
        if (number > min)
            setNumber(number-1)
    }
    return(
        <div style={{border: "1px solid black", width: "200px", textAlign: "center", padding: "5px"}}>
            <p>Поточний рахунок: {number}</p>
            <button style={{margin: "0 5px", padding: "0 20px"}} onClick={plusHandler}>Plus</button>
            <button style={{margin: "0 5px", padding: "0 20px"}} onClick={minusHandler}>Minus</button>
        </div>
    )
}