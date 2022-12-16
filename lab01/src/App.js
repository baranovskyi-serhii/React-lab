import React, {useState} from "react";
import Product from "./Product";
import List from "./List";

function App() {
    const [currentTask, setCurrentTask] = useState(1)
    const obj = {name: "Serhii"}
    const obj2 = {first_name: "John", last_name: "Silver", occupation: "Pirate Captain"}
    const cities = [
        {id: 1, name: "Chicago", image: 'chicago.jpg'},
        {id: 2, name: "Los Angeles", image: 'los-angeles.jpg'},
        {id: 3, name: "New York", image: 'new-york.jpg'},
    ]

    const product = {
        name: 'Serhii',
        price: 10000000
    }
    const changeTask = (number) => {
        setCurrentTask(number)
    }
    return (
        <div>
            <button onClick={() => changeTask(1)}>task 1</button>
            <button onClick={() => changeTask(2)}>task 2</button>
            <button onClick={() => changeTask(3)}>task 3</button>
            <button onClick={() => changeTask(4)}>task 4</button>
            <div style={{display: currentTask === 1 ? 'block' : 'none'}}>
                <p>Task 1</p>
                Hello, {obj.name}!
            </div>
            <div style={{display: currentTask === 2 ? 'block' : 'none'}}>
                <p>Task 2</p>
                <table border={'black'}>
                    <tr>
                        <td>First Name</td>
                        <td>{obj2.first_name}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{obj2.last_name}</td>
                    </tr>
                    <tr>
                        <td>Occupation</td>
                        <td>{obj2.occupation}</td>
                    </tr>
                </table>
            </div>
            <div style={{display: currentTask === 3 ? 'block' : 'none'}}>
                <p>Task 3</p>
                <Product textColor={""} product={product}/>
            </div>
            <div style={{display: currentTask === 4 ? 'block' : 'none'}}>
                <p>Task 4</p>
                <List cities={cities}/>
            </div>
        </div>
    );
}

export default App;
