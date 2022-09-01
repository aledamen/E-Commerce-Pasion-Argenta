import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import FormCreateProduct, { DeleteProduct, EditProduct } from './AdminForm';


function ProfileCard({props}) {
    const user = useSelector(state=>state.user)

if(user.isAdmin) {
  if(props.title==="Crear Productos")return (
    
    <Card sx={{ minWidth: 275 }} style={{margin:"10px",textAlign: "center" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18}} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
         <FormCreateProduct props={props}/>
      </CardActions>
    </Card>
  )
  if(props.title==="Editar Productos")return (
    
    <Card sx={{ minWidth: 275 }} style={{margin:"10px",textAlign: "center" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18}} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
         <EditProduct />
      </CardActions>
    </Card>
  )
  if(props.title==="Eliminar Productos")return (
    <div>
 <Card sx={{ minWidth: 275 }} style={{margin:"10px",textAlign: "center" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18}} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
         <DeleteProduct />
      </CardActions>
    </Card>
    </div>
  )
  } else { return (<Card sx={{ minWidth: 275 }} style={{margin:"10px" }}>
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {props.title}
    </Typography>
    <Typography variant="h5" component="div">

    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">

    </Typography>
    <Typography variant="body2">
    {props.description}
    </Typography>
  </CardContent>
  <CardActions>
  <Link to={props.buttom==="cart"?"/cart":"/favorites"}>
    <Button size="small">{props.buttom}</Button>
    </Link>
  </CardActions>
</Card>
)
}
}
 export default ProfileCard