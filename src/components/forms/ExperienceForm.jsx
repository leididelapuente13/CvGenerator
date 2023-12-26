import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import { v4 as randomId } from "uuid";

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

  const { setExperiences, experiences } = useCVContext();

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setExperiences([...experiences, { ...experience, id: randomId() }]);
    setExperience({
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const handleDeleteExperience = (id) =>{
    const toRemove = experiences.find((experience) => experience.id === id);
    setExperiences(experiences.filter((experience) => experience != toRemove));
  }

  const setValuesInForm = (id) =>{
    experiences.find(id);
  }

  const handleEditExperience = (id) =>{
    console.log(id);
  }

  return (
    <div>
      <form onSubmit={handleAddExperience}>
        <h3>Experience</h3>

        <label htmlFor="CompanyName">Company Name</label>
        <input
          type="text"
          id="CompanyName"
          placeholder="Enter company name"
          name="company"
          value={experience.company}
          onChange={handleOnChange}
        />

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
        <input
          type="date"
          id="start-date"
          name="startDate"
          value={experience.startDate}
          onChange={handleOnChange}
        />

        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          id="end-date"
          name="endDate"
          value={experience.endDate}
          onChange={handleOnChange}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Enter location"
          name="location"
          value={experience.location}
          onChange={handleOnChange}
        />

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
        <div className="buttons-wrapper">
          <input type="submit" value="Save" className="btn-submit" />
          <button type="button" className="btn-edit" onClick={()=>handleEditExperience(experience.id)}>
            Edit
          </button>
        </div>

        <div>
          {experiences.map((experience) => (
            <div key={experience.id} className="div-config">
              <p>{experience.position}</p>
              <p>{experience.company}</p>
              <button
                type="button"
                onClick={() => {
                  handleDeleteExperience(experience.id);
                }}
              >
                X
              </button>
              <button type="button" onClick={()=>{setValuesInForm(experience.id)}}>Edit</button>
            </div>
          ))}
        </div>

      </form>
    </div>
  );
};
export default ExperienceForm;
