import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import { v4 as randomId } from "uuid";
import { IoIosTrash, IoMdCreate } from "react-icons/io";

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
    const toRemove = skills.find((skill)=>skill.id === id);
    setSkills(skills.filter((skill)=>skill != toRemove));
  };

  const setSkillInForm = (id) =>{
    const toDisplay = skills.find((skill)=>skill.id === id);
    setNewSkill({...newSkill, skill: toDisplay.skill});
  }

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
        <button type="button" className="btn-edit" onClick={()=>handleEditSkill(newSkill.id)}>
          Edit
        </button>
      </div>
      <div>
        {skills.map((skill)=>(
          <div key={skill.id} className="div-config">
            <p>{skill.skill}</p>
            <button type="button" onClick={()=>handleDeleteSkill(skill.id)}><IoIosTrash /></button>
            <button type="button" onClick={()=>setSkillInForm(skill.id)}><IoMdCreate /></button>
          </div>
        ))}
      </div>
    </form>
  );
};
