import { createContext, useContext, useState } from "react";

export const CVContext = createContext();

export const useCVContext = () =>{
    return useContext(CVContext)
}

export const CVProvider = ({children}) =>{
    const [personalInfo, setPersonalInfo] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [language, setLanguage] = useState([]);

    return(
        <CVContext.Provider value={{personalInfo, setPersonalInfo, education, setEducation, experience, setExperience, skills, setSkills, language, setLanguage}}>
            {children}
        </CVContext.Provider>
    )
}