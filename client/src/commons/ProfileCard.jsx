import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import FormCreateProduct, { DeleteProduct, EditProduct, UsersOptions, ViewOrders } from './AdminForm'

function ProfileCard({ props }) {
    const user = useSelector((state) => state.user)

    if (user.isAdmin) {
        if (props.title === 'Crear Productos')
            return (
                <Card sx={{ minWidth: 275 }} style={{ margin: '10px', textAlign: 'center', justifyContent: 'center' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            {props.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <FormCreateProduct props={props} />
                    </CardActions>
                </Card>
            )
        if (props.title === 'Editar Productos')
            return (
                <Card sx={{ minWidth: 275 }} style={{ margin: '10px', textAlign: 'center' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            {props.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <EditProduct />
                    </CardActions>
                </Card>
            )
        if (props.title === 'Eliminar Productos')
            return (
                <div>
                    <Card sx={{ minWidth: 275 }} style={{ margin: '10px', textAlign: 'center' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                {props.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <DeleteProduct />
                        </CardActions>
                    </Card>
                </div>
            )
        if (props.title === 'Opciones de Usuarios')
            return (
                <div>
                    <Card sx={{ minWidth: 275 }} style={{ margin: '10px', textAlign: 'center' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                {props.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <UsersOptions />
                        </CardActions>
                    </Card>
                </div>
            )
        if (props.title === 'Ver Ordenes')
            return (
                <div>
                    <Card sx={{ minWidth: 275 }} style={{ margin: '10px', textAlign: 'center' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                {props.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ViewOrders />
                        </CardActions>
                    </Card>
                </div>
            )
    } else {
        return (
            <Card sx={{ minWidth: 275 }} style={{ margin: '10px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                    <Typography>{props.description}</Typography>
                </CardContent>
                <CardActions>
                    <Grid style={{ display: 'flex' }} container justifyContent="center">
                        <Link
                            style={{ textDecoration: 'inherit' }}
                            to={
                                props.buttom === 'orders' ? '/orders' : props.buttom === 'cart' ? '/cart' : '/favorites'
                            }
                        >
                            <Button variant="contained">{props.name}</Button>
                        </Link>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
}
export default ProfileCard
