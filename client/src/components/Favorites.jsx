import { Typography } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ProductsCards } from '../commons/ProductsCard'

const Favorites = () => {
    const user = useSelector((state) => state.user)
  return (
    <div>
            {user.favorites ? (
                <Container style={{ marginTop: '20px' }}>
                    <Row>
                        {user.favorites?.map((product, index) => (
                            <Col style={{ marginBottom: '20px' }} key={`product-${index}`}>
                                <ProductsCards key={index} props={product} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography>YOU DONT HAVE FAVORITES ADDED</Typography>
                </div>
            )}
        </div>
  )
}

export default Favorites