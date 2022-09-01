import styled from '@emotion/styled'
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PaymentMethods from '../assets/PaymentMethods.png'
import CreditCard from '../assets/Credit-Card.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { checkOut } from '../store/user'
import { setDataCheckout } from '../store/checkout'

const ButtonCheckOut = styled(Button)(({ theme }) => ({
    width: '100%',
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
    border: '1px solid black',
    color: 'white',
    fontWeight: '600',
}))

const InputAddress = styled(TextField)(({ theme }) => ({
    width: '50%',
    margin: '10px',
}))

const InputPayment = styled(TextField)(({ theme }) => ({
    width: '80%',
    margin: '10px',
}))

const CheckOut = ({total}) => {
    const [open, setOpen] = useState(false)
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            street: '',
            number: '',
            city: '',
            province: '',
            zip: '',
            country: '',
            cardnumber: '',
            expiredate: '',
            cvc: '',
        },
    })

    const handleClickOpen = () => {
        user.username || navigate('/login')
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = (data) => {
        setOpen(false)
        user.cart[0] && dispatch(checkOut({total:total})).then(()=>dispatch(setDataCheckout(data))).then(()=>navigate('/checkoutmessagge'))  
    }

    return (
        <Box>
            <ButtonCheckOut variant="contained" onClick={handleClickOpen}>
                CHECKOUT NOW
            </ButtonCheckOut>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
                <DialogTitle sx={{ textAlign: 'center', marginTop: '10px' }}>CheckOut</DialogTitle>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: '20px' }}>
                    <Typography sx={{ textAlign: 'center', margin: '30px' }}>Shipping Address</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <InputAddress
                                autoFocus
                                required
                                margin="dense"
                                id="street"
                                label="Street"
                                type="street"
                                
                                variant="standard"
                                {...register('street', {
                                    required: 'This is required',
                                })}
                                autoComplete="street"
                            />
                            <InputAddress
                                autoFocus
                                required
                                margin="dense"
                                id="number"
                                label="Number"
                                type="number"
                               
                                variant="standard"
                                {...register('number', {
                                    required: 'This is required',
                                })}
                                autoComplete="number"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <InputAddress
                                autoFocus
                                required
                                margin="dense"
                                id="city"
                                label="City"
                                type="city"
                                
                                variant="standard"
                                {...register('city', {
                                    required: 'This is required',
                                })}
                                autoComplete="city"
                            />
                            <InputAddress
                                autoFocus
                                required
                                margin="dense"
                                id="province"
                                label="Province"
                                type="province"
                              
                                variant="standard"
                                {...register('province', {
                                    required: 'This is required',
                                })}
                                autoComplete="province"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <InputAddress
                                autoFocus
                                required
                                margin="dense"
                                id="zip"
                                label="Zip"
                                type="zip"
                             
                                variant="standard"
                                {...register('zip', {
                                    required: 'This is required',
                                })}
                                autoComplete="zip"
                            />
                            <InputAddress
                                autoFocus
                                required
                                margin="dense"
                                id="country"
                                label="Country"
                                type="country"
                              
                                variant="standard"
                                {...register('country', {
                                    required: 'This is required',
                                })}
                                autoComplete="country"
                            />
                        </Box>
                    </Box>
                    <Typography sx={{ textAlign: 'center', margin: '30px' }}>Payment Method</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box>
                            <img src={PaymentMethods} alt="" style={{ width: '300px', marginBottom: '30px' }} />
                        </Box>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <InputPayment
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="cardnumber"
                                    label="Card Number"
                                    type="cardnumber"
                                  
                                    variant="standard"
                                    {...register('cardnumber', {
                                        required: 'This is required', minLength:{value:16, message:'Min lenght is 16'}
                                    })}
                                    autoComplete="cardnumber"
                                />
                                <p style={{margin:'0px', paddingLeft:'10px'}}>{errors.cardnumber?.message }</p>
                                <InputPayment
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="expiredate"
                                    label="Expire Date"
                                    type="expiredate"
                                
                                    variant="standard"
                                    {...register('expiredate', {
                                        required: 'This is required',
                                    })}
                                    autoComplete="expiredate"
                                />
                                <p style={{margin:'0px', paddingLeft:'10px'}}>{errors.expiredate?.message }</p>
                                <InputPayment
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="cvc"
                                    label="CVC"
                                    type="cvc"
                                 
                                    variant="standard"
                                    {...register('cvc', {
                                        required: 'This is required',
                                    })}
                                    autoComplete="cvc"
                                />
                                <p style={{margin:'0px', paddingLeft:'10px'}}>{errors.cvc?.message }</p>
                                </Box>
                                <Box>
                                    <img src={CreditCard} alt="" style={{width:'300px'}}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" type="submit">
                            CHECKOUT
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    )
}

export default CheckOut
