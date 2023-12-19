import "./styles/app.css";
import FormInfo from "./components/FormInfo.jsx";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import { Cv } from "./components/Cv";
import { SkillForm } from "./components/SkillForm.jsx";
import { LanguageForm } from "./components/LanguageForm.jsx";

function App() {
  return (
    <main>
      <div className="section-wrapper">
        <FormInfo />
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
