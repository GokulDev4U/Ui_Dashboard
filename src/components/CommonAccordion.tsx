import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Link } from "react-router-dom";
import CommonButton from "./CommonButton";
import { Typography } from "@mui/material";

interface AccordionProps {
  heading: string;
  description: string[];
}

const CommonAccordion = ({ heading, description }: AccordionProps) => {
  const linkStyle = {
    textDecoration: "none",
    color: "pink",
  };
  return (
    <div>
      {description.length > 0 ? (
        <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgb(217, 108, 126)", color: 'white' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {heading}
          </AccordionSummary>
          <AccordionDetails>
            {description.map((d) => (
              <div key={d}>
                <CommonButton>
                  <Link
                    to={`${d[1]}`}
                    style={linkStyle}
                  >
                    {d[0]}
                  </Link>
                </CommonButton>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <Typography sx={{color: 'white'}}>{heading}</Typography>
      )}
    </div>
  );
};

export default CommonAccordion;
