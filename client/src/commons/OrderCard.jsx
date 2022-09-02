import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { subtotal } from '../utils/utils'
import Dialog from '@mui/material/Dialog'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import ReviewRating from '../components/ReviewRating'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function OrderCard({ props }) {
    const user = useSelector((state) => state.user)
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card sx={{ minWidth: 275 }} style={{ margin: '30px' }}>
            <CardContent>
                <Typography>
                    <Typography sx={{ fontWeight: '700' }}>Su numero de orden:</Typography>
                    {props._id}
                </Typography>
                <Typography>
                    <Typography sx={{ fontWeight: '700' }}>Total de su orden:</Typography>
                    {`$ ${subtotal(props.order)}`}
                </Typography>
                <Typography>
                    {'Fecha: ' + props.createdAt.slice(0, 10) + ' Hora: ' + props.createdAt.slice(11, 20)}
                </Typography>
            </CardContent>
            <Button variant="contained" onClick={handleClickOpen}>
                Ver detalle
            </Button>
            <Dialog
                fullWidth={true}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                sx={{ padding: '10px' }}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Detalle
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <List>
                        {props.order.map((orden) => {
                            return (
                                <div>
                                    <Divider />
                                    <Typography sx={{ marginLeft: '10px' }}>{'Producto:' + orden.name}</Typography>
                                    <Divider />
                                    <Typography sx={{ marginLeft: '10px' }}>{'Precio: $' + orden.price}</Typography>
                                    <Divider />
                                    <Typography sx={{ marginLeft: '10px' }}>{'Cantidad: ' + orden.amount}</Typography>
                                    <Divider />
                                    <ReviewRating pid={orden._id} />
                                </div>
                            )
                        })}
                        <ListItem button>
                            <Typography>Total:${subtotal(props.order)}</Typography>
                        </ListItem>
                    </List>
                </div>
            </Dialog>
        </Card>
    )
}
export default OrderCard
