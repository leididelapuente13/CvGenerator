import "./styles/app.css";
import FormInfo from "./components/FormInfo.jsx";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import { Cv } from "./components/Cv";

function App() {
  return (
    <main>
      <div className="section-wrapper">
        <FormInfo />
        <EducationForm />
        <ExperienceForm />
      </div>
      <div className="cv-wrapper">
        <Cv />
      </div>
    </main>
  );
}

export default App;
