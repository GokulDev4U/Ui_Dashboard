import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CustomTable from "./components/CustomTable";
// import EventName from "./pages/EventName";
import { GridColDef } from "@mui/x-data-grid";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const EventName = lazy(() => import("./pages/EventName"));

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", headerClassName: "white-text", cellClassName: "white-text", width: 90 },
  {
    field: "eventName",
    headerName: "Event name",
    headerClassName: "white-text",
    cellClassName: "white-text",
    width: 130,
    renderCell: (params) => <Link to={`/new-request/${encodeURIComponent(params.row.eventName)}`}>{params.row.eventName}</Link>,
  },
  { field: "eventStart", headerName: "Event Start", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "eventEnd", headerName: "Event End", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "clientName", headerName: "Client Name", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "contactInfo", headerName: "Contact Info", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "venue", headerName: "Venue", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "city", headerName: "City", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "state", headerName: "State", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
  { field: "zipCode", headerName: "Zip Code", headerClassName: "white-text", cellClassName: "white-text", width: 130 },
];

const rows = [
  {
    id: 1,
    eventName: "Dj Show",
    eventStart: "12 july",
    eventEnd: "14 july",
    clientName: "dj khali",
    contactInfo: "99307502311",
    venue: "-",
    city: "-",
    state: "-",
    zipCode: "-",
  },
  {
    id: 2,
    eventName: "Dj party",
    eventStart: "12 july",
    eventEnd: "14 july",
    clientName: "dj khali",
    contactInfo: "99307502311",
    venue: "-",
    city: "-",
    state: "-",
    zipCode: "-",
  },
  {
    id: 3,
    eventName: "Music Show",
    eventStart: "12 july",
    eventEnd: "14 july",
    clientName: "dj khali",
    contactInfo: "99307502311",
    venue: "-",
    city: "-",
    state: "-",
    zipCode: "-",
  },
  {
    id: 4,
    eventName: "Wedding Show",
    eventStart: "12 july",
    eventEnd: "14 july",
    clientName: "dj khali",
    contactInfo: "99307502311",
    venue: "-",
    city: "-",
    state: "-",
    zipCode: "-",
  },
  {
    id: 5,
    eventName: "Meeting Show",
    eventStart: "12 july",
    eventEnd: "14 july",
    clientName: "dj khali",
    contactInfo: "99307502311",
    venue: "-",
    city: "-",
    state: "-",
    zipCode: "-",
  },
];

function App() {
  return (
    <div className="app gradientBackground">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/new-request"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CustomTable
                    rows={rows}
                    columns={columns}
                  />
                </Suspense>
              }
            />
            <Route
              path="/new-request/:eventName"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <EventName />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
