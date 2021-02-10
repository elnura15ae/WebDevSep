import React from 'react'

export default function ChildComponentSecond({userdata}) {
    return (
        <div>
            <h1>Child Component 2</h1>
            {console.log("child2", userdata)}            }
        </div>
    )
}
