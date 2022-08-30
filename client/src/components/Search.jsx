import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { ProductsCards } from '../commons/ProductsCard'

const Search = () => {
    const param = useParams.search
    const [search, setSearch] = useState([])

    useEffect(() => {
        axios
            .get(`/api/products/search/${param}`)
            .then((res) => res.data)
            .then((data) => setSearch(data))
    }, [param])

    
    return (
        <div>
            {param ? (
                <Container style={{ marginTop: '20px' }}>
                    <Row>
                        {search?.map((product, index) => (
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
                    <Typography>SEARCH NOT FOUND</Typography>
                </div>
            )}
        </div>
    )
}

export default Search
