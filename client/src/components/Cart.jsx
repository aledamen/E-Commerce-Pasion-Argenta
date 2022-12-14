import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, sendMe } from '../store/user'
import { Alert, Snackbar } from '@mui/material'
import { useState } from 'react'
import { saveToLocalStorage, subtotal } from '../utils/utils'
import CheckOut from './CheckOut'

const Top = styled(Box)(({ theme }) => ({
    fontWeight: '300',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
}))

const TopButton = styled(Button)(({ theme }) => ({
    padding: '10px',
    fontWeight: '600',
    cursor: 'pointer',
}))

const TopText = styled('span')(({ theme }) => ({
    //span
    textDecoration: 'underline',
    cursor: 'pointer',
    margin: '0px 10px',
}))

const Bottom = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
}))

const Details = styled(Box)(({ theme }) => ({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}))

const PriceDetail = styled(Box)(({ theme }) => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

const ProductAmountContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
}))

const Summary = styled(Box)(({ theme }) => ({
    flex: '1',
    border: '0.5px solid lightgray',
    borderRadius: '10px',
    padding: '20px',
    height: '50vh',
}))

const SummaryItem = styled(Box)(({ theme }) => ({
    margin: '40px 0px',
    display: 'flex',
    justifyContent: 'space-between',
}))

const ButtonCheckOut = styled(Button)(({ theme }) => ({
    width: '100%',
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontWeight: '600',
}))

const Cart = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const cart = user.cart
    const favorites = user.favorites
    const [open, setOpen] = useState(false)
    const cartNoLogued = JSON.parse(localStorage.getItem('cart'))
    const cartToMap = user.cart || cartNoLogued

    const handleAddProductCart = (id, amount, product) => {
        if (cart) {
            dispatch(addToCart({ pid: id, amount: 1 }))
        } else {
            saveToLocalStorage(product, 'add')
            window.location.reload()
        }
    }

    const handleReduceProductCart = (id, amount, product) => {
        if (cart) {
            if (amount === 1) {
                return setOpen(true)
            }
            dispatch(addToCart({ pid: id, amount: -1 }))
        } else {
            if (amount === 1) {
                return setOpen(true)
            }
            saveToLocalStorage(product, 'reduce')
            window.location.reload()
        }
    }

    const handleRemoveProductCart = (id, product) => {
        if (cart) {
            dispatch(removeFromCart({ pid: id }))
        } else {
            saveToLocalStorage(product, 'remove')
            window.location.reload()
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography sx={{ fontWeight: '300', textAlign: 'center', fontSize: '30px' }}>Carrito</Typography>
            <Top>
                <TopButton onClick={() => navigate('/')}>
                    <ButtonCheckOut variant="contained">Continuar con la Compra</ButtonCheckOut>
                </TopButton>
                <Box>
                    <TopText>Carrito de Compras({cartToMap?.length})</TopText>
                    <TopText>Mis Favoritos({favorites ? favorites.length : 0})</TopText>
                </Box>
                <TopButton type="filled">
                    <CheckOut total={subtotal(cartToMap)} />
                </TopButton>
            </Top>
            <Bottom sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ width: '70%' }}>
                    {cartToMap?.map((product, i) => {
                        return (
                            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
                                <Box sx={{ flex: '2', display: 'flex' }}>
                                    <img src={product.img} style={{ width: '150px' }} />
                                    <Details>
                                        <Box sx={{ fontSize: '15px' }}>
                                            <b>Productos:</b> {product.name}
                                        </Box>
                                        <Box>
                                            <Button
                                                variant="contained"
                                                sx={{ margin: '5px' }}
                                                onClick={() => handleRemoveProductCart(product._id, product)}
                                            >
                                                Eliminar
                                            </Button>
                                        </Box>
                                    </Details>
                                </Box>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <RemoveIcon
                                            onClick={() =>
                                                handleReduceProductCart(product._id, product.amount, product)
                                            }
                                            sx={{ cursor: 'pointer' }}
                                        />
                                        <Box sx={{ fontSize: '24px', margin: '5px' }}>{product.amount}</Box>
                                        <AddIcon
                                            onClick={() => handleAddProductCart(product._id, product.amount, product)}
                                            sx={{ cursor: 'pointer' }}
                                        />
                                    </ProductAmountContainer>
                                    <Box sx={{ fontSize: '20px' }}>$ {product.price}</Box>
                                </PriceDetail>
                            </Box>
                        )
                    })}
                </Box>
                <Summary>
                    <Typography sx={{ fontSize: '20px' }}>Resumen de la Orden</Typography>
                    <SummaryItem>
                        <span>Subtotal</span>
                        <span>$ {subtotal(cartToMap)}</span>
                    </SummaryItem>
                    <SummaryItem>
                        <span>Valor del envio</span>
                        <span>$ 0</span>
                    </SummaryItem>
                    <SummaryItem style={{ fontWeight: 500, fontSize: '24px' }}>
                        <span>Total</span>
                        <span>$ {subtotal(cartToMap)}</span>
                    </SummaryItem>
                    <CheckOut total={subtotal(cartToMap)} />
                </Summary>
            </Bottom>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity="warning">Podes comprar 1un minimo, si queres removerlo hace click en eliminar</Alert>
            </Snackbar>
        </Box>
    )
}

export default Cart
