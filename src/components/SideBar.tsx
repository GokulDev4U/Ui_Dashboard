
import React from "react";
import { Drawer } from "@mui/material";
import CommonAccordion from "./CommonAccordion";

const SideBar: React.FC = () => {
  let drawerList = [
    {
      Events: [
        ["New Request", "/new-request"],
        ["Estimate", "/estimate"],
        ["Events", "/events"],
        ["Partial Request", "/partial-request"],
      ],
    },
    { Positions: [] },
    { Contractors: [] },
    {
      Users: [
        ["Admins", "/admins"],
        ["Clients", "/clients"],
        ["Coordinates", "/coordinates"],
      ],
    },
    { Profiles: [] },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "15%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          top: "9.2%",
          width: "15%",
          boxSizing: "border-box",
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: '1px solid rgb(217, 108, 126)',
          padding: '0.5rem',
        },
      }}
    >
      {drawerList.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <CommonAccordion
              key={key}
              heading={key}
              description={value}
            />
          ))}
        </div>
      ))}
    </Drawer>
  );
};

export default SideBar;
