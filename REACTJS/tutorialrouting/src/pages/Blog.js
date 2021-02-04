import React, { useState } from 'react'
import {Link, Route} from 'react-router-dom'
import ArticlDetails from './ArticlDetails'


export default function Blog({data}) {

    const [state, setState] = useState({
        //init state
        post:{}
    })
    
    const fetchSingle= async (id)=>{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let data= await res.json();
        console.log(data)
        setState({
            post:data
        })
    }



    return (
        <div>
            <h1>Blogpage</h1>
            {/* {console.log(data)} */}
            {
                data.map((item,i)=>{
                    return (
                        <Link onClick={()=>fetchSingle(item.id)} key={i} to={`/blog/${item.id}`} style={{'display':'block'}}>{item.title}</Link>
                    )
                })
            }
            <Route path='/blog/:id' render={()=><ArticlDetails single={state.post} />}/>
        </div>
    )
}
