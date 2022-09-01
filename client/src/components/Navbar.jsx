import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LogOutRequest } from "../store/user";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  //traigo estado del usuario
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const cartNoLogued = JSON.parse(localStorage.getItem("cart"));
  const lengthCartIcon = user.cart
    ? user.cart.length
    : cartNoLogued
    ? cartNoLogued.length
    : 0;
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  const handleCart = (e) => {
    navigate("/cart");
  };
  const handleLogOut = (e) => {
    dispatch(LogOutRequest()).then(() => navigate("/"));
  };
  const handleFavorites = (e) => {
    navigate("/favorites");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user.username ? (
        <div>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Link>
          <div
            onClick={handleLogOut}
            style={{
              textDecoration: "none",
              color: "red",
              border: "none",
              backgroundColor: "none",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
          </Link>
        </div>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          onClick={handleCart}
          size="large"
          aria-label="show 0 new mails"
          color="inherit"
        >
          <Badge badgeContent={lengthCartIcon} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          onClick={handleFavorites}
          size="large"
          aria-label="show 0 new mails"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 0 new notifications"
          color="inherit"
        >
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
          {user.username ? (
            <Avatar
              alt="Remy Sharp"
              src="https://thumbs.dreamstime.com/b/hombre-avatar-del-friki-104871313.jpg"
            />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ padding: "0" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Pasion Argenta
            </Link>
          </Typography>
          <Search>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                border: "none",
                marginLeft: "24px",
                borderRadius: "8px",
                height: "35px",
                backgroundColor: "none",
              }}
            >
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
                sx={{ padding: "2px", color: "white" }}
              />
              <button
                className="searchButton"
                type="submit"
                style={{ background: "none", color: "white", border: "none" }}
              >
                {" "}
                <SearchIcon
                  sx={{ "&:hover": { color: "#1b94cc" } }}
                  style={{
                    marginLeft: "6px",
                    paddingTop: "2px",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  className="icon"
                />
              </button>
            </form>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={lengthCartIcon} color="error">
                <ShoppingCartIcon onClick={handleCart} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <FavoriteIcon onClick={handleFavorites} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
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
              {user.username ? (
                <Avatar
                  alt="Remy Sharp"
                  src="https://thumbs.dreamstime.com/b/hombre-avatar-del-friki-104871313.jpg"
                />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
  );
}
