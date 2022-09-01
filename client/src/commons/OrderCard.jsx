import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormDialog from './AdminForm';
import { useSelector } from "react-redux";

function OrderCard({props}) {
    const user = useSelector(state=>state.user)

return (
    
    <Card sx={{ minWidth: 275 }} style={{margin:"10px" }}>
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {"Fecha= "+props.createdAt.slice(0,10)+" Hora= "+props.createdAt.slice(11,20)}
    </Typography>
    <Typography variant="h5" component="div">
    
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
    
    </Typography>
    <Typography variant="body2">
    {"Su numero de orden= "+props._id}
    </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ver detalle</Button>
    </CardActions>
    </Card>)
}
export default OrderCard