import React from "react";
import City from "./City";

const List = (props) => {
    return (
        <>
            <select name="cities">
                {props.cities.map((item,index) =>
                    <City key={index} city={item}/>
                )}
            </select>
        </>
    );
}
export default List;