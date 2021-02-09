import React from 'react'
import {UserContext} from './context/UserContext'

export default function users() {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>Users</h1>
            <h1>{context}</h1>
        </div>
    )
}