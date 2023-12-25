import { useCVContext } from "../context/CVContext";
import { EducationCard } from "./cards/EducationCard";
import { ExperienceCard } from "./cards/ExperienceCard";
import { LanguageCard } from "./cards/LanguageCard";
import { PersonalDetailsCard } from "./cards/PersonalDetailsCard";
import { SkillCard } from "./cards/SkillCard";

export const Cv = () => {

  const {skills, personalInfo, languages, educations, experiences} = useCVContext();  
  
  return (
    <div className="cv">
      <header>
        <PersonalDetailsCard personalInfo={personalInfo}/>
      </header>
      <section>
        <h3 className={educations.length == 0 ? "invisible" : "section-title"}>Education</h3>
        {educations.map((education)=>(<EducationCard education={education} key={education.id}/>))}
      </section>
      <section>
        <h3 className={experiences.length == 0 ? "invisible" : "section-title"}>Professional Experience</h3>
        {experiences.map((experience)=>(<ExperienceCard experience={experience} key={experience.id}/>))}
      </section>
      <section>
        <h3 className={skills.length == 0 ? "invisible" : "section-title"}>Skills</h3>
        {skills.map((skill)=>(
          <SkillCard skill={skill} key={skill.id}/>
        ))}
      </section>
      <section>
        <h3 className={languages.length == 0 ? "invisible" : "section-title"}>Languages</h3>
        {
          languages.map((language)=>(
            <LanguageCard language={language} key={language.id}/>
          ))}
      </section>
    </div>
  );
};



