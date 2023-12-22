import { useState } from "react";

const EducationForm = () => {
  const [education, setEducation] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "", 
    location: "",
  })
  return (
    <div>
      <form action="">
        <h3>Education</h3>
        <label htmlFor="school">School</label>
        <input type="text" id="school" placeholder="Enter school name" name="schoolName" value={education.schoolName}/>

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" placeholder="Enter degree title" name="degree" value={education.degree}/>

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" placeholder="Select start date" name="startDate" value={education.startDate}/>

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" placeholder="Select end date" name="endDate" value={education.endDate}/>

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter location" name="location" value={education.location}/>
        <input type="submit" value="Save" className="btn-submit" />
      </form>
    </div>
  );
};

export default EducationForm;
