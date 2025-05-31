import React from 'react';

interface CustomTextAnswerTypeProps {
  text: string;
}

const CustomTextAnswerType: React.FC<CustomTextAnswerTypeProps> = ({text}) => {
  return (
    <ul className="space-y-5 pl-3 pt-3">
    <li
        className="flex items-center text-sm text-gray-700 space-x-2"
    >
        <span>{text}</span>
    </li>
    </ul>
  );
};

export default CustomTextAnswerType;