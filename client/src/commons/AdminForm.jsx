import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { sendCreateProduct } from '../store/product'
import TableProduct from '../components/TableProduct'
import { Box, Grid, Slide } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import axios from 'axios'

export default function FormCreateProduct({ props }) {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [product, setProduct] = React.useState({})

    const dispatch = useDispatch()

    const createProduct = (e) => {
        setProduct(
            {
                ...product,
                [e.target.name]: e.target.value,
                [e.target.img]: e.target.value,
                [e.target.price]: e.target.value,
                [e.target.description]: e.target.value,
                [e.target.stock]: e.target.value,
                [e.target.category]: e.target.value,
            },
            {}
        )
    }
    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(sendCreateProduct({ ...product }))
            .then(() => handleClose())
            .catch((err) => err)
    }
    return (
        <Grid style={{ display: 'flex' }} container justifyContent="center">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleClickOpen}>
                    Agregar
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Crear Productos</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre del Producto"
                        type="name"
                        name="name"
                        fullWidth
                        variant="standard"
                        onChange={createProduct}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="img"
                        label="Url imagen"
                        type="url"
                        name="img"
                        fullWidth
                        variant="standard"
                        onChange={createProduct}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        name="description"
                        label="Descripcion"
                        type="url"
                        fullWidth
                        variant="standard"
                        onChange={createProduct}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        label="Precio"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={createProduct}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="stock"
                        name="stock"
                        label="Stock"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={createProduct}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        name="Categoria"
                        label="Categoria"
                        type="name"
                        fullWidth
                        variant="standard"
                        onChange={createProduct}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={handleCreate}>
                        Crear Producto
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export function EditProduct() {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const products = useSelector((state) => state.product)
    return (
        <Grid style={{ display: 'flex' }} container justifyContent="center">
            <Button variant="contained" onClick={handleClickOpen}>
                Editar
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Productos ({products?.length})
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <TableProduct />
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export function DeleteProduct() {
    const [product, setProduct] = React.useState([])
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    React.useEffect(() => {
        axios.get('/api/products/all').then(({ data }) => setProduct(data))
    }, [])

    const handleDelete = (e) => {
        const id = e.target.id
        axios
            .delete(`/api/products/delete/${id}`)
            .then(() => window.location.reload())
            .catch((err) => console.error(err))
    }

    return (
        <Grid style={{ display: 'flex' }} container justifyContent="center">
            <Button variant="contained" onClick={handleClickOpen}>
                Eliminar
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Eliminar Productos</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    {Array.isArray(product) ? (
                        product?.map((prod, i) => {
                            return (
                                <div>
                                    <Typography sx={{ margin: '5px' }}>{prod.name}</Typography>
                                    <Button
                                        variant="contained"
                                        autoFocus
                                        name={prod.name}
                                        id={prod._id}
                                        onClick={handleDelete}
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            )
                        })
                    ) : (
                        <div>no hay productos</div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export function UsersOptions() {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        axios.get('/api/users/all').then(({ data }) => setUsers(data))
    }, [])

    const handlePromove = (e) => {
        axios
            .put(`/api/users/toadmin/${e}`)
            .then(() => window.location.reload())
            .catch((err) => err)
    }

    const handleDelete = (e) => {
        axios
            .delete(`/api/users/delete/${e}`)
            .then(() => window.location.reload())
            .catch((err) => err)
    }

    return (
        <Grid style={{ display: 'flex' }} container justifyContent="center">
            <Button variant="contained" onClick={handleClickOpen}>
                Usuarios
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Usuarios : {users.length}</DialogTitle>
                <DialogContent>
                    {users.map((user, i) => {
                        return (
                            <div>
                                <Typography>Nombre de usuario : {user.username}</Typography>
                                {user.isAdmin ? (
                                    <Typography>Este usuario es Admin</Typography>
                                ) : (
                                    <Typography>Este usuario es Cliente</Typography>
                                )}
                                <Button
                                    variant="contained"
                                    key={i}
                                    autoFocus
                                    name={user.name}
                                    id={user._id}
                                    onClick={() => handlePromove(user._id)}
                                    sx={{ marginRight: '5px', marginBottom: '10px' }}
                                >
                                    {user.isAdmin ? <>Cambiar a cliente</> : <>Hacerlo Admin</>}
                                </Button>
                                <Button
                                    variant="contained"
                                    autoFocus
                                    name={user.name}
                                    id={user._id}
                                    onClick={() => handleDelete(user._id)}
                                    sx={{ marginBottom: '10px' }}
                                >
                                    Eliminar
                                </Button>
                            </div>
                        )
                    })}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}
export function ViewOrders() {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        axios.get('/api/orders/all').then(({ data }) => setOrders(data))
    }, [])

    return (
        <Grid style={{ display: 'flex' }} container justifyContent="center">
            <Button variant="contained" onClick={handleClickOpen}>
                Ordenes
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
                <DialogTitle>Usuarios : </DialogTitle>
                <DialogContent>
                    {orders.map((order, i) => {
                        return (
                            <Box sx={{ margin: '20px', border: '1px solid gray', borderRadius: '5px' }}>
                                <Box sx={{ padding: '10px' }}>
                                    <Typography>
                                        <Typography sx={{ fontWeight: '700' }}>Numero de Orden :</Typography>{' '}
                                        {order._id}
                                    </Typography>
                                    <Typography>
                                        <Typography sx={{ fontWeight: '700' }}>Id de Usuario:</Typography>{' '}
                                        {order.userId}
                                    </Typography>
                                    <Typography>
                                        <Typography sx={{ fontWeight: '700' }}>Productos:</Typography>{' '}
                                        {order.order?.map((product) => {
                                            return (
                                                <Typography>
                                                    {product.name} - Cantidad: {product.amount}
                                                </Typography>
                                            )
                                        })}
                                    </Typography>
                                    <Typography>
                                        <Typography sx={{ fontWeight: '700' }}>Total de la compra:</Typography> ${' '}
                                        {order.total}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}
