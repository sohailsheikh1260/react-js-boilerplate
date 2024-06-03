import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography noWrap variant="h6">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
