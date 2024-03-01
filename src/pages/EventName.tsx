import { Container, Typography } from "@mui/material";
import CommonTabs from "../components/CommonTabs";
import { useParams } from "react-router-dom";

const EventName = () => {
  const { eventName } = useParams();

  return (
    <Container>
      <Typography>{eventName}</Typography>
      <CommonTabs />
    </Container>
  );
};

export default EventName;
