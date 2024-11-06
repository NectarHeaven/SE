import React, { useState } from "react";
import ResponsiveAppBar from './navbar';
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Category2() {
  // State to store the appraisal scores for each section
  const [scores, setScores] = useState({
    d: 0,
    e: 0,
    f: 0,
  });

  // State to store marks for sections d, e, and f
  const [sectionDMarks, setSectionDMarks] = useState({
    corporateLifeContribution: 0,  // For contribution to corporate life (no max limit)
    governanceResponsibilities: 0,  // For governance responsibilities (max 25 pts)
    organizedConference: 0,  // For conference (max 15 pts)

    // Workshop-related fields for b2 criteria
    workshopFDPOneWeekOrMore: 0,  // Points for Workshop/FDP (>1 week) (max 10 pts)
    workshopFDPTwoToFiveDays: 0,  // Points for Workshop/FDP (2-5 days) (max 5 pts)
    workshopFDPOneToTwoDays: 0,  // Points for Workshop/FDP (1-2 days) (max 3 pts)
    committeeMember: 0,  // Points for Committee member of ICAST (max 2 pts)
    seminars: 0,  // Points for Seminars (max 1 pt)

    deliveringLectureCollege: 0,  // Lecture at college level (max 3 pts)
    deliveringLectureSTTP: 0,  // STTP lecture (max 10 pts)
    deliveringLectureInternational: 0,  // International lecture (max 15 pts)

    labEstablishmentIndividual: 0,  // Lab establishment individual (max 10 pts)
  });

  const [sectionEMarks, setSectionEMarks] = useState({
    fieldStudies: 0, // Points for Field studies/Educational Tour
    placementActivity: 0, // Points for Placement activity
    communityService: 0, // Points for Community Service, Social Orientation
    iqacMembers: 0, // Points for IQAC members/DQC/PAC
    iicMembers: 0, // Points for IIC members
    alumniCommittee: 0, // Points for Alumni committee members
    admissionCellMembers: 0, // Points for Admission cell members
    atfCoordinators: 0, // Points for ATF Coordinators
    nssNccNso: 0, // Points for NSS/NCC/NSO/other
    examCoordinator: 0, // Points for Exam coordinator
    timeTableCoordinator: 0, // Points for Time Table coordinator
    projectCoordinators: 0, // Points for Project Coordinators
    classTeacher: 0, // Points for Class teacher
    proctorCoordinator: 0, // Points for Proctor coordinator / NPTEL coordinator
    projectCompetitionCoordinators: 0, // Points for Project Competition Coordinators
    iiicIVCoordinators: 0, // Points for IIIC Coordinators, IV Coordinators
    otherCoordinators: 0, // Points for Any other coordinators
  });

  const [sectionFMarks, setSectionFMarks] = useState({
    coordinatorStudentChapters: 0, // Points for Coordinator of Student Chapters
    mediaParticipation: 0, // Points for Media Participation
    membershipCommittees: 0, // Points for Membership in Committees
    participationConferences: 0, // Points for Participation in Subject Associations/Conferences
    iitNitGovtCollege: 0, // Points for IIT/NIT/Govt College/TEQIP
    industryRelated: 0, // Points for Industry Related Activities
    notBelonging: 0, // Points for Not Belonging to Above
    boardsOfStudies: 0, // Points for Boards of Studies
  });

  // State to store uploaded files
  const [files, setFiles] = useState({
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
    Math.min(totalSectionFMarks, 20);

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
            {/* Only Section D (updated) */}
            <tr>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>1.</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                <p>Contribution to Corporate life and management of Institution - List yearly or semester-wise responsibilities.</p>

                {/* Text Box for Contributions */}
                <TextField
                  label="Contributions Description"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <p>a) Evaluation Criteria:</p>

                <p>
                  a1) Contribution to corporate life in colleges and universities through meetings/popular lectures/subject-related events/articles in college magazines and university volumes (3 pts each).
                  <TextField
                    label="Points for Contribution to Corporate Life"
                    type="number"
                    inputProps={{ min: 0 }} // No max limit
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.corporateLifeContribution}
                    onChange={(e) => handleMarksInput(e, "corporateLifeContribution", Infinity, setSectionDMarks)} // Set Infinity for no maximum
                  />
                </p>

                <p>
                  a2) Institutional governance responsibilities like Vice-Principal, Deans, HOD, Director, IQAC Coordinator/T&P officer, Exam cell in charge, Admission cell in charge maximum of 25 points (or any other equivalent responsibility).
                  <TextField
                    label="Governance Responsibilities"
                    type="number"
                    inputProps={{ min: 0, max: 25 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.governanceResponsibilities}
                    onChange={(e) => handleMarksInput(e, "governanceResponsibilities", 25, setSectionDMarks)}
                  />
                </p>

                <p>
                  b) Organised conference/workshop/seminar/FDP/STTP etc. (max two events to be considered).
                </p>

                <p>
                  b1) Conference - 15 points
                  <TextField
                    label="Points for Conference"
                    type="number"
                    inputProps={{ min: 0, max: 15 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.organizedConference}
                    onChange={(e) => handleMarksInput(e, "organizedConference", 15, setSectionDMarks)}
                  />
                </p>

                <p>
                  b2) Workshop/FDP/STTP/certification programs (this is a criteria, not a question).
                </p>
                <p>
                  b2.1) One week or more - 10 points
                  <TextField
                    label="Points for Workshop/FDP (>1 week)"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.workshopFDPOneWeekOrMore}
                    onChange={(e) => handleMarksInput(e, "workshopFDPOneWeekOrMore", 10, setSectionDMarks)}
                  />
                </p>
                <p>
                  b2.2) Less than a week but greater than two days - 5 points
                  <TextField
                    label="Points for Workshop/FDP (2-5 days)"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.workshopFDPTwoToFiveDays}
                    onChange={(e) => handleMarksInput(e, "workshopFDPTwoToFiveDays", 5, setSectionDMarks)}
                  />
                </p>
                <p>
                  b2.3) One to two days - 3 points
                  <TextField
                    label="Points for Workshop/FDP (1-2 days)"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.workshopFDPOneToTwoDays}
                    onChange={(e) => handleMarksInput(e, "workshopFDPOneToTwoDays", 3, setSectionDMarks)}
                  />
                </p>
                <p>
                  b2.4) Committee member of ICAST
                  <TextField
                    label="Points for Committee Member of ICAST"
                    type="number"
                    inputProps={{ min: 0, max: 2 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.committeeMember}
                    onChange={(e) => handleMarksInput(e, "committeeMember", 2, setSectionDMarks)}
                  />
                </p>
                <p>
                  b2.5) Seminars - 1 point
                  <TextField
                    label="Points for Seminars"
                    type="number"
                    inputProps={{ min: 0, max: 1 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.seminars}
                    onChange={(e) => handleMarksInput(e, "seminars", 1, setSectionDMarks)}
                  />
                </p>

                <p>
                  b3) Delivering Lecture/conducting workshop (not paper presentation).
                </p>
                <p>
                  b3.1) At college level for faculty - 3 points
                  <TextField
                    label="Points for Delivering Lecture at College Level"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.deliveringLectureCollege}
                    onChange={(e) => handleMarksInput(e, "deliveringLectureCollege", 3, setSectionDMarks)}
                  />
                </p>
                <p>
                  b3.2) During STTP - 10 points
                  <TextField
                    label="Points for Delivering Lecture During STTP"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.deliveringLectureSTTP}
                    onChange={(e) => handleMarksInput(e, "deliveringLectureSTTP", 10, setSectionDMarks)}
                  />
                </p>
                <p>
                  b3.3) International - 15 points
                  <TextField
                    label="Points for International Lecture"
                    type="number"
                    inputProps={{ min: 0, max: 15 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.deliveringLectureInternational}
                    onChange={(e) => handleMarksInput(e, "deliveringLectureInternational", 15, setSectionDMarks)}
                  />
                </p>


                <p>
                  c) Establishing labs with the help of industry/another organization (max 5 per individual, max 10 if only 1 person is involved).
                  <TextField
                    label="Points for Establishing Labs"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    value={sectionDMarks.labEstablishmentIndividual}
                    onChange={(e) => handleMarksInput(e, "labEstablishmentIndividual", 10, setSectionDMarks)}
                  />
                </p>
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>{totalSectionDMarks}</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>35</td> {/* Update max API score allotted to 35 */}
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>{Math.min(totalSectionDMarks, 35)}</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "d")}
                />
              </td>
            </tr>

            {/* Section e */}
            <tr>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>2.</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                <p>Extension, Co-curricular and field-based activities</p>

                <Box sx={{ mt: 2 }}>
                  <p>a) Field studies / Educational Tour (other than subject-related in 1.d)</p>
                  <TextField
                    label="Points for Field Studies/Educational Tour"
                    type="number"
                    inputProps={{ min: 0, max: 25 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.fieldStudies}
                    onChange={(e) => handleMarksInput(e, "fieldStudies", 25, setSectionEMarks)}
                  />

                  <p>b) Placement activity (for coordinators) - 15 marks</p>
                  <TextField
                    label="Points for Placement Activity"
                    type="number"
                    inputProps={{ min: 0, max: 15 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.placementActivity}
                    onChange={(e) => handleMarksInput(e, "placementActivity", 15, setSectionEMarks)}
                  />

                  <p>c) Community Service, Social Orientation - 10 marks</p>
                  <TextField
                    label="Points for Community Service/Social Orientation"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.communityService}
                    onChange={(e) => handleMarksInput(e, "communityService", 10, setSectionEMarks)}
                  />

                  <p>d) IQAC members/DQC/PAC - 10 marks</p>
                  <TextField
                    label="Points for IQAC/DQC/PAC"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.iqacMembers}
                    onChange={(e) => handleMarksInput(e, "iqacMembers", 10, setSectionEMarks)}
                  />

                  <p>e) IIC members - 10 marks</p>
                  <TextField
                    label="Points for IIC Members"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.iicMembers}
                    onChange={(e) => handleMarksInput(e, "iicMembers", 10, setSectionEMarks)}
                  />

                  <p>f) Alumni committee members - 10 marks</p>
                  <TextField
                    label="Points for Alumni Committee Members"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.alumniCommittee}
                    onChange={(e) => handleMarksInput(e, "alumniCommittee", 10, setSectionEMarks)}
                  />

                  <p>g) Admission cell members - 15 marks</p>
                  <TextField
                    label="Points for Admission Cell Members"
                    type="number"
                    inputProps={{ min: 0, max: 15 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.admissionCellMembers}
                    onChange={(e) => handleMarksInput(e, "admissionCellMembers", 15, setSectionEMarks)}
                  />

                  <p>h) ATF Coordinators Member & dept supports - 5 marks</p>
                  <TextField
                    label="Points for ATF Coordinators"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.atfCoordinators}
                    onChange={(e) => handleMarksInput(e, "atfCoordinators", 5, setSectionEMarks)}
                  />

                  <p>i) NSS/NCC/NSO/other - 15 marks</p>
                  <TextField
                    label="Points for NSS/NCC/NSO/Other"
                    type="number"
                    inputProps={{ min: 0, max: 15 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.nssNccNso}
                    onChange={(e) => handleMarksInput(e, "nssNccNso", 15, setSectionEMarks)}
                  />

                  <p>j) Exam coordinator - 10 marks</p>
                  <TextField
                    label="Points for Exam Coordinator"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.examCoordinator}
                    onChange={(e) => handleMarksInput(e, "examCoordinator", 10, setSectionEMarks)}
                  />

                  <p>k) Time Table coordinator - 10 marks</p>
                  <TextField
                    label="Points for Time Table Coordinator"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.timeTableCoordinator}
                    onChange={(e) => handleMarksInput(e, "timeTableCoordinator", 10, setSectionEMarks)}
                  />

                  <p>l) Project Coordinators - 5 marks</p>
                  <TextField
                    label="Points for Project Coordinators"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.projectCoordinators}
                    onChange={(e) => handleMarksInput(e, "projectCoordinators", 5, setSectionEMarks)}
                  />

                  <p>m) Class teacher - 10 marks for 1 semester</p>
                  <TextField
                    label="Points for Class Teacher"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.classTeacher}
                    onChange={(e) => handleMarksInput(e, "classTeacher", 10, setSectionEMarks)}
                  />

                  <p>n) Proctor coordinator / NPTEL coordinator - max 3 marks</p>
                  <TextField
                    label="Points for Proctor/NPTEL Coordinator"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.proctorCoordinator}
                    onChange={(e) => handleMarksInput(e, "proctorCoordinator", 3, setSectionEMarks)}
                  />

                  <p>o) Project Competition Coordinators - 5 marks</p>
                  <TextField
                    label="Points for Project Competition Coordinators"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.projectCompetitionCoordinators}
                    onChange={(e) => handleMarksInput(e, "projectCompetitionCoordinators", 5, setSectionEMarks)}
                  />

                  <p>p) IIIC Coordinators, IV Coordinators - 5 marks</p>
                  <TextField
                    label="Points for IIIC/IV Coordinators"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.iiicIVCoordinators}
                    onChange={(e) => handleMarksInput(e, "iiicIVCoordinators", 5, setSectionEMarks)}
                  />

                  <p>q) Any other coordinators - max 5 marks (provided it is not repeated elsewhere)</p>
                  <TextField
                    label="Points for Other Coordinators"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionEMarks.otherCoordinators}
                    onChange={(e) => handleMarksInput(e, "otherCoordinators", 5, setSectionEMarks)}
                  />
                </Box>
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>{totalSectionEMarks}</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>30</td> {/* Max 30 points for section e */}
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>{Math.min(totalSectionEMarks, 30)}</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: 'center' }}>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  onChange={(e) => handleFileUpload(e, "e")}
                />
              </td>
            </tr>

            {/* Section f */}
            <tr>
              <td style={{ padding: "10px", textAlign: "center", border: "1px solid #dee2e6" }}>3.</td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                <p>Professional Development Activities</p>

                <Box sx={{ mt: 2 }}>
                  <p>a) Coordinator of student chapters (IEEE/IETE/IET/CSI/ISTE etc.) - 5 points</p>
                  <TextField
                    label="Points for Coordinator of Student Chapters"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.coordinatorStudentChapters}
                    onChange={(e) => handleMarksInput(e, "coordinatorStudentChapters", 5, setSectionFMarks)}
                  />

                  <p>b) Media participation in profession-related talks/debates - 5 points</p>
                  <TextField
                    label="Points for Media Participation"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.mediaParticipation}
                    onChange={(e) => handleMarksInput(e, "mediaParticipation", 5, setSectionFMarks)}
                  />

                  <p>c) Membership in profession-related committees at state and national level - max 3 points</p>
                  <TextField
                    label="Points for Membership in Committees"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.membershipCommittees}
                    onChange={(e) => handleMarksInput(e, "membershipCommittees", 3, setSectionFMarks)}
                  />

                  <p>d) Participation in subject associations, conferences, seminars without paper presentation - 1 mark each subject to max 3</p>
                  <TextField
                    label="Points for Participation in Subject Associations/Conferences"
                    type="number"
                    inputProps={{ min: 0, max: 3 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.participationConferences}
                    onChange={(e) => handleMarksInput(e, "participationConferences", 3, setSectionFMarks)}
                  />

                  <p>e1) IIT/NIT/Govt college/TEQIP - 10 each for external, 8 for local</p>
                  <TextField
                    label="Points for IIT/NIT/Govt College/TEQIP"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.iitNitGovtCollege}
                    onChange={(e) => handleMarksInput(e, "iitNitGovtCollege", 10, setSectionFMarks)}
                  />
                  <p>e) Participation in short term training courses less
                    than one-week duration</p>
                  <p>e2) Industry related - max 10 for outside Mumbai, 5 in Mumbai</p>
                  <TextField
                    label="Points for Industry Related Activities"
                    type="number"
                    inputProps={{ min: 0, max: 10 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.industryRelated}
                    onChange={(e) => handleMarksInput(e, "industryRelated", 10, setSectionFMarks)}
                  />

                  <p>e3) Not belonging to above - 5 for external, 4 for local</p>
                  <TextField
                    label="Points for Not Belonging to Above"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.notBelonging}
                    onChange={(e) => handleMarksInput(e, "notBelonging", 5, setSectionFMarks)}
                  />

                  <p>f) Boards of Studies - (Add relevant points here)</p>
                  <TextField
                    label="Points for Boards of Studies"
                    type="number"
                    inputProps={{ min: 0 }} // Define max if needed
                    fullWidth
                    sx={{ mb: 2 }}
                    value={sectionFMarks.boardsOfStudies}
                    onChange={(e) => handleMarksInput(e, "boardsOfStudies", Infinity, setSectionFMarks)} // Set Infinity for no maximum
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
            <tr>
              <td colSpan="4" style={{ padding: "10px", textAlign: "right", fontWeight: "bold", border: "1px solid #dee2e6" }}>
                Total Self Appraisal Score Of Category II (out of 100):
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
          <Button variant="outlined" color="primary" component={Link} to="/Category1">
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSave}>
            Next
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Category2;