import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../commons/ProfileCard'
import { UserCard } from '../commons/UserCard'
import { adminOptions, userOptions } from '../utils/utils'

const Profile = () => {
    const { user } = useSelector((state) => state)

    if (user.isAdmin) {
        return (
            <Box style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <Typography sx={{ margin: '20px', fontSize: '25px' }}>{`Bienvenido ${user.username} ! `}</Typography>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    {adminOptions.map((option, i) => {
                        return <ProfileCard key={i} props={option} />
                    })}
                </Grid>
            </Box>
        )
    } else {
        return (
            <Box style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <Typography sx={{ margin: '20px', fontSize: '25px' }}>{`Bienvenido ${user.username} ! `}</Typography>
                <UserCard />
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    {userOptions.map((option, i) => {
                        return <ProfileCard key={i} props={option} spacing={1} />
                    })}
                </Grid>
            </Box>
        )
    }
}

export default Profile
