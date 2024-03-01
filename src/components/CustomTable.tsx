
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";

interface CommonTableProps {
  rows: any[];
  columns: GridColDef[];
  pageSizeOptions?: number[];
  height?: number;
  borderColor? : string,
}

const CustomTable = ({
  rows,
  columns,
  pageSizeOptions = [5, 10],
  height = 400,
  borderColor = "rgb(217, 108, 126)",
}:CommonTableProps) => {
  return (
    <div style={{ height: height, width: "100%", border: `3px solid ${borderColor}`, borderRadius:'7px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: pageSizeOptions[0] },
          },
        }}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
};

export default CustomTable;
