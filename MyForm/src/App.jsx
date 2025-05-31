import React, { useState } from 'react';
import LeftDrawer from './components/LeftDrawer';
import MiddleForm from './components/MiddleForm';
import RightDrawer from './components/RightDrawer';
import CustomNavbar from './components/CustomNavbar';
import SubHeaderBar from './components/SubHeaderBar';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [formTitle, setFormTitle] = useState('');
  const [formSections, setFormSections] = useState([]);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const addQuestionToSection = (sectionIndex, question) => {
    const newQuestion = {
      id: uuidv4(),
      label: '',
      options: question.type === 'multiple' || question.type === 'checkbox'? [] : undefined,
      ...question,
    };
    setFormSections(prev => {
      const updated = [...prev];
      const section = { ...updated[sectionIndex] };
      section.questions = [...section.questions, newQuestion];
      updated[sectionIndex] = section;
      
      setSelectedSectionIndex(sectionIndex);
      setSelectedQuestionIndex(section.questions.length-1); 

      return updated;
    });
  };

  const addSection = () => {
    setFormSections(prev => {
      const newSections = [...prev, { title: '', desc: '', questions: [] }];
      
      setSelectedSectionIndex(newSections.length - 1);
      setSelectedQuestionIndex(null); 
      return newSections;
    });
  };

  const removeSection = (sectionIndex) => {
    setFormSections(prev => prev.filter((_, idx) => idx !== sectionIndex));
    if (selectedSectionIndex === sectionIndex) setSelectedSectionIndex(null);
  };

  const removeQuestion = (sectionIndex, questionIndex) => {
    setFormSections(prev => {
      const updated = [...prev];
      const updatedQuestions = [...updated[sectionIndex].questions];
      updatedQuestions.splice(questionIndex, 1);
      updated[sectionIndex] = {
        ...updated[sectionIndex],
        questions: updatedQuestions,
      };
      return updated;
    });
  };
  
  return (
    <>
      <CustomNavbar />
      <SubHeaderBar formTitle={formTitle}/>
      <div className="h-screen w-screen flex flex-row overflow-hidden">
        {/* Left Drawer */}
        <div className="fixed w-1/5 min-w-[270px] mt-[130px] max-w-[250px] h-full border-r bg-white">
          <LeftDrawer
            addQuestion={addQuestionToSection}
            addSection={addSection}
            selectedSection={selectedSectionIndex}
          />
        </div>

        {/* Middle Content */}
        <div className="flex-1 ml-[17.5%] mr-[300px] mt-[130px] overflow-y-auto bg-gray-50 max-h-[calc(100vh-130px)] div-hidden">
          <MiddleForm
            formTitle={formTitle}
            setFormTitle={setFormTitle}
            formSections={formSections}
            setFormSections={setFormSections}
            selectedSectionIndex={selectedSectionIndex}
            setSelectedSectionIndex={setSelectedSectionIndex}
            selectedQuestionIndex={selectedQuestionIndex}
            setSelectedQuestionIndex={setSelectedQuestionIndex}
            removeSection={removeSection}
            removeQuestion={removeQuestion}
          />
        </div>

        {/* Right Drawer */}
        <div className="fixed right-0 w-[300px] mt-[130px] h-full border-l bg-white">
          <RightDrawer
            formSections={formSections}
            formTitle={formTitle}
          />
        </div>
      </div>
    </>
  );
}
