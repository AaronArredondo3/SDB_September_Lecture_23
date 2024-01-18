import React from 'react'
import Employeeinfo from './Employeeinfo';

export default function Employee() {

    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: "Web Dev",
            food: "Pizza"
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: "UX/UI",
            food: "Steak"
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: "Sales Rep",
            food: "Sushi" 
        },
    ];

    return (
    <>
        <h1>Hello from Employees!</h1>
        {
            employeeRecords.map((record, index) => (
                <Employeeinfo
                    key={index}
                    name={record.name}
                    city={record.city}
                    state={record.state}
                    position={record.position}
                    food={record.food}
                />
            ))
        }
    </>
    )
}
// empty <>, </> is a React Fragment Shorthand
// If you want to do special styling you can't just use a React Fragment Shortcut