import "./styles/app.css";
import EducationForm from "./components/forms/EducationForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import { Cv } from "./components/Cv";
import { SkillForm } from "./components/forms/SkillForm.jsx";
import { LanguageForm } from "./components/forms/LanguageForm.jsx";
import PersonalInfoForm from "./components/forms/PersonalInfoForm.jsx";
import { CVProvider} from "./context/CVContext.jsx";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <main>
      <CVProvider>
        <div className="section-wrapper">
          <PersonalInfoForm />
          <EducationForm />
          <ExperienceForm />
          <button
            type="button"
            onClick={() => {
              visible ? setVisible(false) : setVisible(true);
            }}
          >
            +
          </button>
          <section className={visible ? "visible" : "invisible"}>
            <SkillForm />
            <LanguageForm />
          </section>
        </div>
        <div className="cv-wrapper">
          <Cv />
        </div>
      </CVProvider>
    </main>
  );
}

export default App;
