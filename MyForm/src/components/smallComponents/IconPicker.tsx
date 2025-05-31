import React, { JSX, useState } from 'react';
import { Tooltip, Modal, Box, IconButton } from '@mui/material';

// ICON
import EditIcon from '@mui/icons-material/Edit';
import PortraitIcon from '@mui/icons-material/Portrait';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import TollIcon from '@mui/icons-material/Toll';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EuroIcon from '@mui/icons-material/Euro';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightModeIcon from '@mui/icons-material/LightMode';
import ForwardIcon from '@mui/icons-material/Forward';

const iconOptions = [
    <PortraitIcon />, 
    <PersonAddAltIcon />, 
    <MonetizationOnIcon />, 
    <WbTwilightIcon />, 
    <SpellcheckIcon />, 
    <TollIcon />, 
    <ViewInArIcon />, 
    <SignalCellularAltIcon />, 
    <ClosedCaptionIcon />, 
    <AutoAwesomeIcon />, 
    <EuroIcon />, 
    <MarkunreadMailboxIcon />, 
    <EmojiEventsIcon />, 
    <LightModeIcon />, 
    <ForwardIcon />
];

const IconPicker: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element>(<EditIcon />);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleIconSelect = (icon: JSX.Element) => {
    setSelectedIcon(icon);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Tooltip title="Change icon">
        <button
          onClick={handleOpen}
          className="rounded-full bg-gray-300 w-16 h-16 flex items-center justify-center hover:bg-gray-400 transition"
        >
          {selectedIcon}
        </button>
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box 
            className="absolute top-1/2 left-1/2 bg-white rounded-lg shadow-lg p-4 transform -translate-x-1/2 -translate-y-1/2 w-150"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <h3 className="text-lg font-semibold mb-2">Select Icon for this Form</h3>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
            }}>
            {iconOptions.map((icon, idx) => (
              <IconButton key={idx} onClick={() => handleIconSelect(icon)}>
                {icon}
              </IconButton>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default IconPicker;
