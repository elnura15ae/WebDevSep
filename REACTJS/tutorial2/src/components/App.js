import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {console.log(this.props.data)}
            </div>
        )
    }
}
 