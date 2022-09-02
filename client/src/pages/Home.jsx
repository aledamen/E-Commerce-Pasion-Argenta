import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousels from '../components/Carousels'
import Grid from '../components/Grid'
import { addToCart } from '../store/user'

export const Home = () => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart'))
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (user.username) {
            localStorageCart &&
                localStorageCart.map((product) => {
                    dispatch(addToCart({ pid: product._id, amount: product.amount }))
                })
            localStorage.clear()
        }
    }, [])

    return (
        <>
            <Carousels />
            <br />
            <Grid />
        </>
    )
}
