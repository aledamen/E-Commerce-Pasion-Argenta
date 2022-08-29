import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
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
            {'.'}
        </Typography>
    )
}
export default function LogIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const onSubmit = (data) => {
        dispatch(LogInRequest(data)).then((res)=> res.payload ? navigate('/') : setOpen(true))
    }
    const handleClose = () => {
        setOpen(false);
      };

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
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            {...register("email", {required:'This is required', pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            }})}
                            autoComplete="email"
                            autoFocus
                        />
                        {errors.email?.message }
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            {...register("password", {
                                required: 'This is required', minLength:{value:4, message:'Min lenght is 4'}})}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <p>{errors.password?.message }</p>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Log In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error">Please enter a valid email or password</Alert>
        </Snackbar>
            </Container>
    )
}
