import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import InventorySharpIcon from '@mui/icons-material/InventorySharp'
import OrderCard from '../commons/OrderCard'

const Orders = () => {
    const user = useSelector((state) => state.user)
    if (!user.orders) {
        return (
            <div>
                <h1>ORDENES</h1>
                <InventorySharpIcon />
                <h4>Genere una orden para visualizarla aqui</h4>
            </div>
        )
    } else {
        return (
            <Box style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <Typography sx={{ margin: '20px', fontSize: '25px' }}>Ordenes</Typography>
                <Grid container spacing={1} justifyContent="center">
                    {user.orders.map((option) => {
                        return <OrderCard props={option} spacing={1} />
                    })}
                </Grid>
            </Box>
        )
    }
}

export default Orders
