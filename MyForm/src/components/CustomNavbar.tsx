import React from 'react';
import {
  ChatBubbleOutline,
  WhatsApp,
  PersonOutline,
  Send,
  Radio,
  Layers,
  Settings,
  NotificationsNone,
  Circle
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

const CustomNavbar: React.FC = () => {
  return (
    <div className="fixed z-10 w-full flex items-center justify-between px-6 py-2 shadow-sm bg-white">
      {/* Left - Logo and Nav Icons */}
      <div className="flex items-center gap-6">
        {/* <span className="text-xl font-bold text-purple-700">Qonek</span> */}
        <img src="https://brdsg.com/img/600/bsohjhrbbsohvcnyey_2/CH5Qz6EjYL4ZhkKCH5NnxEAqqNpah1T6C8uCJoF1Gg.png" alt="Qonek" className='w-25'/>
        <div className="flex gap-4 p-2">
            <IconButton>
                <ChatBubbleOutline fontSize='large' className="flex gap-4 text-purple-300"/>
            </IconButton>

            <IconButton>
                <WhatsApp fontSize='large' className="flex gap-4 text-purple-300"/>
            </IconButton>

            <IconButton>
                <PersonOutline fontSize='large' className="flex gap-4 text-purple-300"/>
            </IconButton>

            <IconButton>
                <Send fontSize='large' className="flex gap-4 text-purple-300"/>
            </IconButton>
            
            <IconButton>
                <Radio fontSize='large' className="flex gap-4 text-purple-300"/>
            </IconButton>
        </div>
        {/* Selected Nav Item */}
        <div className="flex items-center gap-1 bg-gray-100 text-purple-700 px-3 py-1 rounded-md font-medium">
          <Layers />
          <span>Form</span>
        </div>
        <IconButton>
          <Settings className="text-purple-300" fontSize='large'/>
        </IconButton>
      </div>

      {/* Right - Notification and User */}
      <div className="flex items-center gap-4">
        <NotificationsNone />
        <div className="flex items-center gap-2 text-white px-1 py-1 bg-purple-600 rounded-full">
          <span className='px-1 py-0.5'>Online</span>
          <Circle />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-right">
            <div className="text-black font-semibold">Rahmadhany P</div>
            <div className="text-xs text-gray-500">Rahmadhanyc@gmail.com</div>
          </div>
          <Avatar src="" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
