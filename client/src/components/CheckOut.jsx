import styled from '@emotion/styled'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

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

const CheckOut = () => {
    const [open, setOpen] = React.useState(false)
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
        },
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = (data) => {
        console.log('HOLA')
    }

    return (
        <Box>
            <ButtonCheckOut variant="contained" onClick={handleClickOpen}>
                CHECKOUT NOW
            </ButtonCheckOut>
            <Dialog open={open} onClose={handleClose} fullWidth='md' maxWidth='md'>
                <DialogTitle sx={{ textAlign: 'center' }}>CheckOut</DialogTitle>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{ textAlign: 'center' }}>Address</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <InputAddress
                            autoFocus
                            margin="dense"
                            id="street"
                            label="Street"
                            type="street"
                            fullWidth
                            variant="standard"
                            {...register('street', {
                                required: 'This is required',
                                pattern: {
                                    message: 'Please enter a valid email',
                                },
                            })}
                            autoComplete="street"
                        />
                        <InputAddress
                            autoFocus
                            margin="dense"
                            id="number"
                            label="Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            {...register('number', {
                                required: 'This is required',
                                pattern: {
                                    message: 'Please enter a valid email',
                                },
                            })}
                            autoComplete="number"
                        />
                        <InputAddress
                            autoFocus
                            margin="dense"
                            id="number"
                            label="Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            {...register('number', {
                                required: 'This is required',
                                pattern: {
                                    message: 'Please enter a valid email',
                                },
                            })}
                            autoComplete="number"
                        />
                        <InputAddress
                            autoFocus
                            margin="dense"
                            id="number"
                            label="Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            {...register('number', {
                                required: 'This is required',
                                pattern: {
                                    message: 'Please enter a valid email',
                                },
                            })}
                            autoComplete="number"
                        />
                        <InputAddress
                            autoFocus
                            margin="dense"
                            id="number"
                            label="Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            {...register('number', {
                                required: 'This is required',
                                pattern: {
                                    message: 'Please enter a valid email',
                                },
                            })}
                            autoComplete="number"
                        />
                        <InputAddress
                            autoFocus
                            margin="dense"
                            id="number"
                            label="Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            {...register('number', {
                                required: 'This is required',
                                pattern: {
                                    message: 'Please enter a valid email',
                                },
                            })}
                            autoComplete="number"
                        />
                    </Box>
                    <Button type="submit">Subscribe</Button>
                </Box>
            </Dialog>
        </Box>
    )
}

export default CheckOut
