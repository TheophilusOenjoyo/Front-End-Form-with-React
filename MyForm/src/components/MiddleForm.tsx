import React from 'react';
import { TextField, IconButton, List, ListItemText, FormControlLabel, ListItemIcon, SelectChangeEvent, FormControl, Select, MenuItem, Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import CustomTextAnswerType from './smallComponents/CustomTextAnswerType'; 
import CustomTextAnswerTypeWithIcon from './smallComponents/CustomTextAnswerTypeWithIcon'; 

//ICON
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconPicker from './smallComponents/IconPicker';

import {
  BackupTable, Checklist, LibraryAddCheck, 
  FilterList, ViewHeadline, LinearScale, 
  DateRange, AccessTime
} from '@mui/icons-material';

interface Question {
  type: string;
  label: string;
  options?: { label: string; isOther?: boolean }[];
  scaleStart?: number;
  scaleEnd?: number;
  minLabel?: string;
  maxLabel?: string;
}

interface Section {
  title: string;
  desc: string;
  questions: Question[];
}

interface Props {
  formTitle: string;
  setFormTitle: (title:string)=> void;
  formSections: Section[];
  setFormSections: React.Dispatch<React.SetStateAction<Section[]>>;
  selectedSectionIndex: number | null;
  setSelectedSectionIndex: (index: number | null) => void;
  selectedQuestionIndex: number | null;
  setSelectedQuestionIndex: (index: number | null) => void;
  removeSection: (sectionIndex: number) => void;
  removeQuestion: (sectionIndex: number, questionIndex: number) => void;
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

const getQLabelForType = (type: string): string => {
  switch (type) {
    case 'multiple':
      return 'Multiple Choice';
    case 'checkbox':
      return 'Multiple Answer';
    case 'short':
      return 'Short Answer';
    case 'paragraph':
      return 'Paragraph';
    case 'linear':
      return 'Linear Scale';
    case 'date':
      return 'Date';
    case 'time':
      return 'Time';
    default:
      return '';
  }
};

const MiddleForm: React.FC<Props> = ({
  formTitle,
  setFormTitle,
  formSections,
  setFormSections,
  selectedSectionIndex,
  setSelectedSectionIndex,
  selectedQuestionIndex,
  setSelectedQuestionIndex,
  removeSection,
  removeQuestion,
}) => {
  const handleSectionClick = (index: number) => setSelectedSectionIndex(index);

  return (
    // Form Header
    <div className="p-6 space-y-6">
      <div className="relative border border-gray-300 rounded p-4 bg-white shadow">
        
        <div className="flex items-center gap-2 max-w">
          <div className="text-right shrink-0">
            <IconPicker/>
          </div>
          <div className="flex-1">
            <TextField
              fullWidth
              variant="standard"
              placeholder="Form Name"
              inputProps={{ 
                style: { 
                  fontSize: '30px'
                } 
              }}
              onChange={(e) => {
                setFormTitle(e.target.value);
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Description"
              onChange={(e) => {
                
              }}
              className='font'
            />
          </div>
        </div>
      </div>

      {formSections.map((section, sectionIndex) => (
        <>
        <div
          key={sectionIndex}
          className={`
            relative border border-gray-300 rounded p-4 bg-white shadow 
            transition-all duration-300
            ${selectedSectionIndex === sectionIndex ? 'border-l-4 border-l-blue-500' : ''}
          `}
          onClick={() => handleSectionClick(sectionIndex)}
        >
          {/* Section */}
          <div>
            <span
              className="
                bg-indigo-500 
                text-white
                font-semibold
                py-2 px-4 rounded-lg
                text-shadow-soft-glow
                ...
              "
            >
              Section {sectionIndex+1} of {formSections.length}
            </span>
          </div>
          
          <div>
            <div className="flex items-center gap-2 pt-2 pb-2">
              <TextField
                placeholder='Section Title'
                variant="standard"
                value={section.title}
                onChange={(e) => {
                  const updated = [...formSections];
                  updated[sectionIndex].title = e.target.value;
                  setFormSections(updated);
                }}
                className="flex-1"
              />

              {/* Delete Section Button */}
              {selectedSectionIndex === sectionIndex && (
                <>
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSection(sectionIndex);
                      setSelectedSectionIndex(null);
                      setSelectedQuestionIndex(null);
                    }}
                    className="shrink-0"
                  >
                    <span className='text-red-600'>Remove</span>
                    <DeleteIcon className='text-red-600 hover:text-red-700 hover:bg-red-50' fontSize="medium" />
                  </Button>
                  <IconButton>
                    <ExpandLessIcon/>
                  </IconButton>
                </>
              )}
            </div>

            <div className=' pb-2'>
              <TextField
                placeholder='Section Description'
                variant="standard"
                fullWidth
                value={section.desc}
                onChange={(e) => {
                  const updated = [...formSections];
                  updated[sectionIndex].desc = e.target.value;
                  setFormSections(updated);
                }}
              />
            </div>
          </div>
        </div>

        {/* Questions */}
          <div className="mt-2 space-y-4">
            {section.questions.map((question, questionIndex) => (
              <div 
                key={questionIndex} 
                className={`
                  relative border border-gray-300 rounded p-4 bg-white shadow 
                  transition-all duration-300
                  ${selectedSectionIndex === sectionIndex && selectedQuestionIndex === questionIndex 
                    ? 'border-l-4 border-l-blue-500' 
                    : ''}
                `}
                onClick={() => {
                  setSelectedSectionIndex(sectionIndex);
                  setSelectedQuestionIndex(questionIndex);
                }}
              >
                {/* Question Input */}
                <div className="mt-2 space-y-1">
                  <div className='flex'>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Add question"
                      onChange={(e) => {
                        const updated = [...formSections];
                        updated[sectionIndex].questions[questionIndex].label = e.target.value;
                        setFormSections(updated);
                      }}
                      />
                      <FormControl sx={{ minWidth: 200 }}>
                        <Select
                          value="current"
                        >
                          <MenuItem key={"Unique " + questionIndex} value="current">
                            {getIconForType(question.type)} {getQLabelForType(question.type)}
                          </MenuItem>
                        </Select>
                      </FormControl>
                  </div>
                  {/*----- Answer Type -----*/}
                  {/* Multiple Choice Answer Type */}
                  {question.type === 'multiple' && (
                    <div className="ml-2 space-y-2 mt-2">
                      {question.options?.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center justify-between space-x-2">
                          <RadioButtonCheckedIcon fontSize='small'/>
                          {!option.isOther ? (
                            <TextField
                              placeholder={'Option ' + (optIndex+1)}
                              variant="standard"
                              onChange={(e) => {
                                const updated = [...formSections];
                                updated[sectionIndex].questions[questionIndex].options![optIndex].label = e.target.value;
                                setFormSections(updated);
                              }}
                              className='flex-1 no-underline-when-blur'
                            />
                          ) : (
                            <span className="text-gray-500 flex-1">Input Manually</span>
                          )}
                          <IconButton
                            size="small"
                            onClick={() => {
                              const updated = [...formSections];
                              updated[sectionIndex].questions[questionIndex].options!.splice(optIndex, 1);
                              setFormSections(updated);
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </div>
                      ))}

                      {/* Add Option / Add Other Buttons */}
                      <div>
                        <RadioButtonCheckedIcon fontSize='small'/>
                        <button
                          type="button"
                          className="bg-transparent border-none text-sm text-gray-600 hover:underline"
                          onClick={() => {
                            const updated = [...formSections];
                            const opts = updated[sectionIndex].questions[questionIndex].options || [];
                            opts.push({ label: '', isOther: false });
                            updated[sectionIndex].questions[questionIndex].options = opts;
                            setFormSections(updated);
                          }}
                        >
                          Add Option
                        </button>
                        
                        {!question.options?.some(opt => opt.isOther) &&(
                          <>
                            Or
                            <button
                              type="button"
                              className="bg-transparent border-none text-sm text-blue-600 hover:underline"
                              onClick={() => {
                                const updated = [...formSections];
                                const opts = updated[sectionIndex].questions[questionIndex].options || [];
                                opts.push({ label: 'Input Manually', isOther: true });
                                updated[sectionIndex].questions[questionIndex].options = opts;
                                setFormSections(updated);
                              }}
                            >
                              Add Other
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}


                  {/* Multiple Checkbox Answer Type */}
                  {question.type === 'checkbox' && (
                    <div className="ml-2 space-y-2 mt-2">
                      {question.options?.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center justify-between space-x-2">
                          <CheckBoxIcon fontSize='small'/>
                          {!option.isOther ? (
                            <TextField
                              placeholder={'Option ' + (optIndex+1)}
                              variant="standard"
                              onChange={(e) => {
                                const updated = [...formSections];
                                updated[sectionIndex].questions[questionIndex].options![optIndex].label = e.target.value;
                                setFormSections(updated);
                              }}
                              className='flex-1 no-underline-when-blur'
                            />
                          ) : (
                            <span className="text-gray-500 flex-1">Input Manually</span>
                          )}
                          <IconButton
                            size="small"
                            onClick={() => {
                              const updated = [...formSections];
                              updated[sectionIndex].questions[questionIndex].options!.splice(optIndex, 1);
                              setFormSections(updated);
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </div>
                      ))}

                      {/* Add Option / Add Other Buttons */}
                      <div>
                        <CheckBoxIcon fontSize='small'/>
                        <button
                          type="button"
                          className="bg-transparent border-none text-sm text-gray-600 hover:underline"
                          onClick={() => {
                            const updated = [...formSections];
                            const opts = updated[sectionIndex].questions[questionIndex].options || [];
                            opts.push({ label: '', isOther: false });
                            updated[sectionIndex].questions[questionIndex].options = opts;
                            setFormSections(updated);
                          }}
                        >
                          Add Option
                        </button>
                        
                        {!question.options?.some(opt => opt.isOther) &&(
                          <>
                            Or
                            <button
                              type="button"
                              className="bg-transparent border-none text-sm text-blue-600 hover:underline"
                              onClick={() => {
                                const updated = [...formSections];
                                const opts = updated[sectionIndex].questions[questionIndex].options || [];
                                opts.push({ label: 'Input Manually', isOther: true });
                                updated[sectionIndex].questions[questionIndex].options = opts;
                                setFormSections(updated);
                              }}
                            >
                              Add Other
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Short Answer Type */}
                  {question.type === 'short' && (
                    <CustomTextAnswerType text='Short Answer' />
                  )}

                  {/* Paragraph Answer Type */}
                  {question.type === 'paragraph' && (
                    <CustomTextAnswerType text='Paragraph' />
                  )}

                  {/* Linear Scale Answer Type */}
                  {question.type === 'linear' && (
                    <div className="mt-4 space-y-4">
                      {/* Scale selectors */}
                      {selectedSectionIndex === sectionIndex && selectedQuestionIndex === questionIndex && (
                        <>
                          <div className="flex items-center space-x-2">
                            <FormControl sx={{ minWidth: 80 }}>
                              <Select
                                value={question.scaleStart ?? 0}
                                onChange={(e) => {
                                  const updated = [...formSections];
                                  updated[sectionIndex].questions[questionIndex].scaleStart = e.target.value;
                                  setFormSections(updated);
                                }}
                              >
                                {[...Array(2).keys()].map((num) => (
                                  <MenuItem key={num} value={num}>{num}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <span className='pl-2'>to</span>
                            <FormControl sx={{ minWidth: 80 }}>
                              <Select
                                value={question.scaleEnd ?? 4}
                                onChange={(e) => {
                                  const updated = [...formSections];
                                  updated[sectionIndex].questions[questionIndex].scaleEnd = e.target.value;
                                  setFormSections(updated);
                                }}
                              >
                                {[...Array(7).keys()].map((num) => (
                                  <MenuItem key={num+4} value={num+4}>{num+4}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>

                          {/* Min Scale Text Input */}
                          <div className="flex items-center gap-2">
                            <div className="w-6 text-right shrink-0">
                              <span>{question.scaleStart ?? 0}</span>
                            </div>
                            <div className="flex-1">
                              <TextField
                                fullWidth
                                variant="standard"
                                placeholder="Scale"
                                value={question.minLabel || ''}
                                onChange={(e) => {
                                  const updated = [...formSections];
                                  updated[sectionIndex].questions[questionIndex].minLabel = e.target.value;
                                  setFormSections(updated);
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Max Scale Text Input */}
                          <div className="flex items-center gap-2">
                            <div className="w-6 text-right shrink-0">
                              <span>{question.scaleEnd ?? 4}</span>
                            </div>
                            <div className="flex-1">
                              <TextField
                                fullWidth
                                variant="standard"
                                placeholder="Scale"
                                value={question.maxLabel || ''}
                                onChange={(e) => {
                                  const updated = [...formSections];
                                  updated[sectionIndex].questions[questionIndex].maxLabel = e.target.value;
                                  setFormSections(updated);
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {selectedSectionIndex !== sectionIndex || selectedQuestionIndex !== questionIndex && (
                        <div className="flex items-center justify-center m-2">
                          {/* Left Label - fixed width */}
                          <div className="mr-2 text-sm text-gray-600 mt-4">
                            {question.minLabel ? question.minLabel : 'Minimal Scale'}
                          </div>

                          {/* Center Scale */}
                          <div className="flex space-x-4">
                            {[...(Array((question.scaleEnd ?? 4) - (question.scaleStart ?? 0) + 1).keys())].map(i => {
                              const value = (question.scaleStart ?? 0) + i;
                              return (
                                <div key={value} className="flex flex-col items-center w-8">
                                  <div className="text-sm">{value}</div>
                                  <RadioButtonUncheckedIcon fontSize="small" />
                                </div>
                              );
                            })}
                          </div>

                          {/* Right Label - fixed width */}
                          <div className="ml-2 text-sm text-gray-600 mt-4">
                            {question.maxLabel ? question.maxLabel : 'Maximal Scale'}
                          </div>
                        </div>
                      )}
                      
                    </div>
                  )}


                  {/* Date Answer Type */}
                  {question.type === 'date' && (
                    <CustomTextAnswerTypeWithIcon 
                      text='DD/MM/YYYY' 
                      Icon={DateRange}
                    />
                  )}

                  {/* Time Answer Type */}
                  {question.type === 'time' && (
                    <CustomTextAnswerTypeWithIcon 
                      text='Select Time' 
                      Icon={AccessTime}
                    />
                  )}
                </div>
                
                {/* Bottom Question */}
                {selectedSectionIndex === sectionIndex && selectedQuestionIndex === questionIndex && (
                  <div className="flex items-center justify-between mt-4">
                    {/* Left side content */}
                    <div className="flex items-center gap-4">
                      <FormControlLabel required control={<Switch />} label="Required" />
                      <b>Add Product to Answer +</b>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center gap-2">
                      <IconButton>
                        <ContentCopyIcon />
                      </IconButton>

                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeQuestion(sectionIndex, questionIndex);
                          setSelectedQuestionIndex(null);
                        }}
                      >
                        <DeleteIcon fontSize="medium" />
                      </IconButton>

                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

        </>
      ))}
    </div>
  );
};

export default MiddleForm;
