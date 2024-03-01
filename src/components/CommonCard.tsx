import { Box, Card, CardContent, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const CommonCard = () => {
  const iconStyle = {
    color: "pink",
    fontSize: '0.5em'
  };
  return (
    <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgb(217, 108, 126)", margin: "15px" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="room">Meeting Room 1</span>
          <IconButton style={iconStyle}>
            <StarIcon />
          </IconButton>
          <span className="position">12 positions</span>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="startEndDate">Start from 12 jan 2024 - Ends at 15 jan 2024</span>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
