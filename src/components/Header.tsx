import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ padding: "0.5rem", display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <AssignmentLateOutlinedIcon sx={{marginRight:'15px'}}/>
          <NotificationsOutlinedIcon sx={{marginRight:'15px'}}/>
          <Box sx={{marginRight:'15px'}}>
            <Typography>
              Hi, <span style={{ color: "cyan" }}>Mohamaad Ashad</span>
            </Typography>
            <Typography>welcome back!</Typography>
          </Box>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
