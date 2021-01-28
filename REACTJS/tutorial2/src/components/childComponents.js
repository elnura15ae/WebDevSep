import React, { Component } from 'react'

export default class childComponents extends Component {
    render() {
        return (
            <div>
                Hello {this.props.username}!
            </div>
        )
    }
}
