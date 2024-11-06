import React, { useState } from "react";
import ResponsiveAppBar from './navbar';
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Category1() {
  // State to store the appraisal scores for each section
  const [scores, setScores] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  });

  // State to store marks for sections d, e, and f
  const [sectionDMarks, setSectionDMarks] = useState({
    ppt: 0,
    animation: 0,
    video: 0,
    guestLecture: 0,
    industrialVisit: 0,
    ict: 0,
    pedagogy: 0,
    contentBeyond: 0,
  });

  const [sectionEMarks, setSectionEMarks] = useState({
    lectureNotes: 0,
    labManual: 0,
    questionBank: 0,
    termTestSolution: 0,
    modelUniSolution: 0,
    assignmentSolution: 0,
    syllabusSetting: 0,
  });

  const [sectionFMarks, setSectionFMarks] = useState({
    invigilation: 0,
    evaluation: 0,
    questionPaperSetting: 0,
  });

  // State to store uploaded files
  const [files, setFiles] = useState({
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
  });

  // Handle radio button change
  const handleRadioChange = (event, section) => {
    const value = parseInt(event.target.value);
    setScores((prevScores) => ({
      ...prevScores,
      [section]: value,
    }));
  };

  // Handle marks input for sections d, e, and f
  const handleMarksInput = (event, option, maxScore, setMarksState) => {
    const value = Math.max(0, Math.min(parseInt(event.target.value, 10), maxScore));
    setMarksState((prevMarks) => ({
      ...prevMarks,
      [option]: isNaN(value) ? 0 : value,
    }));
  };

  // Calculate the total of Split-Up Marks for sections d, e, and f
  const totalSectionDMarks = Object.values(sectionDMarks).reduce((acc, curr) => acc + curr, 0);
  const totalSectionEMarks = Object.values(sectionEMarks).reduce((acc, curr) => acc + curr, 0);
  const totalSectionFMarks = Object.values(sectionFMarks).reduce((acc, curr) => acc + curr, 0);

  // Calculate the overall total score (self appraisal) out of 150
  const totalSelfAppraisalScore = 
    Math.min(totalSectionDMarks, 40) + 
    Math.min(totalSectionEMarks, 30) + 
    Math.min(totalSectionFMarks, 20) + 
    scores.a + scores.b + scores.c;

  // Handle file upload
  const handleFileUpload = (event, section) => {
    const file = event.target.files[0];
    setFiles((prevFiles) => ({
      ...prevFiles,
      [section]: file,
    }));
  };

  // Handle Save and Back button (implement functionality here)
  const handleSave = () => {
    alert("Form saved!");
  };

  const handleBack = () => {
    alert("Going back!");
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          mb: 5,
          boxShadow: "0px 4px 12px rgba(0 0 0 0.1)",
          padding: "30px",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            mb: 3,
            color: "#333",
          }}
        >
          Self Appraisal Form
        </Typography>


        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>Sr. No.</th>
              <th style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>Nature of Activity</th>
              <th style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>Split-Up Marks Total</th>
              <th style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>Max API Score Allotted</th>
              <th style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>Self Appraisal Score</th>
              <th style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>Upload Supporting Documents</th>
            </tr>
          </thead>
          <tbody>

                
    
             {/* Section a */}
             <tr>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6", textAlign: 'center' }}>a</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6"}}>
                <p>
                  Lectures, Seminars, tutorials, practical, contact hours undertaken as percentage of lectures allocated.
                </p>
                <label>
                  <input
                    type="radio"
                    name="a"
                    value="50"
                    onChange={(e) => handleRadioChange(e, "a")}
                  />
                  Total lectures conducted &gt; 90% score = 50
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="a"
                    value="40"
                    onChange={(e) => handleRadioChange(e, "a")}
                  />
                  90% &gt; Lectures taken ≥ 80% = 40
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="a"
                    value="30"
                    onChange={(e) => handleRadioChange(e, "a")}
                  />
                  80% &gt; Lectures taken ≥ 70% = 30
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="a"
                    value="0"
                    onChange={(e) => handleRadioChange(e, "a")}
                  />
                  No score if the number of lectures taken is less than 70%
                </label>
              </td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>50</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>50</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{scores.a}</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "a")}
                />
              </td>
            </tr>
           {/* Section b */}
           <tr>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6", textAlign: 'center' }}>b</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6"}}>
                <p>
                  Lectures or lab in excess of UGC norms (One point for each extra class) 
                  <br />
                  This refers to lecture load allotted above 16/week for Asst Prof or above 14/week for Associate Prof and Professor. Repeat classes for diploma students may be given 5 marks.
                </p>
                <label>
                  <input
                    type="radio"
                    name="b"
                    value="1"
                    onChange={(e) => handleRadioChange(e, "b")}
                  />
                  1 extra lecture/lab
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="b"
                    value="2"
                    onChange={(e) => handleRadioChange(e, "b")}
                  />
                  2 extra lectures/labs
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="b"
                    value="3"
                    onChange={(e) => handleRadioChange(e, "b")}
                  />
                  3 extra lectures/labs
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="b"
                    value="4"
                    onChange={(e) => handleRadioChange(e, "b")}
                  />
                  4 extra lectures/labs
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="b"
                    value="5"
                    onChange={(e) => handleRadioChange(e, "b")}
                  />
                  5 or more extra lectures/labs
                </label>
              </td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>5</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>5</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{scores.b}</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "b")}
                />
              </td>
            </tr>

            {/* Section c */}
            <tr>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6", textAlign: 'center' }}>c</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6"}}>
                <p>
                  Remedial lectures or Revision Lectures actually conducted for weak students (one point for each extra class in other than mentioned in 1.a)
                </p>
                <label>
                  <input
                    type="radio"
                    name="c"
                    value="1"
                    onChange={(e) => handleRadioChange(e, "c")}
                  />
                  1 Remedial lecture/ Revision lecture
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="c"
                    value="2"
                    onChange={(e) => handleRadioChange(e, "c")}
                  />
                  2 Remedial lectures/ Revision lectures
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="c"
                    value="3"
                    onChange={(e) => handleRadioChange(e, "c")}
                  />
                  3 Remedial lectures/ Revision lectures
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="c"
                    value="4"
                    onChange={(e) => handleRadioChange(e, "c")}
                  />
                  4 Remedial lectures/ Revision lectures
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="c"
                    value="5"
                    onChange={(e) => handleRadioChange(e, "c")}
                  />
                  5 or more Remedial lectures/ Revision lectures
                </label>
              </td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>5</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>5</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{scores.c}</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "c")}
                />
              </td>
            </tr>

            {/* Section d */}
            <tr>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6", textAlign: 'center' }}>d</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6"}}>
                <p>Learning material prepared for students: Provide short description of each work done in a separate sheet.</p>
                
                <Box sx={{ mt: 2 }}>
                  
                  <TextField
                    label="Quality PPT made by self (Max 5 points)"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 ,backgroundColor: 'white'}}
                    value={sectionDMarks.ppt}
                    onChange={(e) => handleMarksInput(e, "ppt", 5, setSectionDMarks)}
                  />
                  <TextField
                    label="Animations/Virtual labs/Website (Max 10 points)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2,backgroundColor: 'white' }}
                    value={sectionDMarks.animation}
                    onChange={(e) => handleMarksInput(e, "animation", 10, setSectionDMarks)}
                  />
                  <TextField
                    label="Good quality video lectures on public platforms (Max 10 points)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2,backgroundColor: 'white' }}
                    value={sectionDMarks.video}
                    onChange={(e) => handleMarksInput(e, "video", 10, setSectionDMarks)}
                  />
                  <TextField
                    label="Arranged guest lecture (2 pts for each lecture, max 10)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2,backgroundColor: 'white' }}
                    value={sectionDMarks.guestLecture}
                    onChange={(e) => handleMarksInput(e, "guestLecture", 10, setSectionDMarks)}
                  />
                  <TextField
                    label="Arranged subject related Industrial Visit (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2,backgroundColor: 'white' }}
                    value={sectionDMarks.industrialVisit}
                    onChange={(e) => handleMarksInput(e, "industrialVisit", 2, setSectionDMarks)}
                  />
                  <TextField
                    label="Use of ICT (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2,backgroundColor: 'white' }}
                    value={sectionDMarks.ict}
                    onChange={(e) => handleMarksInput(e, "ict", 2, setSectionDMarks)}
                  />
                  <TextField
                    label="Innovative pedagogy (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2,backgroundColor: 'white' }}
                    value={sectionDMarks.pedagogy}
                    onChange={(e) => handleMarksInput(e, "pedagogy", 2, setSectionDMarks)}
                  />
                  <TextField
                    label="Content beyond syllabus (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    value={sectionDMarks.contentBeyond}
                    onChange={(e) => handleMarksInput(e, "contentBeyond", 2, setSectionDMarks)}
                  />
                </Box>
              </td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{totalSectionDMarks}</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6", textAlign: 'center'}}>40</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{Math.min(totalSectionDMarks, 40)}</td> {/* Self Appraisal Score cannot exceed 40 */}
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "d")}
                />
              </td>
            </tr>

            {/* Section e */}
            <tr>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6", textAlign: 'center'}}>e</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6"}}>
                <p>Updating of subject content course improvement etc. Provide a short description of each work done in a separate sheet.</p>
                
                <Box sx={{ mt: 2 }}>
                  <p>1. Updated lecture notes (Max 3 points)</p>
                  <TextField
                  label="1. Updated lecture notes (Max 3 points)"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.lectureNotes}
                    onChange={(e) => handleMarksInput(e, "lectureNotes", 3, setSectionEMarks)}
                  />
                  <p>2. Updated lab manual (Max 3 points)</p>
                  <TextField
                    label="2. Updated lab manual (Max 3 points)"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.labManual}
                    onChange={(e) => handleMarksInput(e, "labManual", 3, setSectionEMarks)}
                  />
                  <p>3. Question bank (Max 2 points)</p>
                  <TextField
                  label="3. Question bank (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.questionBank}
                    onChange={(e) => handleMarksInput(e, "questionBank", 2, setSectionEMarks)}
                  />
                  
                  <p>4. Question Paper solution:</p>
                  <p>a. Term Test solution (Max 2 points)</p>
                  <TextField
                    label="a. Term Test solution (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2, }}  // Indent the sub-question
                    value={sectionEMarks.termTestSolution}
                    onChange={(e) => handleMarksInput(e, "termTestSolution", 2, setSectionEMarks)}
                  />
                  <p>b. Model University solution (Max 5 points)</p>
                  <TextField
                  label="b. Model University solution (Max 5 points)"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2, }}  // Indent the sub-question
                    value={sectionEMarks.modelUniSolution}
                    onChange={(e) => handleMarksInput(e, "modelUniSolution", 5, setSectionEMarks)}
                  />
                  <p>5. Assignment solution (Max 2 points)</p>
                  <TextField
                    label="5. Assignment solution (Max 2 points)"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.assignmentSolution}
                    onChange={(e) => handleMarksInput(e, "assignmentSolution", 2, setSectionEMarks)}
                  />
                  <p>6. Syllabus setting (Max 5 marks each, max 2 syllabus settings)</p>
                  <TextField
                    labal="6. Syllabus setting (Max 5 marks each, max 2 syllabus settings)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }} // 5 points for each syllabus setting, max 10
                    fullWidth
                    value={sectionEMarks.syllabusSetting}
                    onChange={(e) => handleMarksInput(e, "syllabusSetting", 10, setSectionEMarks)}
                  />
                </Box>
              </td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{totalSectionEMarks}</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>30</td> {/* Max 30 points for section e */}
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>{Math.min(totalSectionEMarks, 30)}</td>
              <td style={{ padding: "10px" ,  border: "1px solid #dee2e6",textAlign: 'center'}}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "e")}
                />
              </td>
            </tr>
        {/* Section f */}
        <tr>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>f</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                <p>Examination duties (invigilation; Question paper setting, evaluation/assessment of answer scripts) as per allotment.</p>
                
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Invigilation (Max 5 points)"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.invigilation}
                    onChange={(e) => handleMarksInput(e, "invigilation", 5, setSectionFMarks)}
                  />
                  <TextField
                    label="Evaluation of answer script, preparation of result list on time (Max 5 points)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.evaluation}
                    onChange={(e) => handleMarksInput(e, "evaluation", 10, setSectionFMarks)}
                  />
                  <TextField
                    label="Question paper setting (Max 10 points)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.questionPaperSetting}
                    onChange={(e) => handleMarksInput(e, "questionPaperSetting", 10, setSectionFMarks)}
                  />
                </Box>
              </td>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>{totalSectionFMarks}</td>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>20</td> {/* Max 20 points for section f */}
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>{Math.min(totalSectionFMarks, 20)}</td>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "f")}
                />
              </td>
            </tr>
                      {/* Total */}
                      <tr>
              <td colSpan="4" style={{ padding: "10px", textAlign: "right", fontWeight: "bold", border: "1px solid #dee2e6" }}>
                Total Self Appraisal Score (out of 150):
              </td>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>
                {totalSelfAppraisalScore}
              </td>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}></td>
            </tr>
          </tbody>
        </table>

        {/* Save and Back Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
        <Button variant="outlined" color="primary" onClick={handleBack} disabled>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/Category2" >
            Next
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Category1;