import React, {useEffect, useState} from 'react';

const Task3 = () => {
    const [products, setProducts] = useState([
        {id: 1, name: "Constructor Lego", price: 300, min: 0, max: 10, count: 0},
        {id: 2, name: "Train Station", price: 200, min: 0, max: 10, count: 0},
        {id: 3, name: "Hot Wheels Track", price: 150, min: 0, max: 20, count: 0},
    ])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const handlePlus = (id, maxVal) => {
        setProducts(products.map(item => {
            if (item.id === id && item.count < maxVal){
                item.count += 1
            }
            return item
        }))
    }
    const handleMinus = (id, minVal) => {
        setProducts(products.map(item => {
            if (item.id === id && item.count > minVal){
                item.count -= 1
            }
            return item
        }))
    }
    useEffect(() => {
        let totTemp = 0
        let quaTemp = 0
        products.forEach(item => {
            totTemp += item.count * item.price
            quaTemp += item.count
        })
        setTotal(totTemp)
        setQuantity(quaTemp)
    }, [products])
    return (
        <>
            <h2>Cart</h2>
            <table border={'black'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quntity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handlePlus(item.id, item.max)}>+</button>
                                <p style={{display: "inline",margin: "5px"}}>{item.count}</p>
                                <button onClick={() => handleMinus(item.id, item.min)}>-</button>
                            </td>
                            <td>{item.price * item.count}</td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan={2}>Totals</td>
                        <td>{quantity}</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Task3;