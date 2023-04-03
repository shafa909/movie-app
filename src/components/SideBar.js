import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AirplayIcon from "@mui/icons-material/Airplay";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import "./sideBar.css";

const drawerContent = (
  <div className="drawer-container">
    <div className="profile-box">
      <img className="profile-image" src="/user.png" alt="image" />
      <p className="profile-name">
        Eric Hoffman
      </p>
    </div>
    <Divider className="divider" />
    <List>
      <ListItem className="list-item list-item-active" disablePadding>
        <ListItemButton className="list-button list-button-active">
          <ListItemIcon className="list-icon list-icon-active">
            <SearchIcon />
          </ListItemIcon>
          <ListItemText
            className="list-item-text list-item-text-active"
            primary="Discover"
          />
        </ListItemButton>
      </ListItem>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="Playlist" />
        </ListItemButton>
      </ListItem>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="Movie" />
        </ListItemButton>
      </ListItem>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <AirplayIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="TV Shows" />
        </ListItemButton>
      </ListItem>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="My List" />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider className="divider" />
    <List>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <UpdateIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="Watch Later" />
        </ListItemButton>
      </ListItem>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="Recomended" />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider className="divider" />
    <List>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem className="list-item" disablePadding>
        <ListItemButton className="list-button">
          <ListItemIcon className="list-icon">
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText className="list-item-text" primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  </div>
);

function SideBar({ handleDrawerToggle, mobileOpen, drawerWidth }) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }  }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default SideBar;
