import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { ProductsCards } from './ProductsCard';




export const HorizontalScroll = ({props}) => {

    
  return (
        <Container bsPrefix="container-fluid overflow-auto">
            <Row bsPrefix="row flex-nowrap">
            {props.map((product,index) => (
                
          <Col key={`product-${index}`} >
            <ProductsCards key={index} props = {product} />
            </Col>
        ))}
      </Row>
      </Container>
  )
}
