import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import { v4 as randomId } from "uuid";

export const SkillForm = () => {
  const [newSkill, setNewSkill] = useState({ id: "", skill: "" });
  const { skills, setSkills } = useCVContext();

  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkills((skills) => [...skills, { ...newSkill, id: randomId() }]);
    console.log(skills, newSkill);
    setNewSkill({ skill: "", id: "" });
  };

  const handleDeleteSkill = (id) => {
  
  };

  const handleEditSkill = (id) => {
    console.log(id);
  };

  return (
    <form onSubmit={handleAddSkill}>
      <h3>Skills</h3>
      <label>Skill</label>
      <input
        type="text"
        placeholder="Redux"
        value={newSkill.skill}
        onChange={(e) => {
          setNewSkill({ ...newSkill, skill: e.target.value });
        }}
        name="skill"
      />
      <div className="buttons-wrapper">
        <input type="submit" value="Add" className="btn-submit"/>
        <button type="button" className="btn-edit">
          Edit
        </button>
      </div>
      <div>
        {skills.map((skill)=>(
          <div key={skill.id}>
            <p>{skill.skill}</p>
            <button type="button" onClick={()=>handleDeleteSkill(skill.id)}>X</button>
            <button type="button" onClick={()=>handleEditSkill(skill.id)}>Edit</button>
          </div>
        ))}
      </div>
    </form>
  );
};
