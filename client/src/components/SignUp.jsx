import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { signUpRequest } from '../store/user'
import { useNavigate } from 'react-router'
import { Alert, Snackbar } from '@mui/material'
import { useState } from 'react'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                PasionArgenta
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    })
    const onSubmit = (data) => {
        dispatch(signUpRequest(data)).then((res) => (res.payload ? navigate('/') : setOpen(true)))
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#2196f3' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrarse
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    {...register('username', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 4, message: 'Min length is 4' },
                                    })}
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Nombre de Usuario"
                                    autoFocus
                                />
                                {errors.username?.message}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    {...register('email', {
                                        required: 'Este campo es requerido',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Por favor ingresá un correo válido',
                                        },
                                    })}
                                    autoComplete="email"
                                />
                                {errors.email?.message}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    {...register('password', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 4, message: 'Min length is 4' },
                                    })}
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                                {errors.password?.message}
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Registrarse
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Ya tenes una cuenta? Inicia sesión
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="error">Los datos ya existen</Alert>
                </Snackbar>
            </Container>
        </>
    )
}
