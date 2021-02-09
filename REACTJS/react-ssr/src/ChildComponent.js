import React from 'react'
import ChildComponentSecond from './ChildComponentSecond'

export default function ChildComponent({userdata}) {
    return (
        <div>
            <h1>Child Component 1</h1>
            {console.log("child1", userdata)}
            <ChildComponentSecond userdata={userdata} />            
        </div>
    )
}
