import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import {v4 as randomId} from 'uuid';

const ExperienceForm = () => {
  const [experience, setExperience] = useState({
    id: "",
    company: "",
    position: "", 
    startDate: "", 
    endDate: "",
    location: "",
    description: "", 
  });

  const {setExperiences, experiences} = useCVContext();

  const handleOnChange = (event) =>{
    const {value, name}= event.target;
    setExperience({...experience, [name]: value});
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    setExperiences([...experiences, {...experience, id: randomId()}])
    setExperience({
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    })
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Experience</h3>

        <label htmlFor="CompanyName">Company Name</label>
        <input type="text" id="CompanyName" placeholder="Enter company name" name="company" value={experience.company} onChange={handleOnChange}/>

        <label htmlFor="PositionTitle">Position Title</label>
        <input
          type="text"
          id="PositionTitle"
          placeholder="Enter position title"
          name="position"
          value={experience.position}
          onChange={handleOnChange}
        />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" name="startDate" value={experience.startDate} onChange={handleOnChange}/>

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" name="endDate" value={experience.endDate} onChange={handleOnChange}/>

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter location" name="location" value={experience.location} onChange={handleOnChange}/>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter job description"
          name="description"
          value={experience.description}
          onChange={handleOnChange}
        ></textarea>

        <input type="submit" value="Save" className="btn-submit" />
      </form>
    </div>
  );
};
export default ExperienceForm;
