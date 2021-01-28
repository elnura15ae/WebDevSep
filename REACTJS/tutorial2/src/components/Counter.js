import React, { Component } from 'react'
import{Container, Row, Col, Button} from 'reactstrap'
export default class Counter extends Component {
   constructor(props){
       super(props)
       this.state={
           count:0
       },
       this.Increase= this.Increase.bind(this)
   }

   Increase(){
       console.log('Increase Function and non-arrow-func')
        this.setState({
            count:5
        })
    }
   
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h1>{this.props.projectname}</h1>
                        <p className="lead font-weight-bold text-danger">Count:0</p>
                        <hr/>
                        <Button className="mr-1" onClick={this.Increase} color="danger">+</Button>
                        <Button color="dark">-</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
