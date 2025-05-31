import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Switch } from '@mui/material';

interface Props{
  formTitle:string
}

const SubHeaderBar: React.FC<Props> = ({formTitle}) => {
  return (
    <div className="fixed top-20 z-10 w-full flex items-center justify-between px-6 py-2 bg-white shadow-sm border-b">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-md bg-gray-700 flex items-center justify-center">
          <ArrowBackIosNewIcon className="text-white text-sm" />
        </button>
        <span className="text-sm text-gray-400">Form</span>
        <span className="text-sm text-black font-medium">/ {formTitle?formTitle:'Form Name'}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <InfoOutlinedIcon fontSize="small" />
        <span>Can be filled repeatedly</span>
        <Switch color="secondary" size="small" />
      </div>
    </div>
  );
};

export default SubHeaderBar;
