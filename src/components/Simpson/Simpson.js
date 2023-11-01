import './Simpson.css'
import React from "react";
function Simpson(props){
    let {name,surname,age,info,photo} = props;
    return(
    <div>
        <h1>{name}</h1>
        <p>{surname}</p>
        <p>{age}</p>
        <p>{info}</p>
        <img src={photo} alt="not found"/>
    </div>
    );
}
export default Simpson;