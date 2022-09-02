import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { ProductsCards } from '../commons/ProductsCard'

const Search = () => {
    const param = useParams().search
    const [search, setSearch] = useState([])

    useEffect(() => {
        axios
            .get(`/api/products/search/${param}`)
            .then((res) => res.data)
            .then((data) => setSearch(data))
    }, [param])

    return (
        <div>
            <Typography sx={{ padding: '20px', fontWeight: '300', textAlign: 'center', fontSize: '30px' }}>
                Busqueda
            </Typography>
            {param ? (
                <Container>
                    <Row>
                        {search?.map((product, index) => (
                            <Col
                                style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
                                key={`product-${index}`}
                            >
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
