import React, { useEffect } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AccountIcon from "../../../../Assets/DashBoard/AccountIcon.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Providers/auth";

export default function BasicMenu() {
  const navigate = useNavigate();
  const {user, setUser} = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate("/");
  }
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage === null)
      navigate("/");
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={AccountIcon} alt="Perfil" style={{ height: "35pt" }} />
      </Button>
      <Menu
        id="basic-menu"
        style={{marginTop: 45, marginLeft: -20}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => {handleClose(); handleLogOut()}}>Logout ({user})</MenuItem>
      </Menu>
    </div>
  );
}
