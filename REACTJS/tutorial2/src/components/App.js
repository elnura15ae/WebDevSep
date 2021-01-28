import React, { Component } from 'react'
import childComponents from './childComponents'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'Arne',
            password:'1234',
            age:12,
            scores:[1, 2, 3, 4],
            nestedObj:{
                test:[1,2]
            },
            myFunction:()=>console.log('test')
        }
    }
    render() {
        return (
            <div>
                {console.log(this.props.data)}
                <childComponents username="Adnan" />
                {console.log(this.state)}
                {this.state.myFunction()}
            </div>
        )
    }
}
 