import * as React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AccountIcon from "../../../../Assets/DashBoard/AccountIcon.png";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={() => {handleClose(); navigate("/")}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
