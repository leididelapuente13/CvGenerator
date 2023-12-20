import "./styles/app.css";
import EducationForm from "./components/forms/EducationForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import { Cv } from "./components/Cv";
import { SkillForm } from "./components/forms/SkillForm.jsx";
import { LanguageForm } from "./components/forms/LanguageForm.jsx";
import PersonalInfoForm from "./components/forms/PersonalInfoForm.jsx";

function App() {
  return (
    <main>
      <div className="section-wrapper">
        <PersonalInfoForm />
        <EducationForm />
        <ExperienceForm />
        <SkillForm/>
        <LanguageForm/>
      </div>
      <div className="cv-wrapper">
        <Cv/>
      </div>
    </main>
  );
}

export default App;
