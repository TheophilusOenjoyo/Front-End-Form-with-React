import React from 'react';
import Divider from '@mui/material/Divider';
import CustomListItem from './smallComponents/CustomListItem';

// ICONS
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props {
  addQuestion: (sectionIndex: number, question: any) => void;
  addSection: () => void;
  selectedSection: number | null;
}

const LeftDrawer: React.FC<Props> = ({ addQuestion, addSection, selectedSection }) => {
  const handleAddQuestion = (type: string, label: string) => {
    if (selectedSection !== null) {
      addQuestion(selectedSection, { type, label });
    }
  };

  return (
    <div>
      <div className="bg-purple-100 p-4">
        <h2 className="text-purple-900 font-bold">Form Element</h2>
      </div>

      <div className="pl-4 pt-4">
        <b>Section</b>
      </div>

      <CustomListItem
        text="Section"
        Icon={BackupTableIcon}
        onClick={addSection}
      />

      <Divider />

      <div className="pl-4 pt-4">
        <b>Answer</b>
      </div>

      <CustomListItem
        text="Multiple Choice"
        Icon={ChecklistIcon}
        onClick={() => handleAddQuestion('multiple', 'Multiple Choice')}
      />

      <CustomListItem
        text="Multiple Answer"
        Icon={LibraryAddCheckIcon}
        onClick={() => handleAddQuestion('checkbox', 'Multiple Answer')}
      />

      <CustomListItem
        text="Short Answer"
        Icon={FilterListIcon}
        onClick={() => handleAddQuestion('short', 'Short Answer')}
      />

      <CustomListItem
        text="Paragraph"
        Icon={ViewHeadlineIcon}
        onClick={() => handleAddQuestion('paragraph', 'Paragraph')}
      />

      <CustomListItem
        text="Linear Scale"
        Icon={LinearScaleIcon}
        onClick={() => handleAddQuestion('linear', 'Linear Scale')}
      />

      <CustomListItem
        text="Date"
        Icon={DateRangeIcon}
        onClick={() => handleAddQuestion('date', 'Date')}
      />

      <CustomListItem
        text="Time"
        Icon={AccessTimeIcon}
        onClick={() => handleAddQuestion('time', 'Time')}
      />
    </div>
  );
};

export default LeftDrawer;
