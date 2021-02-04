import React, {useState} from 'react'
import {useParams} from 'react-router-dom'




export default function ArticlDetails() {
    let {id} = useParams()
    return (
        <div>
          <h1>Article detail page</h1> 
          <h2>Article ID is {id}</h2> 
        </div>
    )
}
