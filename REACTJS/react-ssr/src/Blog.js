import React, {useContext} from 'react'
import {UserContext} from './context/UserContext'

export default function Blog() {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>Blog</h1>
            <h1>{console.log(context)}</h1>
        </div>
    )
}
