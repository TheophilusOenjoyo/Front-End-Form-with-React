import React from 'react';
import { ListItem, ListItemText, IconButton, List, ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface CustomListItemProps {
  text: string;
  Icon: React.ElementType;
  onClick: () => void;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ text, Icon, onClick }) => {
  return (
    <div className='pr-4 pl-4'>
      <ListItem
        disableGutters
        secondaryAction={
          <IconButton edge="end" aria-label="add" onClick={onClick}>
            <AddIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </div>
  );
};

export default CustomListItem;
