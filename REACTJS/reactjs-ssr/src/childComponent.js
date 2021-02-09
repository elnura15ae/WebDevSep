import React from 'react'
import childComponentSecond from './chilComponent1'

export default function childComponent({userdata}) {
    return (
        <div>
            <h1>Child Component1</h1>
            {console.log("Child1", userdata)}
            <childComponentSecond userdata={userdata} />
        </div>
    )
}
