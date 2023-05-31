import React, { Children } from 'react'
import {Container,Row,Col} from "react-bootstrap"

const FormCompo = ({children}) => {
  return (
    <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={9}>
                {children}
            </Col>

        </Row>
    </Container>
  )
}

export default FormCompo
