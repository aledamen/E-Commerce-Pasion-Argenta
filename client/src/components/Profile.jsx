import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../commons/ProfileCard";
import { UserCard } from "../commons/UserCard";
import { adminOptions,userOptions } from "../utils/utils";



const Profile = () => {
  const { user } = useSelector((state) => state);

  if (user.isAdmin) {
    return (
      <Box style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
        <Typography sx={{margin:"20px", fontSize:"25px"}}>{`Bienvenido ${user.username} ! `}</Typography>
        <Grid sx={{display:"flex", justifyContent:"center"}}>
          {adminOptions.map((option) => {
            return <ProfileCard props={option}/>;

          })}
        </Grid>
      </Box>
    );
  } else {
    return (
      <div >
        <h4>{`Bienvenido ${user.username} `}</h4>
        <br />
        <UserCard/>
        
        <Grid container spacing={1} >
          {userOptions.map((option,i) => {
            return <ProfileCard key ={i} props={option} spacing={1}/>;
          })}
        </Grid>
      </div>
    );
  
  }
};

export default Profile;
