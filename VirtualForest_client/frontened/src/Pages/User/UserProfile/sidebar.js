
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" orientation='vertical'>
      <Tab icon={<HomeIcon />} aria-label="HomeIcon" disabled />
      <Tab icon={<MarkUnreadChatAltIcon />} aria-label="MarkUnreadChatAltIcon" disabled />
      <Tab icon={<ControlPointIcon />} aria-label="ControlPointIcon" disabled />
      <Tab icon={<SettingsIcon />} aria-label="SettingsIcon" disabled />
      <Tab icon={<PersonIcon />} aria-label="PersonIcon" sx={{color:"#242760"}} />
    </Tabs>
  );
}