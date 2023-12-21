import { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import {v4 as randomId} from 'uuid';

export const SkillForm = () => {
  const [newSkill, setNewSkill] = useState({"id": "", "skill":""});
  const {skills, setSkills} = useCVContext();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSkills((skills)=>[...skills, {...newSkill, id: randomId()}]);
    console.log(skills, newSkill)
    setNewSkill({skill: "", id: ""});
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Skills</h3>
      <label>Skill</label>
      <input type="text" placeholder="Redux" value={newSkill.skill} onChange={(e)=>{setNewSkill({...newSkill, skill: e.target.value})}} name="skill" />
      <input type="submit" value="Add" className="btn-submit" />
    </form>
  );
};
