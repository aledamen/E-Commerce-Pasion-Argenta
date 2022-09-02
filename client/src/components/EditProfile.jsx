import * as React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

export function EditProfile() {
    const [open, setOpen] = useState(false)
    const { user } = useSelector((state) => state)
    const [userName, setUserName] = useState(user.username)
    const [email, setEmail] = useState(user.email)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const userNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleSend = () => {
        axios
            .put('/api/users/modify', { id: user._id, mod: { username: userName, email: email } })
            .then((res) => console.log(res))
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{ margin: '20px' }}>
                Edita tus datos personales
            </Button>
            <Dialog open={open} onClose={handleSend} maxWidth="md" fullWidth={true}>
                <DialogTitle>Mi perfil</DialogTitle>
                <DialogContent>
                    <Typography>Nombre de usuario</Typography>
                    <TextField
                        onChange={userNameChange}
                        label={user.username}
                        defaultValue={user.username}
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <Typography>Email</Typography>
                    <TextField
                        onChange={emailChange}
                        autoFocus
                        margin="dense"
                        id="name"
                        label={user.email}
                        defaultValue={user.email}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" onClick={() => setOpen(false)}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleSend}>
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
