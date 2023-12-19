import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { PersonalDetails } from "./PersonalDetailsCard";

export const Cv = () => {
  const experience = {
    companyName: "Tech Dev", 
    position: "Front-end Developer", 
    startDate: "1-1-2024", 
    endDate: "on going", 
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

  return (
    <div className="cv">
      <header>
        <PersonalDe
      <section>
        <h3 className="section-title">Education</h3>
        <EducationCard education={education}/>
      </section>
      <section>
        <h3 className="section-title">Professional Experience</h3>
        <ExperienceCard experience={experience}/>
      </section>
    </div>
  );
};



