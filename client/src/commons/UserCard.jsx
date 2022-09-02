import { Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { EditProfile } from "../components/EditProfile";

export const UserCard = () => {
  const { user } = useSelector((state) => state);

  return (
    <Grid style={{ display: "flex",marginBottom:"40px"}} justifyContent="center">
      <Card variant="outlined" sx={{ width: 300, display:"flex",flexDirection:"column", justifyContent:"center"}}>
        <Typography color={"primary"} variant="h6" align="center" margin={1}>
          Nombre de usuario:
        </Typography>
        <TextField
          label="Usuario"
          value={user.username}
          size="small"
          inputProps={{ readOnly: true, style:{textAlign:"center"} }}
        />

        <Typography color={"primary"} variant="h6" align="center" margin={1}>
          Email:
        </Typography>
        <TextField
          label="Email"
          value={user.email}
          size="small"
          inputProps={{ readOnly: true,style:{textAlign:"center"}  }}
        />

        <EditProfile />
      </Card>
    </Grid>
  );
};
