import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import OrderCard from "../commons/OrderCard";


const Orders = () => {
 
    const user = useSelector((state) => state.user);
    if (!user.orders){
  return (
    <div >
        <h1>ORDENES</h1>
        <InventorySharpIcon/>
        <h4>Genere una orden para visualizarla aqui</h4>
        </div>)}
        else{
          return (
            <div>
              <h4>{`Bienvenido ${user.username} `}</h4>
              <br />
              <Grid container spacing={1} >
                {user.orders.map((option) => {
                  return <OrderCard props={option} spacing={1}/>;
                })}
              </Grid>
            </div>
          ); }}
  

export default Orders;