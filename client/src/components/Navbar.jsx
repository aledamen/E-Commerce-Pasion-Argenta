import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Avatar } from '@mui/material'
import { useState } from 'react'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

export default function PrimarySearchAppBar() {
    //traigo estado del usuario
    const user = useSelector((state) => state.user)
    const [search, setSearch] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("esta es search", search)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {user.username ? (
                <div>
                    <Link to="/profile" style={{textDecoration: 'none'}}>
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    </Link>
                    <Link to="/profile" style={{textDecoration: 'none'}}>
                        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    </Link>
                    <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
                </div>
            ) : (
                <div>
                    <Link to="/signup" style={{textDecoration: 'none'}}>
                            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
                    </Link>
                </div>
            )}
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 0 new mails" color="inherit">
                    <Badge badgeContent={0} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 0 new notifications" color="inherit">
                    <Badge badgeContent={0} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {user.username ? <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/hombre-avatar-del-friki-104871313.jpg" /> : <AccountCircle /> }
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{ padding: '0' }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                       <Link to="/" style={{textDecoration: 'none', color:'white'}}>Pasion Argenta</Link> 
                    </Typography>
                    <Search>
                    <form onSubmit={handleSubmit} style={{display:'flex', alignItems:'center', border:'none', marginLeft:'24px', borderRadius:'8px', height:'35px', backgroundColor:'none'}}>
                        {/* <button type='submit'>
                            
                        </button> */}
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} onChange={handleSearch} sx={{padding:'2px', color:'white'}} />
                        <button className="searchButton" type="submit" style={{background:'none', color:'white', border: 'none'}}>
                                {' '}
                                <SearchIcon
                                    sx={{ '&:hover': { color: '#1b94cc' } }}
                                    style={{ marginLeft: '6px', paddingTop: '2px', width: '30px', height: '30px', padding:'5px' }}
                                    className="icon"
                                />
                            </button>
                    </form></Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={0} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={0} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    )
}