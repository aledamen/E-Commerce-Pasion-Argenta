import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DialogActions from "@mui/material/DialogActions";
import FormDialog from './AdminForm';
import { useSelector } from "react-redux";
import { subtotal } from '../utils/utils';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { lightBlue } from '@mui/material/colors';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderCard({props}) {
    const user = useSelector(state=>state.user)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

return (
    
    <Card sx={{ minWidth: 275 }} style={{margin:"10px" }} 
    > 
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {"Fecha= "+props.createdAt.slice(0,10)+" Hora= "+props.createdAt.slice(11,20)}
    </Typography>
    <Typography variant="h5" component="div">
    
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
    
    </Typography>
    <Typography variant="body1" >
    {"Su numero de orden= "+props._id}
    </Typography>
    <Typography variant="body3" color="text.secondary">
    {"Total de su orden= $"+ subtotal(props.order)}
    </Typography>
    </CardContent>
    <Button variant="outlined" onClick={handleClickOpen}>
        Ver detalle
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Detalle
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Cerrar
            </Button>
          </Toolbar>
        </AppBar >
        <div >
        <List>{props.order.map((orden) => {
                  return( 
                    <div>
                      <Divider />
                  <h5>{"Producto= "+orden.name}</h5>
                  <Divider />
                  <h5>{"Precio= $"+orden.price}</h5>
                  <Divider />
                  <h5>{"Cantidad= "+orden.amount}</h5>
                  <Divider />
                  </div>
                )})}
          <ListItem button>
            Total= ${subtotal(props.order)}
          </ListItem>
        </List>
        </div>
      </Dialog>
    </Card>)
}
export default OrderCard