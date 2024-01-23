import React from 'react'

function Welcome(props) {

// console.log(props)

    function removeName() {
        const updatedNames = props.names.filter(name => name !== props.name);

        props.setNames(updatedNames)
    }

    return (
    <div onClick = {removeName} className='welcome'>Welcome, {props.name}</div>
    )
}

export default Welcome