import React from 'react'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import icon from '../Images/icon.jpg'

export default function Title() {
    return (

            <div   class = "page-header text-center bg-dark" style={{color:"white"}}> 
            <br></br>
            <Row>
                <Col sm={4}>
                <Image src={icon} width="100px" height="100px" rounded="true" />
                </Col>
                <Col sm={5}>

                    <h1 style={{fontSize:"51px",font:"messageBox"}}> Pest Prediction Model
                    </ h1>
                </Col> 

            </Row>
            <br></br>
            </ div> 
    )
}
