import React from "react";

const Product = (props) => {
    return (
        <div style={{color: props.textColor}}>
            My name is {props.product.name} and my cost is {props.product.price} $$$!
        </div>
    );
};
export default Product;