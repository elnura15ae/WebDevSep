import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city &&
                <div>
                 <p>Location:{this.props.city}, {this.props.country}</p>
                 <p>Temperature:{this.props.temp}</p>
                 <p>Sunrise:{this.props.sunrise}</p>
                 <p>Sunset:{this.props.sunset}</p>
                </div>
                }
            </div>
        )
    }
}
