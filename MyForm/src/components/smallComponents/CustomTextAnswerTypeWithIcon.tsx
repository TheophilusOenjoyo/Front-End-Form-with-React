import React from 'react';

interface CustomTextAnswerTypeWithIconProps {
  text: string;
  Icon: React.ElementType;
}

const CustomTextAnswerTypeWithIcon: React.FC<CustomTextAnswerTypeWithIconProps> = ({text, Icon}) => {
  return (
    <ul className="space-y-5 pl-3 pt-3">
    <li
        className="flex items-center text-sm text-gray-700 space-x-2"
    >
      <span><Icon fontSize="small"/></span>
      <span>{text}</span>
    </li>
    </ul>
  );
};

export default CustomTextAnswerTypeWithIcon;