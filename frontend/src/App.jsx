import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './components/UploadPage';
import DisplayPage from './components/DisplayPage';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
    const [resumeData, setResumeData] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<UploadPage setResumeData={setResumeData} />} />
                <Route path="/display" element={<DisplayPage resumeData={resumeData} />} />
                <Route path="/resume-builder" element={<ResumeBuilder resumeData={resumeData} />}/>
            </Routes>
        </Router>
    );
}

export default App;
