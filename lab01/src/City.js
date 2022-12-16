import React from "react";

const City = (props) => {
    return (
        <>
            <option value={props.city.image}>{props.city.name}</option>
        </>
    );
}
export default City;