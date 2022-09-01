import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { sendCreateProduct, sendEditProduct } from "../store/product";
import TableProduct from "../components/TableProduct";
import { Alert, alertClasses, Box, Grid, Slide } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


export default function FormCreateProduct({ props }) {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = ()=>setOpen(true)
  const handleClose = ()=>setOpen(false)
  const [product, setProduct] = React.useState({});
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
        [e.target.category]: e.target.value
      },
      {}
    );
  };
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(sendCreateProduct({...product}))
      .then(() => alert("producto creado"))
      .catch((err) => alert("no se pudo crear el producto",err));
  };
  return (
    <Grid style={{ display: "flex"}} container justifyContent="center">
      <Box sx={{display:"flex",justifyContent: "center"}}>
              <Button variant="contained" onClick={handleClickOpen}>
        Crear Producto
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Productos</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Nombre del Producto"  type="name" name="name" fullWidth  variant="standard" onChange={createProduct}/>
          <TextField autoFocus margin="dense" id="img" label="Url imagen"  type="url" name="img" fullWidth  variant="standard" onChange={createProduct}/>
          <TextField autoFocus margin="dense" id="description" name="description" label="Descripcion"  type="url"  fullWidth  variant="standard" onChange={createProduct}/>
          <TextField autoFocus margin="dense" id="price" name="price" label="Precio" type="number"  fullWidth  variant="standard" onChange={createProduct}/>
          <TextField autoFocus margin="dense" id="stock" name="stock" label="Stock"  type="number"  fullWidth  variant="standard" onChange={createProduct}/>
          <TextField autoFocus margin="dense" id="category" name="Categoria" label="Category"  type="name"  fullWidth  variant="standard" onChange={createProduct}/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleCreate}>Crear Producto</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function EditProduct (){
const {user,product} = useSelector(state=>state)
const [open, setOpen] = React.useState(false)
const handleClickOpen = ()=>setOpen(true)
const handleClose = ()=>setOpen(false)

  return (
    <Grid style={{ display: "flex"}} container justifyContent="center">
      <Button variant="contained" onClick={handleClickOpen}>
        Edit
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
             Products
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
     <DialogContent>
     <TableProduct />

      </DialogContent>
      </Dialog>
    </Grid>
  );
}

export function DeleteProduct(){
  const dispatch = useDispatch()
  const {user,product} = useSelector(state=>state)
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = ()=>setOpen(true)
  const handleClose = ()=>setOpen(false)

  const handleDelete = (e)=>{
    const id =e.target.id;
    axios.delete(`/products/delete/${id}`)
    .then(()=>alert(`Producto ELiminado : ${e.target.name.slice(0,8)}`))
    .catch(err=>console.log(err))
  }

  return (
    <Grid style={{ display: "flex"}} container justifyContent="center">
      <Button variant="contained" onClick={handleClickOpen}>
        Eliminar
      </Button>
      
              <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Eliminar Productos</DialogTitle>
              <DialogContent sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                {Array.isArray(product) ? (product?.map((prod,i)=>{
                return <div>
                  <Typography sx={{margin:"5px"}}>{prod.name}</Typography> 
                  <Button
                  variant="contained"  
                autoFocus 
                name={prod.name}
                id={prod._id} 
                onClick={handleDelete}
                >Eliminar</Button>
                  </div>
                })) : (
                  <div>no hay productos</div>
                )}
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
      
    </Grid>
  )
}
