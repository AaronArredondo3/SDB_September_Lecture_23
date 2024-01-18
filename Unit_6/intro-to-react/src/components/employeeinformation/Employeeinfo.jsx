import React from 'react'

function Employeeinfo(props) { // (props is a parameter that allows to pull info from other jsx files.)

    console.log(props)

    return (
    <>
        <h1>{props.name}</h1>
        <ul style={{listStyleType: "none", textAlign: "left"}}> 
            <li>From: {props.city}/{props.state}</li>
            <li>Position: {props.position}</li> 
            <li>Favorite Food: {props.food}</li>
        </ul>
    </> // this helps with following the rule for only returning one jsx element
    )
}

export default Employeeinfo
// You can write a shortcut for React Fragment by using an empty <>, </> is a React Fragment Shorthand
// In order to pull the info from Employee into the li you wrap the info in curly boys ex: {props.city}