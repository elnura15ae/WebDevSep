import React from 'react'

export default function Blog() {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>{console.log(context)}</h1>
        </div>
    )
}
