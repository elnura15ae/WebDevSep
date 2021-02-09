import React from 'react'

export default function childComponentSecond({userdata}) {
    return (
        <div>
            <h1>Child Component</h1>
            {console.log("child1",userdata)}
        </div>
    )
}