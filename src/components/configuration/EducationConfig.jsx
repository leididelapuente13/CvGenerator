import { useCVContext } from "../../context/CVContext.jsx";
import { EducationCard } from "../cards/EducationCard.jsx";

export const EducationConfig = () => {
  const {educations, setEducations} = useCVContext();

  const handleDeleteEducation = (id) =>{
    const toRemove = educations.find(education => education.id === id);
    setEducations(educations.filter(education => education != toRemove));
  }

  const handleEditEducation = (id) => {
    console.log(id);
  }
  return (
    <div className="education-config">
        {educations.map((education)=>(<div key={education.id}><EducationCard education={education} key={education.id}/> <button type="button" onClick={()=>{handleDeleteEducation(education.id)}}>X</button> <button type="button" onClick={()=>{handleEditEducation(education.id)}}>Edit</button></div>))}
    </div>
  )
}
