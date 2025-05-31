import React from 'react';

// ICONS
import {
  BackupTable, Checklist, LibraryAddCheck, 
  FilterList, ViewHeadline, LinearScale, 
  DateRange, AccessTime
} from '@mui/icons-material';

interface Question {
  type: string;
  label: string;
}

interface Section {
  title: string;
  questions: Question[];
}

interface Props {
  formTitle: string;
  formSections: Section[];
}

const getIconForType = (type: string): React.ReactNode => {
  switch (type) {
    case 'multiple':
      return <Checklist />;
    case 'checkbox':
      return <LibraryAddCheck />;
    case 'short':
      return <FilterList />;
    case 'paragraph':
      return <ViewHeadline />;
    case 'linear':
      return <LinearScale />;
    case 'date':
      return <DateRange />;
    case 'time':
      return <AccessTime />;
    default:
      return <BackupTable />;
  }
};

const RightDrawer: React.FC<Props> = ({ formTitle, formSections }) => {
  if (!formSections.length) return (
    <div className="space-y-4 overflow-y-auto h-full">
      <div>
        <div className="bg-purple-100 p-4">
        <h2 className="text-purple-900 font-bold">{formTitle? formTitle : 'Form Name'}</h2>
      </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 overflow-y-auto h-full">
      <div className="bg-purple-100 p-4">
        <h2 className="text-purple-900 font-bold">{formTitle? formTitle : 'Form Name'}</h2>
      </div>
      {formSections.map((section, sectionIndex) => (
        <div className='p-4' key={sectionIndex}>
          <div className="text-lg font-semibold mb-2">
            {section.title || `${sectionIndex + 1}. Section`}
          </div>
          <ul className="space-y-1">
            {section.questions.map((question, qIndex) => (
              <li
                key={qIndex}
                className="flex items-center text-sm text-gray-700 space-x-2"
              >
                <span>{getIconForType(question.type)}</span>
                <span>{question.label.trim() === '' ? 'Question' : question.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RightDrawer;
