import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {setProduct } from "../store/product";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";


export default function TableProduct() {
  const { product } = useSelector((state) => state);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState({});

  React.useEffect(() => {
    axios.get("/api/products/all")
      .then((res) => res.data)
      .then((data) => dispatch(setProduct(data)));
  }, []);

  const handleChangeEdit = (e) => {
    e.preventDefault();
    setEdit(
      {
        ...edit,
        [e.target.name]: e.target.value,
        [e.target.img]: e.target.value,
        [e.target.price]: e.target.value,
        [e.target.description]: e.target.value,
        [e.target.stock]: e.target.value,
        [e.target.category]: e.target.value,
      },
      {}
    );
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    axios.put(`/api/products/modify`,{ id: e.target.id, mod: { ...edit } })
    .then(({data})=>data)
    .catch(err=>err)
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cantidad : {product.length} Productos
            <br/>
                Nombre</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Imagen</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(product) ? (
            product.map((prod,i) => (
              <TableRow
                key={prod._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {`${i+1} - ${prod.name.slice(0, 18)} ...`}
                  <TextField
                    type="text"
                    name="name"
                    id="name"
                    component="th"
                    onChange={handleChangeEdit}
                    scope="row"
                    placeholder={prod.name}
                  />
                </TableCell>

                <TableCell>
                  {" "}
                  <TextField
                    type="text"
                    name="description"
                    id="description"
                    align="right"
                    onChange={handleChangeEdit}
                    placeholder={prod.description}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type="url"
                    name="img"
                    id="img"
                    align="right"
                    onChange={handleChangeEdit}
                    placeholder={prod.img}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type="number"
                    name="price"
                    id="price"
                    align="right"
                    onChange={handleChangeEdit}
                    placeholder={prod.price}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    type="number"
                    align="right"
                    name="stock"
                    id="stock"
                    onChange={handleChangeEdit}
                    placeholder={prod.stock}
                  />
                </TableCell>

                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="category"
                    value="category"
                    onChange={handleChangeEdit}
                  >
                    <FormControlLabel
                      value="Indumentaria"
                      control={<Radio color="primary" />}
                      label="Indumentaria"
                    />
                    <FormControlLabel
                      value="Accesorios"
                      control={<Radio color="primary" />}
                      label="Accesorios"
                    />
                    <FormControlLabel
                      value="Bazar"
                      control={<Radio color="primary" />}
                      label="Bazar"
                    />
                  </RadioGroup>
                </FormControl>

                <Button 
                autoFocus 
                id={prod._id} 
                onClick={handleEditProduct}>Guardar</Button>

              </TableRow>
            ))
          ) : (
            <div>{ navigate("/")}</div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
