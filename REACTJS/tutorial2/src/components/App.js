import React, { Component } from 'react'
import {Input} from 'reactstrap'
import Counter from './Counter'
//import ChildComponents from './childComponents'


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

    contactFormValues={
        p:p
    }

    TestFunction= () =>{
        console.log('hello world')
        this.setState({
            username:'Oguz',
            age:this.state.age+1
        })
        console.log(this.state.username)
    }

    inputHandler=(e)=>{
        //console.log(e.target.value)
        this.setState({

        })
    }

    render() {
        return (
            <div>
                {/* {console.log(this.props.data)}
                <ChildComponents username="Adnan" />
                {console.log(this.state)}
                {this.state.myFunction()}
                <a href="#" onClick={this.TestFunction} >Click me</a> */}
                <Counter projectname="counter project"/>
                <hr/>
                <Input type="text" classname="bg-primary text-white" onChange={this.inputHandler}/>
                <p className="lead">
                    {this.state.comment}
                </p>
            </div>
        )
    }
}
 