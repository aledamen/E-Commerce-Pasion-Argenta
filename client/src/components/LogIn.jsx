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
import { LogInRequest } from '../store/user'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            PasionArgenta
            {new Date().getFullYear()}
        </Typography>
    )
}
export default function LogIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = (data) => {
        dispatch(LogInRequest(data)).then((res) => (res.payload ? navigate('/') : setOpen(true)))
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
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
                    Iniciar Sesion
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
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
                        autoFocus
                    />
                    {errors.email?.message}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        {...register('password', {
                            required: 'Este campo es requerido',
                            minLength: { value: 4, message: 'Min lenght is 4' },
                        })}
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <p>{errors.password?.message}</p>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Ingresar
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {'No tenés una contraseña? Registrate'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="error">Por favor ingresá un mail o contraseña válida</Alert>
            </Snackbar>
        </Container>
    )
}
