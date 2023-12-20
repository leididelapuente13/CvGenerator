import { EducationCard } from "./cards/EducationCard";
import { ExperienceCard } from "./cards/ExperienceCard";
import { LanguageCard } from "./cards/LanguageCard";
import { PersonalDetailsCard } from "./cards/PersonalDetailsCard";
import { SkillCard } from "./cards/SkillCard";
import { SkillContext } from "../context/CVContext";
export const Cv = () => {
  const experience = {
    companyName: "Tech Dev", 
    position: "Front-end Developer", 
    startDate: "1-1-2024", 
    endDate: "10-11-2026", 
    location: "Colombia", 
    description: "dnndmd dgdbbdjdj hhdndhjdjdm jdjmdmdj"
  }

  const education = {
    school: "Nothing", 
    degree: "System engineer",
    startDate: "12-05-2021", 
    endDate: "12-05-2025", 
    location: "Colombia"
  }

  const personalInfo = {
    fullName: "Leidi De La Puente",
    email: "leididelapuente3@gmail.com",
    phoneNumber: "3218381415",
    address: "Colombia",
  }

  return (
    <div className="cv">
      <header>
        <PersonalDetailsCard personalInfo={personalInfo}/>
      </header>
      <section>
        <h3 className="section-title">Education</h3>
        <EducationCard education={education}/>
      </section>
      <section>
        <h3 className="section-title">Professional Experience</h3>
        <ExperienceCard experience={experience}/>
      </section>
      <section>
        <h3 className="section-title">Skills</h3>
        <SkillContext.Provider value={{}}>
          <SkillCard skill="React" />
        </SkillContext.Provider>
      </section>
      <section>
        <h3 className="section-title">Languages</h3>
        <LanguageCard language={{"name": "English", "fluency": "C2"}} />
      </section>
    </div>
  );
};



