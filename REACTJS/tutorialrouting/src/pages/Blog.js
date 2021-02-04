import React from 'react'
import {Link} from 'react-router-dom'
import ArticlDetails from './ArticlDetails'
import {useParams} from 'react-router-dom'



export default function Blog({data}) {
    return (
        <div>
            <h1>Blogpage</h1>
            {console.log(data)}
            {
                data.map((l,i)=>{
                    return (
                        <Link key={i} to={`/blog/${link.id}`} style={{'display':'block'}}>{l.title}</Link>
                    )
                })
            }
            <Route path='/blog/:id' render={()=>{ArticlDetails}}/>
        </div>
    )
}
