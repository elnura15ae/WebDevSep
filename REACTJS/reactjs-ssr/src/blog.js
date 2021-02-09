import React, {useContext} from 'react'
import React,{userContext} from 'react'
import {UseContext} from './context/UserContext'

export default function Blog() {
    const context =useContext(UserContext)
    return (
        <div>
            <h1>{console.log(context)}</h1>
        </div>
    )
}
