import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AssignContractor from './AssignContractor';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CommonTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="primary"
          textColor="inherit"
        >
          <Tab
            label="Event Details"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? 'white' : 'pink',
              backgroundColor: value === 0 ? 'pink' : 'transparent',
              borderColor: 'pink',
            }}
          />
          <Tab
            label="Assign Coordinator"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? 'white' : 'pink',
              backgroundColor: value === 1 ? 'pink' : 'transparent',
              borderColor: 'pink',
            }}
          />
          <Tab
            label="Session Management"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? 'white' : 'pink',
              backgroundColor: value === 2 ? 'pink' : 'transparent',
              borderColor: 'pink',
            }}
          />
          <Tab
            label="Generate Show"
            {...a11yProps(3)}
            sx={{
              color: value === 3 ? 'white' : 'pink',
              backgroundColor: value === 3 ? 'pink' : 'transparent',
              borderColor: 'pink',
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Event Details
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Assign Coordinator */}
        <AssignContractor />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Session Management
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Generate Show
      </CustomTabPanel>
    </Box>
  );
};

export default CommonTabs;
