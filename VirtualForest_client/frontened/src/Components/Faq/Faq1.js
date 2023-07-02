import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';


const LinkColor = "#494e56";
const ButtonColor = "#5b58ff";

export default function Frequentquestions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sx={{borderRadius:".25rem", marginY:"15px",marginX:"5px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className='smallHeading' sx={{fontFamily:"Dm Sans",fontWeight:"540",color:"#170F49"}} >What is the Virtual Forest? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='restContent' sx={{ fontSize: "16px", fontFamily: "Dm Sans",color:"#6F6C90" }} >
          Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{borderRadius:".25rem",  marginY:"15px",marginX:"5px"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {/* <Typography className='mulish' sx={{ width: '33%', flexShrink: 0, fontFamily:'Mulish' }}>Users</Typography> */}
          <Typography className='smallHeading'  sx={{fontFamily:"Dm Sans",fontWeight:"540",color:"#170F49"}}>
          How does Virtual Forest plants trees in real life? 
                    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='restContent' sx={{ fontSize: "16px", fontFamily: "Dm Sans",color:"#6F6C90" }}>
          Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius:".25rem",  marginY:"15px",marginX:"5px"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className='smallHeading' sx={{fontFamily:"Dm Sans",fontWeight:"540",color:"#170F49"}}>
          How many trees can a user plant in Virtual Forest?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='restContent' sx={{ fontSize: "16px", fontFamily: "Dm Sans",color:"#6F6C90" }}>
          Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! 
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      
    </div>
  );
}