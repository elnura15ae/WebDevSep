import React, {useContext} from 'react'
import {UserContext} from './context/UserContext'

export default function Users() {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>Users</h1>
            <h1>{console.log(context)}</h1>
        </div>
    )
}
