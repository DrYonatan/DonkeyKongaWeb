import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "../style.css";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const sideBarLinks = [
  { name: "Feed", path: "/forums"},
  { name: "Upload", path: "/forums/upload" },
  { name: "Notifications", path: "/forums/notifications" },
  { name: "History", path: "/forums/history" },
  { name: "Your Page", path: "/forums/userpage" },
];

export default function SideBarComponent() {
  const theme = useTheme();
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.contrastText,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {sideBarLinks.map((page) => (
            <Link to={page.path} style={{textDecoration: "none", color: theme.palette.secondary.contrastText}}>
              <ListItem key={page.name} disablePadding>
                <ListItemButton>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
