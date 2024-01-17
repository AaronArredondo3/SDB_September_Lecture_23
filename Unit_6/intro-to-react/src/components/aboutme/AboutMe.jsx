import React from "react"

function AboutMe() {

    const state = "Kansas"
    const city = "Dodge City"

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: '20pt'
        }
    }

    return(
        <p style={styles.p}>
            I grew up in {city}, {state}
            <ul style={styles.ul}>
                <li>Walmart,</li>
                <li>Home,</li>
                <li>Work</li>
            </ul>
        </p>
    )
}

export default AboutMe

// About Me Challenge
// js
/* 

Create a new folder called about me within the components folder.
Create a new file inside the folder called AboutMe.jsx.
Create a <p> tag that notes where you grew up. 
Use variables for city and state.
Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
Export the component.
Import the component into App.jsx and mount it between the Header and Footer components.
*/