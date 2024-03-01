import { Box, Card, Typography } from "@mui/material";
import CustomTable from "./CustomTable";
import { GridColDef } from "@mui/x-data-grid";
import CommonCard from "./CommonCard";

const columns: GridColDef[] = [
  { field: "id", headerName: "id", headerClassName: "white-text", cellClassName: "white-text", width: 90 },
  { field: "position", headerName: "Position", headerClassName: "white-text", cellClassName: "white-text", width: 90 },
  { field: "time", headerName: "Time", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "info", headerName: "Info", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "quantity", headerName: "Quantity", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
];

const rows = [
  {
    id: 1,
    position: "Dj Show",
    time: "12 july",
    info: "14 july",
    quantity: "dj khali",
  },
  {
    id: 2,
    position: "Dj Show",
    time: "12 july",
    info: "14 july",
    quantity: "dj khali",
  },
  {
    id: 3,
    position: "Dj Show",
    time: "12 july",
    info: "14 july",
    quantity: "dj khali",
  },
  {
    id: 4,
    position: "Dj Show",
    time: "12 july",
    info: "14 july",
    quantity: "dj khali",
  },
  {
    id: 5,
    position: "Dj Show",
    time: "12 july",
    info: "14 july",
    quantity: "dj khali",
  },
];

const AssignContractor = () => {
  return (
    <Box>
      <Typography>Assign Contractor</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Card sx={{backgroundColor: "rgba(0, 0, 0, 0)",border: '1px solid rgb(217, 108, 126)',margin:'15px', width:'450px'}}>
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </Card>
        <CustomTable
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default AssignContractor;
