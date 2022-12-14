import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFavorites, removeFromFavorites, sendMe } from '../store/user'
import { Alert, Snackbar } from '@mui/material'
import { saveToLocalStorage } from '../utils/utils'

export const ProductsCards = ({ props }) => {
    const user = useSelector((state) => state.user)
    const [openAddCart, setOpenAddCart] = useState(false)
    const [openAddFavorites, setOpenAddFavorites] = useState(false)
    const [openRemoveFavorites, setOpenRemoveFavorites] = useState(false)
    const dispatch = useDispatch()

    const handleAddCart = () => {
        setOpenAddCart(true)
        if (user.username) dispatch(addToCart({ pid: props._id, amount: 1 }))
        else saveToLocalStorage(props)
    }
    const handleAddFavorites = () => {
        setOpenAddFavorites(true)
        user.username && dispatch(addToFavorites(props))
    }
    const handleRemoveFavorites = () => {
        setOpenRemoveFavorites(true)
        user.username && dispatch(removeFromFavorites(props))
    }
    const handleCloseAlert = () => {
        setOpenAddCart(false)
        setOpenAddFavorites(false)
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Link to={`/products/${props._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img variant="top" src={props.img} style={{ width: '286px', height: '275px' }} />
                </Link>
                <Card.Body>
                    <Card.Title
                        style={{
                            width: '250px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {props.name}
                    </Card.Title>

                    <div className="d-flex flex-row-reverse">
                        <h5 style={{ color: 'black' }}>
                            {' '}
                            <span style={{ marginRight: '20px' }}>${props.price}</span>
                            <span>
                                <IconButton onClick={handleAddCart} color="default" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon fontSize="medium" />
                                </IconButton>
                                <IconButton
                                    onClick={handleAddFavorites}
                                    color="default"
                                    aria-label="add to shopping cart"
                                >
                                    <FavoriteIcon fontSize="medium" />
                                </IconButton>
                                <IconButton
                                    onClick={handleRemoveFavorites}
                                    color="default"
                                    aria-label="add to shopping cart"
                                >
                                    <DeleteIcon fontSize="medium" />
                                </IconButton>
                            </span>
                        </h5>
                    </div>
                </Card.Body>
                <Snackbar open={openAddCart} autoHideDuration={3000} onClose={handleCloseAlert}>
                    <Alert severity="success">Product added to Cart</Alert>
                </Snackbar>
                <Snackbar open={openAddFavorites} autoHideDuration={3000} onClose={handleCloseAlert}>
                    <Alert severity="success">Product added to Favorites</Alert>
                </Snackbar>
                <Snackbar open={openRemoveFavorites} autoHideDuration={3000} onClose={handleCloseAlert}>
                    <Alert severity="success">Product removed from Favorites</Alert>
                </Snackbar>
            </Card>
        </>
    )
}
